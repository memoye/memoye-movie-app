import { useState, useEffect } from 'react';
import '../../styles/home.css'
import Hero from './Hero'
import { BASE_URL, getImg } from '../../utils';
import axios from 'axios';
import { loadImg } from '../../assets';
import Loading from '../../components/Loading';
import HomeNav from '../../components/Navigation/HomeNav';


const Home = () => {

    const endpoint = 'movie/top_rated'
    const params = { language: 'en-US', page: '1', region: 'ng' }
    const [isLoading, setIsLoading] = useState(false)
    const [topRated, setTopRated] = useState([])

    function fetchData() {
        setIsLoading(true)

        const options = {
            method: 'GET',
            url: BASE_URL + endpoint,
            params: params,
            headers: {
                accept: 'application/json',
                Authorization: import.meta.env.VITE_TMDB_ACCESS_TOKEN
            }
        };

        axios
            .request(options)
            .then(function (response) {
                if (response.status === 200) {
                    setIsLoading(false)
                    setTopRated(response.data.results)
                } else {
                    console.log('something went wrong! Please refresh the page')
                    throw new Error('something went wrong! Please refresh the page')
                }
            })
            .catch(function (error) {
                setIsLoading(false)
                console.error(error)
            })
    }


    useEffect(() => {
        // fetchData()
    }, [])


    if (isLoading) return <Loading /> //if data is fetching, display loading screen

    return (
        <div className='home'>
            <HomeNav />
            <Hero />
        </div>
    )
}
export default Home