import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Events() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-[80vh]">
            <div className="flex justify-between min-h-[45vh] mt-4 w-[90%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[65%] mx-auto items-center">
                <img
                    src="./event-img-1.jpg"
                    className="w-42 h-72 sm:w-42 sm:h-72 md:w-42 md:h-72 lg:w-40 lg:h-62 xl:w-52 xl:h-84 object-cover rounded-lg shadow-lg
                    hover:scale-110 hover:border-4 border-gray-50 hover:shadow-amber-50
                    transition-all duration-300"
                />
                <div>
                    {!isMobile ? (
                        <img
                            src="./logo.jpg"
                            className="rounded-full w-[55%] mx-auto mt-6 hover:shadow-white shadow-xl hover:scale-105 transition duration-300"
                        />
                    ) : (
                        <img
                            src="./logo.jpg"
                            className="absolute transform -translate-x-1/2 translate-y-[120%] rounded-full w-[15%] mx-auto mt-6 hover:shadow-white shadow-xl hover:scale-105 transition duration-300"
                        />
                    )}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:top-1/2">
                        <div className="absolute transform -translate-x-10 -translate-y-4 sm:-translate-y-8">
                            <AnimatedSparkle size={22} className="ml-6" />
                            <AnimatedSparkle size={32} />
                        </div>
                        <div className="absolute transform right-1 translate-x-10 -translate-y-4 sm:-translate-y-8">
                            <AnimatedSparkle size={22} />
                            <AnimatedSparkle size={32} className="ml-4" />
                        </div>
                        <motion.p
                            className="text-2xl font-[Playwrite_IT_Modena] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-center"
                            animate={{ scale: [0.95, 1.1, 0.95] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            HAND MADE <br /> WORKSHOP
                        </motion.p>
                    </div>
                </div>
                <img
                    src="./event-img-2.jpg"
                    className="w-42 h-72 sm:w-42 sm:h-72 md:w-42 md:h-72 lg:w-40 lg:h-62 xl:w-52 xl:h-84 object-cover rounded-lg shadow-lg
                    hover:scale-110 hover:border-4 border-gray-50 hover:shadow-amber-50
                    transition-all duration-300"
                />
            </div>

            <div className="relative flex justify-between min-h-[35vh] mt-12 w-[80%] sm:w-[65%] md:w-[60%] lg:w-[55%] xl:w-[55%] mx-auto gap-4">
                <img
                    src="./wool.jpg"
                    className="w-52 h-32 sm:w-52 sm:h-32 md:w-68 md:h-42 lg:w-56 lg:h-40 xl:w-72 xl:h-52 object-cover rounded-lg shadow-lg
                    hover:scale-110 hover:border-4 border-gray-50 hover:shadow-amber-50
                    transition-all duration-300"
                />
                {isMobile ? (
                    <a
                        href="https://www.instagram.com/lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-x-0 top-1/2 flex items-center justify-center gap-4 p-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-red-200 to-red-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-50"
                    >
                        <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden whitespace-nowrap">Đăng ký</span>
                    </a>
                ) : (
                    <a
                        href="https://www.instagram.com/lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-red-200 to-red-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-50 max-h-12 my-auto"
                    >
                        <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden whitespace-nowrap">
                            {isMobile ? "Đăng ký" : "Đăng kí tại đây"}
                        </span>
                    </a>
                )}
                <img
                    src="./candle.jpg"
                    className="w-52 h-32 sm:w-52 sm:h-32 md:w-68 md:h-42 lg:w-56 lg:h-40 xl:w-72 xl:h-52 object-cover rounded-lg shadow-lg
                    hover:scale-110 hover:border-4 border-gray-50 hover:shadow-amber-50
                    transition-all duration-300"
                />
            </div>
        </div>
    );
}

const AnimatedSparkle = ({ size, className }) => {
    return (
        <motion.div
            className={className}
            animate={{
                opacity: [0.6, 1, 0.6],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 15, -15, 0],
                color: ["#f87171", "#fb923c", "#facc15", "#4ade80", "#60a5fa", "#f87171"]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Sparkle size={size} className="text-current" />
        </motion.div>
    );
};

Events.propTypes = {
    animate: PropTypes.bool
};

AnimatedSparkle.propTypes = {
    size: PropTypes.number,
    className: PropTypes.string
};

export default Events;