import { HiHeart } from 'react-icons/hi2'
import '../../styles/card.css'
import { convertToUTC, getImg } from '../../utils'
import Button from '../Button'
import Ratings from './Ratings'

const Card = ({ poster_path, id, vote_average, popularity, title, release_date, first_air_date }) => {
    return (
        <div data-testid='movie-card'
            className='card'>
            <div className='moviePoster'>
                <img data-testid='movie-poster' src={ getImg(poster_path, false) } alt={ title } />
            </div>
            <div>
                <h3 data-testid='movie-title' className='movieTitle' >{ title }</h3>
                <p data-testid='movie-release-date' className='releaseDate'>{ convertToUTC(release_date) }</p>
            </div>
            <Button
                className={ "likeBtn" }
            >
                <HiHeart />
            </Button>
            <Ratings
                vote_average={ vote_average }
                popularity={ popularity }
            />
        </div>
    )
}
export default Card