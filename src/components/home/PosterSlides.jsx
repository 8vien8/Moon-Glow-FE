import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function PosterSlides({ posters }) {
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    useEffect(() => {
        const swiperInstance = document.querySelector(".swiper").swiper;
        if (!swiperInstance) return;

        swiperInstance.on("slideChange", () => {
            setDisablePrev(swiperInstance.isBeginning);
            setDisableNext(swiperInstance.isEnd);
        });
    }, []);

    return (
        <div className="relative w-full h-[68vh]">
            {/* Left Navigation Button - Hidden on Mobile */}
            <button
                id="swiper-prev"
                className={`absolute top-1/2 left-4 z-10 p-3 bg-white rounded-full shadow-lg text-red-700 
                transition-all duration-300 hidden sm:block
                ${disablePrev ? "opacity-0 cursor-not-allowed" : "opacity-100 hover:bg-red-300"
                    }`}
                disabled={disablePrev}
            >
                <ChevronLeft size={28} strokeWidth={3} />
            </button>

            {/* Right Navigation Button - Hidden on Mobile */}
            <button
                id="swiper-next"
                className={`absolute top-1/2 right-4 z-10 p-3 bg-white rounded-full shadow-lg text-red-700
                transition-all duration-300 hidden sm:block
                ${disableNext ? "opacity-0 cursor-not-allowed" : "opacity-100 hover:bg-red-300"
                    }`}
                disabled={disableNext}
            >
                <ChevronRight size={28} strokeWidth={3} />
            </button>

            {/* Swiper Component */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                    nextEl: "#swiper-next",
                    prevEl: "#swiper-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                speed={1500}
                // effect="fade"
                // fadeEffect={{ crossFade: true }}
                className="w-full h-full rounded-lg shadow-sm"
            >
                {posters.map((poster) =>
                    poster.image.map((img, index) => (
                        <SwiperSlide key={`${poster._id}-${index}`}>
                            <img
                                src={img}
                                alt={`Poster ${index}`}
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
}

PosterSlides.propTypes = {
    posters: PropTypes.array.isRequired,
};

export default PosterSlides;
