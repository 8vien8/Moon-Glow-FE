import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CustomDropdown = ({ options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full sm:w-44">
            {/* Button to toggle dropdown */}
            <button
                className="w-full p-2 border border-gray-400 shadow-md rounded-lg text-gray-700 text-left
                          flex justify-between items-center cursor-pointer transition duration-300 ease-in-out
                          focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
            </button>

            {/* Dropdown menu with CSS animation */}
            <ul
                className={`absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10
                            transition-all duration-300 ease-in-out overflow-hidden
                            ${isOpen ? "opacity-100 scale-y-100 max-h-60" : "opacity-0 scale-y-0 max-h-0"}`
                }
                style={{ transformOrigin: "top" }} // Makes the dropdown scale from the top
            >
                {options.map((option, index) => (
                    <li
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer transition"
                        onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

CustomDropdown.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
};

export default CustomDropdown;
