import PropTypes from 'prop-types'

function Footer({ className }) {
    return (
        <footer className={`${className}`}>
            © 2025 My Website. All rights reserved.
        </footer>
    )
}

Footer.propTypes = {
    className: PropTypes.string
}

export default Footer