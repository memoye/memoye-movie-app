import { Outlet, useParams } from "react-router-dom"
import '../../styles/movies.css'
import SideNav from "../../components/Navigation/SideNav"

const Movies = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='moviesPage'>
            <SideNav />
            <Outlet />
        </div>
    )
}
export default Movies