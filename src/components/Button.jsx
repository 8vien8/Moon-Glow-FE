import PropTypes from "prop-types";

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", disabled = false }) => {
    const variants = {
        primary: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-[#D7B899] to-[#C9A783] group-hover:from-[#C9A783] group-hover:to-[#B89A70] hover:text-white dark:text-[#4A2F27] transition-transform transform hover:scale-105 hover:shadow-lg duration-300",
        secondary: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#8C5E38] to-[#6F4526] group-hover:from-[#6F4526] group-hover:to-[#4E2F18] hover:text-white dark:text-[#E8D8C4] transition-transform transform hover:scale-105 hover:shadow-lg duration-300",
        danger: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#B63D2D] to-[#7D241A] group-hover:from-[#9A3224] group-hover:to-[#5E1A12] hover:text-white dark:text-[#301B17] transition-transform transform hover:scale-105 hover:shadow-lg duration-300",
    };

    const span = {
        primary: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#FAF0E6] dark:bg-[#FAF0E6] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-transform transform hover:scale-115 hover:shadow-lg duration-300",
        secondary: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#A97142] dark:bg-[#A97142] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-transform transform hover:scale-115 hover:shadow-lg duration-300",
        danger: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#E06B5C] dark:bg-[#E06B5C] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-transform transform hover:scale-115 hover:shadow-lg duration-300",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={` ${variants[variant] || ""} ${className}`}
            disabled={disabled}
        >
            <span className={` ${span[variant] || ""}`}>
                {children}
            </span>
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
