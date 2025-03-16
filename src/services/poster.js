import axios from 'axios';

const API_URL = 'https://moon-glow-store.onrender.com/api/posters';

const usePosterService = () => {

    const getPosters = async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching contributions:", error.message);
            return [];
        }
    };

    return {
        getPosters
    }
}

export default usePosterService;
