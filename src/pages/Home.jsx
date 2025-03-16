import { useState, useEffect, useRef } from "react";

// services
import usePosterService from "../services/poster";

// components
// import Loading from "../components/Loading";
import ImageSlide from "../components/home/ImageSlide";
import Category from "../components/home/Category";
import Product from "../components/home/Product";
import Contact from "../pages/Contact";

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

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <div className="p-2">
            <ImageSlide images={images} />
            <Category />
            <Product />
            <Contact />
        </div>
    );
}

export default Home;
