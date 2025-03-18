import { useState, useEffect, useRef } from "react";

// services
import usePosterService from "../services/poster";

// components
// import Loading from "../components/Loading";
import ImageSlide from "../components/home/ImageSlide";
import Category from "../components/home/Category";
import Contact from "../pages/Contact";
import Introduction from "../components/home/Introduction";

function Home() {
    const posterService = usePosterService();
    const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(true);

    const isFetched = useRef(false)

    useEffect(() => {
        const fetchPosters = async () => {
            if (!isFetched.current) {
                const data = await posterService.getPosters();
                setImages(data);
                // setLoading(false);
                isFetched.current = true;
            }
        };
        fetchPosters();
    }, [posterService]);

    return (
        <div className="p-2">
            <ImageSlide images={images} />
            <Category />
            <Introduction />
            <Contact />
        </div>
    );
}

export default Home;
