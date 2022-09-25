import axios from "axios";

const FAV_MOVIES_INFO="http://localhost:3000/favourite_movies";
const THEATER_MOVIES_INFO = "http://localhost:3000/theater_movies";
const TOP_INDIAN_MOVIES_INFO = "http://localhost:3000/Top_Indian_Movies";
const TOP_RATED = "http://localhost:3000/Top_rated";
const COMING_SOON = "http://localhost:3000/Comming_Soon";

class MovieService{
    
    getFavoutriteInfo(){
        return axios.get(FAV_MOVIES_INFO);
    }
    
    getMoviesTheaterInfo(){
        return axios.get(THEATER_MOVIES_INFO)
    }

    getMoviesTopIndia(){
        return axios.get(TOP_INDIAN_MOVIES_INFO)
    }

    getMoviesTopRated(){
        return axios.get(TOP_RATED)
    }

    getMoviesComingSoon(){
        return axios.get(COMING_SOON)
    }

    addToFavourite(data){
        return axios.post(FAV_MOVIES_INFO, data);
    }

    removeMovie(data){
        return axios.delete(FAV_MOVIES_INFO+"/"+data)
    }

}

export default new MovieService();