import { useParams, Link } from 'react-router-dom'
import '../../styles/movies.css'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../utils'
import axios from 'axios'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import { PiStarFill } from 'react-icons/pi'


const DetailsPage = () => {
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [movieInfo, setMovieInfo] = useState({})
    const [error, setError] = useState('')
    const [credits, setCredits] = useState({}) //.cast .crew to get cast and crew
    const [recommendations, setRecommendations] = useState([])
    const [videos, setVideos] = useState([])
    const [keywords, setKeywords] = useState([])
    const [trailer, setTrailer] = useState('')

    const fetchMovie = () => {
        // Define the URL with query parameters

        setIsLoading(true)

        const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;
        const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Replace with your actual API key
        const appendToResponse = 'credits,similar,keywords,recommendations,videos';

        // Create the full URL with query parameters
        const fullUrl = `${apiUrl}?api_key=${apiKey}&append_to_response=${appendToResponse}`;

        // Fetch the resource
        fetch(fullUrl)
            .then((response) => {
                setIsLoading(false)
                if (!response.ok) {
                    setError('Something went wrong, please reload')
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then((data) => {
                // set movie details and appended endpoints
                setMovieInfo(data)
                setVideos(data.videos.results)
                setTrailer(data.videos.results[0])
                //  appended endpoints like data.credits, data.similar, data.keywords
            })
            .catch((error) => {
                setError(error.message)
                console.error('Error fetching movie details:', error);
            });

    }

    function getMostPopular(group, job) {
        if (group === 'crew') {
            return (credits?.crew
                ?.filter(member => member.known_for_department === job)
                ?.sort((a, b) => b.popularity - a.popularity)[0])
        } else if (group == 'cast') {
            return (credits?.cast
                ?.filter(member => member.known_for_department === job)
                ?.sort((a, b) => b.popularity - a.popularity)
            )
        } else {
            return (credits?.crew
                ?.filter(member => member.known_for_department === job)
                ?.sort((a, b) => b.popularity - a.popularity).slice(0, 3))
        }
    }

    useEffect(() => {


        if (id !== undefined) fetchMovie(id)
    }, [id])

    useEffect(() => {
        const { credits, recommendations, keywords } = movieInfo
        console.log(movieInfo)
        setCredits(credits)
        setRecommendations(recommendations?.results)
        setKeywords(keywords?.keywords)

    }, [movieInfo])

    if (isLoading) return <Loading />

    if (error) return (
        <p className='error'>Something went wrong, Please <a href={ `/movies/${id}` } >try again</a></p >
    )

    return (
        <main className='details'>

            <div className="hs-responsive-embed-youtube">
                <iframe src={ `https://www.youtube.com/embed/${trailer?.key}` } title={ trailer?.name } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <section className='movieInfo'>
                <section className='detailsLeft'>
                    <div className='detailsText_heading'>
                        <p className='detailsText_title'>{ `${movieInfo.title} • ${movieInfo?.release_date?.slice(0, 4)} • ${movieInfo.adult ? '18+' : 'PG-13'} • ${movieInfo?.runtime} mins.` } </p>
                        <div className='genresContainer'>
                            {
                                movieInfo?.genres
                                    ?.map((genre) => (
                                        <Button className={ 'genre' } key={ genre.id }>
                                            { genre.name }
                                        </Button>
                                    ))


                            }
                        </div>
                        <div className='detailsRatingInfo detailsText_title '>
                            <PiStarFill color='#ff0' />  <span>{ movieInfo?.vote_average?.toFixed(1) } </span> <span> | </span>{ movieInfo?.vote_count }
                        </div>
                    </div>
                    <div>
                        <p className='movieOverview'>{ movieInfo?.overview } </p>
                        <p className='movie_star'>Director: <span>{ getMostPopular('crew', 'Directing')?.name }</span></p>
                        <p className='movie_star'>Writers: <span>{

                        }</span></p>
                        <p className='movie_star'>stars: <span>{ getMostPopular('cast', 'Acting')?.map(actor => actor.name).join(', ') }</span></p>
                    </div>
                </section>
                <aside className='detailsAside'>

                </aside>
            </section>
        </main >
    )
}
export default DetailsPage
