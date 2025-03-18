import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div
            className="group relative w-44 sm:w-56 md:w-60 h-66 sm:h-82 md:h-98 rounded-lg overflow-hidden 
                       shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:brightness-105 
                       bg-pink-50 flex flex-col border-3 border-pink-100"
            onClick={handleProductClick}
        >
            {/* Product Image */}
            <div className="relative w-full h-5/6 overflow-hidden">
                <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />

            </div>

            {/* Status Indicator */}
            {/* <div className={`absolute top-2 right-2 px-3 py-1 text-sm font-medium rounded-full shadow-md transition-all duration-300
                ${product.status === "Available" ? "bg-green-500 text-white"
                    : product.status === "Pre-Order" ? "bg-blue-500 text-white"
                        : "bg-red-500 text-white"}`}>
                {product.status}
            </div> */}

            {/* Product Info */}
            <div className="flex flex-col justify-center items-center h-1/6 text-center">
                {/* Product Name */}
                <h5 className="font-[Playwrite_IT_Moderna] text-gray-700  text-sm sm:text-base">{product.name}</h5>
                {/* <p className="text-red-600 font-semibold text-sm sm:text-base">
                    {new Intl.NumberFormat("vi-VN", {
                        style: "decimal",
                        minimumFractionDigits: 0
                    }).format(product.price)} VND
                </p> */}
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
