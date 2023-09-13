import { NavLink } from "react-router-dom"
import Logo from "../Logo"
import '../../styles/nav.css';
import SearchBox from "./SearchBox"
import Hamburger from "./Hamburger"
import { useEffect, useState } from "react";

const HomeNav = () => {
    const [scrolled, setScrolled] = useState(false)



    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                setScrolled(true)
            } else (
                setScrolled(false)
            )
        })
    }, [])

    return (
        <nav className={ `nav ${scrolled && 'scrolled'}` }>
            <Logo />
            <SearchBox />
            <div className="navBtns">
                <button className="signinBtn">Sign in</button>

            </div>
        </nav>
    )
}
export default HomeNav