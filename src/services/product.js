import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

const useProductService = () => {

    const getProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error.message);
        }
    };

    const getProductById = async (productId) => {
        try {
            const response = await axios.get(`${API_URL}/${productId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching product by ID:", error.message);
        }
    };

    return {
        getProducts,
        getProductById
    }
}

export default useProductService;