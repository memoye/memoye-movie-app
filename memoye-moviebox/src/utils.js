import axios from 'axios';


export const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN
export const BASE_URL = 'https://api.themoviedb.org/3/'

// for getting cardImg 
export function getImg(img_path = '', hd = false) {
    return `https://image.tmdb.org/t/p/${hd ? 'original' : 'w500'}${img_path}`
}




// pass the endpoint as argument to fetch data
// eg getData('trending/all/week') to get _all_ _trending_ media for the _week_

// params: { language: 'en-US', page: '1', region: 'NG' } <---  use this when fetching top movies 
// movie/popular <-- endpoint for top movies

export function getData(endpoint, params = { language: 'en-US' }) {
    const options = {
        method: 'GET',
        url: `${BASE_URL + endpoint}`,
        params: params,
        headers: {
            accept: 'application/json',
            Authorization: TMDB_ACCESS_TOKEN
        }
    };

    axios
        .request(options)
        .then(response => response)
        .catch(error => error.message);
}