import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    return (
        <div className="group relative w-40 sm:w-44 rounded-lg overflow-hidden shadow-md transition-all duration-300 mx-1 
                        hover:shadow-xl hover:scale-105 hover:brightness-105">
            {/* Product Image */}
            <img
                src={product.image[0]}
                alt={product.name}
                className="w-full p-1 h-48 object-contain transition-all duration-300 border-2 border-gray-100"
            />

            {/* Status Indicator */}
            <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full shadow-md transition-all duration-300
                ${product.status === "Available" ? "bg-green-500 text-white"
                    : product.status === "Pre-Order" ? "bg-blue-500 text-white"
                        : "bg-red-500 text-white"}`}>
                {product.status}
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 w-full bg-black/50 text-white py-2 px-3 backdrop-blur-md transition-all duration-300">
                <div className="flex justify-between items-center text-[14px] font-semibold">
                    <span className="truncate">{product.name}</span>
                    <span>${product.price}</span>
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
