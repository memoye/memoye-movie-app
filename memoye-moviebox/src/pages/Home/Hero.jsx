import { useEffect, useState } from "react"
import { BASE_URL, getData, getImg } from "../../utils"
import axios from "axios";
import { loadImg } from "../../assets";
import '../../styles/hero.css';
import Loading from "../../components/Loading";

// ... (imports and other code)

const Hero = () => {
    const endpoint = 'movie/popular'
    const params = { language: 'en-US', page: '1', region: 'ng' }
    const [isLoading, setIsLoading] = useState(false)
    const [popular, setPopular] = useState([])

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
        }

        axios
            .request(options)
            .then(function (response) {
                if (response.status === 200) {
                    setPopular(response.data.results)
                } else {
                    throw new Error('something went wrong! Please refresh the page')
                }
                setIsLoading(false)
            })
            .catch(function (error) {
                setIsLoading(false)
                console.error(error)
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Use a separate useEffect to log the popular state after it's updated
    useEffect(() => {
        console.log(popular);
    }, [popular]); // Add popular as a dependency here

    if (isLoading) return <Loading />

    return (

        <div div className="hero" >
            {/* <img src={ '/' } alt={ title } /> */ }
            <div className="herotext">

            </div>
        </div >
    )
}

export default Hero;
