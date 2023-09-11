import { loadImg } from "../../assets"
import '../../styles/home.css'

const Loading = () => {
    return (
        <div className="loading">
            <img src={ loadImg } alt="loading" />
        </div>
    )
}
export default Loading