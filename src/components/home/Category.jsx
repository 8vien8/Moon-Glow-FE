import Button from '../Button'

function Category() {
    const categories = ["Phone Strap", "Candles", "Wool Products", "Key Chains"];

    return (
        <div className="mt-5 px-2 flex flex-col w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mx-auto mt-3">
                {categories.map((item, index) => (
                    <li
                        key={index}
                        className="group p-4 rounded-lg flex flex-col items-center gap-2 shadow-md 
                                   transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                    >
                        <img className="w-28 h-28 object-contain rounded-full" src="./logo.jpg" alt={item} />
                        <label className="text-center text-sm md:text-base font-medium">{item}</label>
                    </li>
                ))}
            </div>

            <div className="mt-4">
                <Button
                    variant='secondary'
                >
                    Explore more
                </Button>
            </div>
        </div>
    );
}

export default Category;
