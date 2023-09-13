import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/nav.css'
import Logo from '../Logo'
import { BiCameraMovie, BiHome, BiLogOut } from 'react-icons/bi'
import { PiTelevisionBold } from 'react-icons/pi'
import { SlCalender } from 'react-icons/sl'
import Button from '../Button'
import Hamburger from './Hamburger'



const SideNav = ({ id }) => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <nav className={ `sideNav ${isOpen && 'sideNavOpen'}` }>

                <Logo className={ 'sidNavlogo' } />
                <NavLink to={ '/' } className={ 'sideNavLink' }><BiHome /> Home</NavLink>
                <NavLink to={ `/movies/${id && id}` } className={ 'sideNavLink' }><BiCameraMovie />  Movies</NavLink>
                <NavLink to={ '/movies/tv/series' } className={ 'sideNavLink' }><PiTelevisionBold /> TV Series</NavLink>
                <NavLink to={ '/movies/all/upcoming' } className={ 'sideNavLink' }><SlCalender /> Upcoming</NavLink>

                <div className='ad'>
                    <h3 className='ad_title'>Play movie quizes and earn free tickets</h3>
                    <p className="ad_desc">50k people are playing now</p>
                    <Button
                        className={ 'ad_btn' }
                    >
                        Start playing
                    </Button>
                </div>
                <Button
                    filled
                    className={ 'logout_btn' }
                >
                    <BiLogOut /> Logout
                </Button>

            </nav>
            <Hamburger
                className={ `sideMenu ${isOpen && 'active'}` }
                onClick={ toggleOpen }
            />
        </>
    )
}
export default SideNav