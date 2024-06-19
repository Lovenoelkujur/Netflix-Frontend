const API_END_POINT = "https://netflix-backend-z6wt.onrender.com/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjlmZDdjYjEwYzk2MWIzZTA4N2I2Nzc5NWY2MGUyNSIsInN1YiI6IjY2MGZjYzhhNzRkNmMwMDE3Y2Q5N2VjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jr8gwLNmZdft4r1P1gNmWhCL2G3bZYqpS4iY_xjngJI'
    }
};

export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcomming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export default API_END_POINT;