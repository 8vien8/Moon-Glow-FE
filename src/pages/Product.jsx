import { useState, useEffect, useRef } from "react";

// Import components
import ProductCard from "../components/product/ProductCard";
import FilterBar from "../components/product/FilterBar";

// Import services
import useProductService from "../services/product";

function Product() {
    const productService = useProductService();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("All Categories");
    const [status, setStatus] = useState("All Status");
    const [sortBy, setSortBy] = useState("default");

    const [animate, setAnimate] = useState(false); // Animation state

    const isFetched = useRef(false);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!isFetched.current) {
                const data = await productService.getProducts();
                setProducts(data);
                setFilteredProducts(data);
                isFetched.current = true;
            }
        };
        fetchProducts();
    }, [productService]);

    // Filter and Sort Logic
    useEffect(() => {
        let filtered = [...products];

        if (category !== "All Categories") {
            filtered = filtered.filter(product => product.category === category);
        }

        if (status !== "All Status") {
            filtered = filtered.filter(product => product.status === status);
        }

        if (sortBy === "priceLowToHigh") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === "priceHighToLow") {
            filtered.sort((a, b) => b.price - a.price);
        }

        // Trigger animation on filter change
        setAnimate(false);
        setTimeout(() => {
            setFilteredProducts(filtered);
            setAnimate(true);
        }, 200); // Delay to allow smooth transition

    }, [category, status, sortBy, products]);

    // Define categories to display separately
    const categoriesToDisplay = ["Phone Strap", "Candles", "Key Chains", "Wool Products"];

    // Group products by category
    const groupedProducts = categoriesToDisplay.reduce((acc, cat) => {
        acc[cat] = filteredProducts.filter(product => product.category === cat);
        return acc;
    }, {});

    return (
        <div className="p-4 mx-2">
            {/* Reusable Filter Bar Component */}
            <FilterBar
                category={category}
                setCategory={setCategory}
                status={status}
                setStatus={setStatus}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Render each category separately */}
            {category === "All Categories" ? (
                categoriesToDisplay.map((cat) => (
                    <div key={cat} className={`mb-6 transition-opacity duration-500 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
                        <h3 className="font-[Playwrite_IT_Moderna] text-red-700 text-left mb-4 ">{cat}</h3>
                        <div className={`flex gap-4 overflow-x-auto transition-transform duration-500 ease-in-out transform ${animate ? 'scale-100' : 'scale-95'}`}>
                            {groupedProducts[cat].length > 0 ? (
                                groupedProducts[cat].map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            ) : (
                                <p className="w-full text-center text-gray-500 font-semibold">No products found in this category.</p>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <div className={`transition-opacity duration-500 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="font-[Playwrite_IT_Moderna] text-red-700 mb-4">{category}</h3>
                    <div className={`flex gap-4 overflow-x-auto transition-transform duration-500 ease-in-out transform ${animate ? 'scale-100' : 'scale-95'}`}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        ) : (
                            <p className="w-full text-center text-gray-500 font-semibold">No products found.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
