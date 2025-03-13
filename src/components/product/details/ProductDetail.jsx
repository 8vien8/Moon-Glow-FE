import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import components
import useProductService from "../../../services/product";
import ImageSlide from "../../home/ImageSlide";
import Loading from "../../Loading";

// Import icons
import { ArrowLeft } from "lucide-react";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productService = useProductService();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const isFetched = useRef(false);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!isFetched.current) {
                try {
                    const data = await productService.getProductById(id);
                    setProduct(data);
                } catch (error) {
                    console.error("Error fetching product:", error);
                } finally {
                    setLoading(false);
                    isFetched.current = true;
                }
            }
        };
        fetchProduct();
    }, [id, productService]);

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen text-center">
                <p className="text-lg font-semibold text-red-500">Product not found.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-black transition font-semibold mb-4"
            >
                <ArrowLeft className="w-7 h-7 mr-2" />
                Back to Products
            </button>

            {/* Product Card */}
            <div className="shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row p-6 gap-6">
                {/* Product Image */}
                <div className="md:w-2/3 w-full">
                    <ImageSlide images={[{ image: product.image }]} />
                </div>

                {/* Product Details */}
                <div className="md:w-1/3 w-full flex flex-col justify-center items-start gap-2">
                    <h2 className="text-gray-800">{product.name}</h2>

                    <p className="text-gray-500 font-medium">Category:
                        <span className="ml-2 text-gray-800 font-semibold">{product.category}
                        </span>
                    </p>
                    <p className="text-gray-500 font-medium">Price:
                        <span className="ml-2 text-red-600 text-2xl font-bold">
                            {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND"
                            }).format(product.price)}
                        </span>
                    </p>

                    {/* Action Button */}
                    <a
                        href="https://www.instagram.com/lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center mt-6 gap-3 p-3 rounded-lg shadow-lg transition-all hover:bg-red-300 hover:shadow-md"
                    >
                        <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">Contact GlowMoon</span>
                    </a>

                    <p className="mt-6 text-red-600 italic font-medium">Contact Instagram for buying and ordering</p>
                </div>
            </div>

            {/* Product Description */}
            <h3 className="mt-4 text-gray-900 mb-4">About Product</h3>
            <p className="text-lg text-gray-700 mt-2">{product.description}</p>
        </div>

    );
}

export default ProductDetails;
