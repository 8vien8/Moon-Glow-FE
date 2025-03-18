import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const CategorySection = ({ category, products, animate }) => (
    <div className={`mb-8 p-4 rounded-lg shadow-md transition-opacity duration-700 ease-in-out 
                    ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>

        <h3 className="font-[Playwrite_IT_Moderna]  text-start text-red-700 mb-4 border-l-3 border-red-600 pl-3">
            {category}
        </h3>

        <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 
                         min-h-[300px] place-items-center
                         transition-transform duration-500 ease-in-out
                         ${animate ? "scale-100" : "scale-95 opacity-90"}`}>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product._id} className="hover:scale-105 transition-transform duration-300">
                        <ProductCard product={product} />
                    </div>
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500 font-semibold italic">
                    No products found.
                </p>
            )}
        </div>
    </div>
);

CategorySection.propTypes = {
    category: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    animate: PropTypes.bool.isRequired,
};

export default CategorySection;
