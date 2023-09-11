import '../../styles/card.css'

const Card = ({ poster_path, id, title, release_date, first_air_date }) => {
    return (
        <div data-testid='movie-card' className='card'>
            <div>
                <img data-testid='movie-poster' src={ getCardImg(poster_path) } alt={ title } />
            </div>
            <div>
                <h3 data-testid='movie-title' >{ title }</h3>
                <p data-testid='movie-release-date'>{ release_date }</p>
            </div>
        </div>
    )
}
export default Card