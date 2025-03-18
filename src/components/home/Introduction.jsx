function Introduction() {
    return (
        <div className="p-4 mt-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
                <img
                    src="./store.jpg"
                    className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-[450px] 
                               object-contain rounded-3xl shadow-lg transition-all duration-300"
                />

                <p className="w-full sm:w-4/5 md:w-1/2 text-gray-700 font-medium text-start md:text-left 
                              text-sm sm:text-base md:text-lg leading-relaxed">
                    Moon Glow là sự kết hợp hài hòa giữa vẻ thanh lịch nhẹ nhàng của mặt trăng và ánh sáng lấp lánh, mềm mại.
                    Moon Glow không chỉ là một thương hiệu - mà còn là một không gian yên bình, nơi sự sáng tạo và nghề thủ công trở nên sống động.
                    Moon Glow đã trở thành thiên đường cho những ai trân trọng vẻ đẹp của những sáng tạo thủ công.
                    <br />
                    <b className="block mt-4 text-sm sm:text-base md:text-lg">
                        Địa chỉ: 26 Lý Tự Trọng, phường Bến Nghé, quận 1 (lầu 1)
                    </b>
                </p>
            </div>

            <hr className="mt-6 h-[2px] w-[80%] sm:w-[70%] md:w-[60%] mx-auto bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 border-0 transition-all duration-300" />
        </div>
    );
}

export default Introduction;
