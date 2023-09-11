import '../../styles/hamburger.css'

const Hamburger = (props) => {
    const { onClick } = props

    return (
        <button className={ "hamburger" }
            onClick={ onClick && onClick }
        >
            <span />
            <span />
        </button>
    )
}
export default Hamburger