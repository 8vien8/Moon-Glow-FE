import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

// Import components
import CategorySection from "../components/product/ProductSection";
import FilterBar from "../components/product/FilterBar";
// import Loading from "../components/Loading";

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
    const [sortBy, setSortBy] = useState("All Price");
    // const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    const isFetched = useRef(false);

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            if (!isFetched.current) {
                const data = await productService.getProducts();
                setProducts(data);
                setFilteredProducts(data);
                // setLoading(false);
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

        // Fix sorting condition to match dropdown values
        if (sortBy === "Price: Low to High") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === "Price: High to Low") {
            filtered.sort((a, b) => b.price - a.price);
        }

        setAnimate(false);
        setTimeout(() => {
            setFilteredProducts(filtered);
            setAnimate(true);
        }, 200);
    }, [category, sortBy, products]);


    // Categories to be displayed
    const categoriesToDisplay = ["Phone Strap", "Key Chains", "Candles", "Wool Products"];
    const groupedProducts = categoriesToDisplay.reduce((acc, cat) => {
        acc[cat] = filteredProducts.filter(product => product.category === cat);
        return acc;
    }, {});

    // if (loading) return <Loading />;

    return (
        <div className="p-4 mx-2">
            {/* Filter Bar */}
            <FilterBar
                category={category}
                setCategory={setCategory}
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

export default Product;
