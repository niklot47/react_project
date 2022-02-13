import {axiosService} from "./axios.service";
import {urls} from "../config/urls";
import API_KEY from "../config/apiKey";

export const movieService = {
    discover: (page) => axiosService.get(urls.discover, {
        params: {
            api_key: API_KEY,
            page,
        }
    }).then(value => value.data),

    getMovieByGenres: ({genres, page}) => axiosService.get(urls.discover, {
        params: {
            api_key: API_KEY,
            with_genres: genres,
            page: page
        }
    }).then(value => value.data),

    getMovieById: (movie_id) => axiosService.get(`${urls.movie}/${movie_id}`, {
        params: {
            api_key: API_KEY
        }
    }).then(value => value.data),

    getSimilarMovie: (movie_id) => axiosService.get(`${urls.movie}/${movie_id}/similar`, {
        params: {
            api_key: API_KEY
        }
    }).then(value => value.data),

    searchMovie: (query, page) => axiosService.get(`${urls.search}`, {
        params: {
            api_key: API_KEY,
            query,
            page: page
        }
    }).then(value => value.data),

    topRatedMovies: () => axiosService.get(`${urls.discover}?api_key=${API_KEY}&sort_by=popularity.desc&vote_count.gte=10000&vote_average.gte=8`).then(value => value.data),
}