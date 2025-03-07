function Product() {
    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
                <img
                    src="./logo.jpg"
                    className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-[300px] object-contain rounded-4xl shadow-lg"
                />
                <p className="w-full md:w-1/2 text-gray-700 font-medium text-start md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, asperiores fugit veniam, expedita ipsam
                    doloribus numquam error quia voluptatum maxime.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, asperiores fugit veniam, expedita ipsam
                    doloribus numquam error quia voluptatum maxime.
                </p>
            </div>
        </div>
    );
}

export default Product;
