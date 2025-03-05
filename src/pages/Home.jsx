import { useState, useEffect } from "react";

// services
import usePosterService from "../services/poster";

// components
import Loading from "../components/Loading";
import PosterSlides from "../components/home/PosterSlides";

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

    return (
        <div className="p-2">
            {loading ? <Loading /> : <PosterSlides posters={posters} />}
        </div>
    );
}

export default Home;
