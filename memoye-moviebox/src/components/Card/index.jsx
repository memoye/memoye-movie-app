import { HiHeart, HiOutlineBookOpen } from 'react-icons/hi2'
import '../../styles/card.css'
import { convertToUTC, getImg } from '../../utils'
import Button from '../Button'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'

const Card = ({ poster_path, id, vote_average, popularity, title, release_date, first_air_date, media_type, name }) => {


    return (

        <div data-testid='movie-card'
            className='card'>
            <a
                href={ `/movies/${id}` }
            >
                <div className='moviePoster'>
                    { poster_path ?
                        <img data-testid='movie-poster'
                            src={ getImg(poster_path, false) }
                            draggable={ false }
                            alt={ title }
                        />
                        :
                        <img data-testid='movie-poster'
                            src={ `https://dummyimage.com/250x400/eee.png?text=${media_type === 'movie' ? title : name}` }
                            draggable={ false }
                            alt={ title }
                        />
                    }
                </div>
                <div>
                    <h3 data-testid='movie-title' className='movieTitle' >{ media_type === 'tv' ? name : title }</h3>
                    <p data-testid='movie-release-date' className='releaseDate'>{ media_type === 'tv' ? first_air_date : release_date }  </p>
                </div>
                { media_type === 'tv' && <span className='tvLabel'>TV Series</span> }
                <Ratings
                    vote_average={ vote_average }
                    popularity={ popularity }
                />
            </a>
            <Button
                className={ "likeBtn" }
            >
                <HiHeart />
            </Button>
        </div>
    )
}
export default Card