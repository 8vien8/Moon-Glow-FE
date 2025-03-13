function Product() {
    return (
        <div className="p-4 mt-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
                <img
                    src="./store.png"
                    className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-[420px] object-contain rounded-3xl shadow-lg"
                />
                <p className="w-full md:w-1/2 text-gray-700 font-medium text-start md:text-left">
                    Moon Glow is a harmonious blend of the moon’s gentle elegance and soft, shimmering light. Founded from Tram&#39;s deep passion for crafting handmade aesthetic products, Moon Glow is more than just a brand—it is a peaceful space where creativity and craftsmanship come to life. Originally established on the first floor of 26 Lý Tự Trọng in the heart of Ho Chi Minh City, Moon Glow has become a haven for those who appreciate the beauty of artisanal creations.
                </p>
            </div>
            <hr className="mt-6 border-1 w-[50%] border-red-300 mx-auto" />
        </div>
    );
}

export default Product;
