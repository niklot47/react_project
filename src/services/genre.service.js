import {urls} from "../config/urls";
import API_KEY from "../config/apiKey";
import {axiosService} from "./axios.service";

export const genreService = {
    getAllGenres: ()=>axiosService.get(urls.genres, {
        params: {
            api_key: API_KEY
        }
    }).then(value => value.data)
}