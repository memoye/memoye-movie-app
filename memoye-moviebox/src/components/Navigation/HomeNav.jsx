import { NavLink } from "react-router-dom"
import Logo from "../Logo"
import '../../styles/nav.css';
import SearchBox from "./Search"
import Hamburger from "./Hamburger"

const HomeNav = () => {
    return (
        <nav className="nav">
            <Logo />
            <SearchBox />
            <div className="navBtns">
                <button className="signinBtn">Sign in</button>
                <Hamburger />
            </div>
        </nav>
    )
}
export default HomeNav