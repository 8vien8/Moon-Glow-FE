import { createContext, useState, useEffect, useCallback } from "react";
import useProductService from "../services/product";
import PropTypes from "prop-types";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    const productsService = useProductService();

    // Fetch products from API
    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const res = await productsService.getProducts();
            if (!res || !res.products) {
                setProducts([]);
                throw new Error("Failed to fetch products");
            }
            setProducts(res.products);
            console.log("Products fetched successfully:", res.products);
            setDataFetched(true);
        } catch (err) {
            setProducts([]);
            setDataFetched(true);
            setError(err.response?.data?.error || "Failed to fetch products");
        } finally {
            setLoading(false);
        }
    }, [productsService]);

    // Fetch products when the component mounts
    useEffect(() => {
        if (!dataFetched) {
            fetchProducts();
        }
    }, [fetchProducts, dataFetched]);

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                loading,
                error,
                dataFetched,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductContext;