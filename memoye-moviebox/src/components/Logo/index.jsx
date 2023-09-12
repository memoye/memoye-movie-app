import { Link } from "react-router-dom"
import { tv } from "../../assets"

const Logo = ({ className }) => {
    return (
        <Link
            to={ '/' }
            className={ `logo ${className && className}` }>
            <img src={ tv } alt="logo" />
            <span>MovieBox</span>
        </Link>
    )
}
export default Logo