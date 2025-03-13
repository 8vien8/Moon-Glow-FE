import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Header({ className }) {
    const navigate = useNavigate()

    const backToHomePage = () => {
        navigate('/')
    }
    return (
        <header className={`${className}`} onClick={backToHomePage}>
            <h1 className="font-[Roboto_Slab] text-red-700">
                Moon Glow
            </h1>
            <h4 className="italic font-[Playwrite_IT_Moderna] text-red-800 sm:-translate-y-1.5 -translate-y-2.5 ">
                .bling store
            </h4>
        </header>
    )
}

Header.propTypes = {
    className: PropTypes.string,
}

export default Header