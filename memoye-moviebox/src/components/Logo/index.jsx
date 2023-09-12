import { Link } from "react-router-dom"
import { tv } from "../../assets"

const Logo = () => {
    return (
        <Link
            to={ '/' }
            className='logo'>
            <img src={ tv } alt="logo" />
            <span>MovieBox</span>
        </Link>
    )
}
export default Logo