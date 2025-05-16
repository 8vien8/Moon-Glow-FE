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
    ]

    const handleCategoryClick = (category) => {
        navigate(`/product?category=${encodeURIComponent(category)}`);
    };

    return (
        <div className="mt-5 px-2 flex flex-col w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mx-auto mt-3">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="group p-4 rounded-lg flex flex-col items-center gap-3 shadow-md
                                   transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <img
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-cover rounded-full transition-all duration-300"
                            src={sources[index]}
                            alt={category}
                        />

                        <h5 className="font-[Playwrite_IT_Moderna] text-center text-sm md:text-base font-medium text-red-700">
                            {category}
                        </h5>
                    </li>
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <Button variant="secondary" onClick={() => navigate('/product')}>
                    Tất cả sản phẩm
                </Button>
            </div>
        </div>
    );
}

export default Category;
