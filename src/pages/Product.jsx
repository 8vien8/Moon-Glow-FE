import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

// Import components
import ProductCard from "../components/product/ProductCard";
import FilterBar from "../components/product/FilterBar";
import Loading from "../components/Loading";

// Import services
import useProductService from "../services/product";

function Product() {
    const productService = useProductService();
    const [searchParams] = useSearchParams();

    // Get category from search params
    const initialCategory = searchParams.get("category") || "All Categories";

    // State
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState(initialCategory);
    const [status, setStatus] = useState("All Status");
    const [sortBy, setSortBy] = useState("default");
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    const isFetched = useRef(false);

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            if (!isFetched.current) {
                const data = await productService.getProducts();
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
                isFetched.current = true;
            }
        };
        fetchProducts();
    }, [productService]);

    // Filter and sort products based on user selection
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

        setAnimate(false);
        setTimeout(() => {
            setFilteredProducts(filtered);
            setAnimate(true);
        }, 200);
    }, [category, status, sortBy, products]);

    // Categories to be displayed
    const categoriesToDisplay = ["Phone Strap", "Candles", "Key Chains", "Wool Products"];
    const groupedProducts = categoriesToDisplay.reduce((acc, cat) => {
        acc[cat] = filteredProducts.filter(product => product.category === cat);
        return acc;
    }, {});

    // If loading, show loading component
    if (loading) return <Loading />;

    return (
        <div className="p-4 mx-2">
            {/* Filter Bar */}
            <FilterBar
                category={category}
                setCategory={setCategory}
                status={status}
                setStatus={setStatus}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Render Products */}
            {category === "All Categories" ? (
                categoriesToDisplay.map(cat => (
                    <CategorySection key={cat} category={cat} products={groupedProducts[cat]} animate={animate} />
                ))
            ) : (
                <CategorySection category={category} products={filteredProducts} animate={animate} />
            )}
        </div>
    );
}

// Reusable Component for Rendering Product Sections
const CategorySection = ({ category, products, animate }) => (
    <div className={`mb-6 transition-opacity duration-500 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-semibold text-red-700 mb-4">{category}</h3>
        <div className={`flex gap-4 overflow-x-auto transition-transform duration-500 ease-in-out transform ${animate ? 'scale-100' : 'scale-95'}`}>
            {products.length > 0 ? (
                products.map(product => <ProductCard key={product._id} product={product} />)
            ) : (
                <p className="w-full text-center text-gray-500 font-semibold">No products found.</p>
            )}
        </div>
    </div>
);

CategorySection.propTypes = {
    category: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    animate: PropTypes.bool.isRequired,
};

export default Product;
