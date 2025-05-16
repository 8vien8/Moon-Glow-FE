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
                <p className="text-lg font-semibold text-red-500">Không tìm thấy sản phẩm.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6 min-h-screen">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-black transition font-semibold mb-4"
            >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Quay về danh sách sản phẩm
            </button>

            {/* Product Card */}
            <div className="shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row p-6 gap-6">
                {/* Product Image */}
                <div className="md:w-3/5 w-full">
                    <ImageSlide images={[{ image: product.image }]} />
                </div>

                {/* Product Details */}
                <div className="md:w-2/5 w-full flex flex-col justify-center items-start gap-2">
                    <h2 className="text-gray-800">{product.name}</h2>

                    <p className="text-gray-600 font-medium">Danh mục:
                        <span className="ml-2 text-gray-800 font-semibold text-lg">{product.category}
                        </span>
                    </p>
                    <p className="text-gray-600 font-medium">Giá:
                        <span className="ml-2 text-gray-700 text-2xl font-bold">
                            {new Intl.NumberFormat("vi-VN", {
                                style: "decimal",
                                minimumFractionDigits: 0
                            }).format(product.price)} VND
                        </span>
                    </p>

                    <p className="whitespace-pre-line font-medium text-gray-700 mt-2 text-start">{product.description}</p>

                    {/* Action Button */}
                    <a
                        href="https://www.instagram.com/lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center mt-6 gap-3 p-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-red-200 to-red-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">Liên hệ Lazzy Meow trên Instagram</span>
                    </a>

                    <p className="mt-6 text-red-600 italic font-medium">
                        Liên hệ qua Instagram để mua hàng hoặc đặt hàng
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;
