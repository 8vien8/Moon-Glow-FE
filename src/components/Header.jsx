import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Header({ className }) {
    const navigate = useNavigate()

    const backToHomePage = () => {
        navigate('/')
    }
    return (
        <header className={`${className}`} onClick={backToHomePage}>
            <h1 className="font-[Dancing_Script] text-red-700">
                Moon Glow
            </h1>
        </header>
    )
}

Header.propTypes = {
    className: PropTypes.string,
}

export default Header