import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular',
            OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    const movies=useSelector((store)=>store.movies.popularMovies);
    return movies;
};

export default usePopularMovies;