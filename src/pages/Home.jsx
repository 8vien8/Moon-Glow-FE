import { useState, useEffect } from "react";

// services
import usePosterService from "../services/poster";

// components
import Loading from "../components/Loading";
import PosterSlides from "../components/home/PosterSlides";
import Category from "../components/home/Category";
import Product from "../components/home/Product";
import Contact from "../components/home/Contact";

function Home() {
    const [posters, setPosters] = useState([]);
    const posterService = usePosterService();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosters = async () => {
            const data = await posterService.getPosters();
            setPosters(data);
            setLoading(false);
        };
        fetchPosters();
    }, [posterService]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="p-2">
            <PosterSlides posters={posters} />
            <Category />
            <Product />
            <Contact />
        </div>
    );
}

export default Home;
