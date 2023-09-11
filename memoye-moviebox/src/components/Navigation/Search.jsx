import { BiSearch } from 'react-icons/bi';
import '../../styles/search.css'

const SearchBox = () => {
    return (
        <div className="search">
            <BiSearch className='searchIcon' />
            <input type="text" placeholder="What do you want to watch?" name='query' />
        </div>
    )
}
export default SearchBox