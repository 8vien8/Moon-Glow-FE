import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div className="group relative w-34 sm:w-56 rounded-lg overflow-hidden shadow-lg transition-all duration-300 
                        hover:shadow-2xl hover:scale-105 hover:brightness-105"
            onClick={handleProductClick}
        >
            {/* Product Image */}
            <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-42 sm:h-56 object-cover transition-all duration-300 border-2 border-gray-200"
            />

            {/* Status Indicator */}
            <div className={`absolute top-2 right-2 px-3 py-1 text-sm font-medium rounded-full shadow-md transition-all duration-300
                ${product.status === "Available" ? "bg-green-500 text-white"
                    : product.status === "Pre-Order" ? "bg-blue-500 text-white"
                        : "bg-red-500 text-white"}`}>
                {product.status}
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 w-full bg-black/50 text-white py-2 px-4 backdrop-blur-md transition-all duration-300 ">
                <div className="flex justify-between items-center text-[16px] font-semibold">
                    <span className="truncate">{product.name}</span>
                    <span className="hidden sm:inline">
                        {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
                    </span>
                </div>
            </div>
        </div>
    );
};

// Prop Types
ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
