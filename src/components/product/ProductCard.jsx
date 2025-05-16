import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleProductClick = () => {
        navigate(`/product/${product._id}`);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    return (
        <div
            className="group relative h-66 sm:h-82 md:h-98 rounded-lg overflow-hidden 
                       shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:brightness-105 
                       bg-pink-50 flex flex-col border-3 border-pink-100"
            onClick={handleProductClick}
        >
            {/* Product Image */}
            <div className="relative w-full h-5/6 overflow-hidden">

                {/* Loading Spinner */}
                {!imageLoaded && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-rose-600"></div>
                    </div>
                )}

                <img
                    src={product.image[0]}
                    alt={product.name}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 
                        ${imageLoaded ? "opacity-100" : "opacity-0"}`}
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
                <h5 className="font-[Playwrite_IT_Moderna] text-gray-700 text-sm sm:text-base line-clamp-1">{product.name}</h5>
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
