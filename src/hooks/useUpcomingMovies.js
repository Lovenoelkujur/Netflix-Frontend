import axios from 'axios';
import { Upcomming_Movies, options } from '../utils/Constant';
import { getUpcomingMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = async() => {

    const dispatch = useDispatch();

    try {
        const res = await axios.get(Upcomming_Movies, options);
        dispatch(getUpcomingMovies(res.data.results));
    } 
    catch (error) {
        console.log(error);
    }
}

export default useUpcomingMovies;