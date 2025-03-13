import { useNavigate } from 'react-router-dom';

//import Component
import Button from '../Button';

function Category() {
    const navigate = useNavigate();

    const categories = ["Phone Strap", "Candles", "Wool Products", "Key Chains"];
    const sources = [
        '/phonestrap.jpg',
        '/candle.jpg',
        '/wool.jpg',
        '/keychain.jpg',
    ];

    const handleCategoryClick = (category) => {
        navigate(`/product?category=${encodeURIComponent(category)}`);
    };

    return (
        <div className="mt-5 px-2 flex flex-col w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mx-auto mt-3">
                {categories.map((item, index) => (
                    <li
                        key={index}
                        className="group p-4 rounded-lg flex flex-col items-center gap-3 shadow-md 
                                   transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
                        onClick={() => handleCategoryClick(item)}
                    >
                        <img className="w-24 h-24 object-cover rounded-full" src={sources[index]} alt={item} />
                        <span className="text-center text-sm md:text-base font-medium text-gray-800">{item}</span>
                    </li>
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <Button variant="secondary" onClick={() => navigate('/product')}>
                    Explore All
                </Button>
            </div>
        </div>
    );
}

export default Category;
