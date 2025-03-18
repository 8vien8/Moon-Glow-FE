import PropTypes from "prop-types";

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", disabled = false }) => {
    const variants = {
        primary: "relative inline-flex items-center justify-center px-6 py-3 text-md font-semibold text-white rounded-lg shadow-md transition-all duration-400 ease-in-out bg-gradient-to-r from-[#d9a877] to-[#b98456] hover:from-[#c99a66] hover:to-[#a57545] focus:ring-4 focus:ring-[#b98456]/50 focus:outline-none hover:scale-105",
        secondary: "relative inline-flex items-center justify-center px-6 py-3 text-md font-semibold text-white rounded-lg shadow-md transition-all duration-400 ease-in-out bg-gradient-to-r from-[#7f5539] to-[#6b4226] hover:from-[#9c6644] hover:to-[#593c22] focus:ring-4 focus:ring-[#6b4226]/50 focus:outline-none hover:scale-105",
        danger: "relative inline-flex items-center justify-center px-6 py-3 text-md font-semibold text-white rounded-lg shadow-md transition-all duration-400 ease-in-out bg-gradient-to-r from-[#e63946] to-[#b2182e] hover:from-[#d62839] hover:to-[#901c27] focus:ring-4 focus:ring-[#b2182e]/50 focus:outline-none hover:scale-105",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
