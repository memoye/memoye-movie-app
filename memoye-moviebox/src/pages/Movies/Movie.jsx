import { useParams } from "react-router-dom"

const Movie = () => {
    const { id } = useParams()

    return (
        <div>
            heheh
            { id }
        </div>
    )
}
export default Movie