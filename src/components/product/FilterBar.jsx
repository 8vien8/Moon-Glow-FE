import PropTypes from "prop-types";

const FilterBar = ({ category, setCategory, status, setStatus, sortBy, setSortBy }) => {
    const filters = [
        { value: category, setValue: setCategory, options: ["All Categories", "Phone Strap", "Candles", "Key Chains", "Wool Products"] },
        { value: status, setValue: setStatus, options: ["All Status", "Available", "Pre-Order", "Out of Stock"] },
        { value: sortBy, setValue: setSortBy, options: ["default", "priceLowToHigh", "priceHighToLow"], labels: ["All Price", "Price: Low to High", "Price: High to Low"] },
    ];

    return (
        <div className="flex flex-wrap items-center justify-end gap-4 mb-4">
            {filters.map(({ value, setValue, options, labels }, index) => (
                <select
                    key={index}
                    className="w-full sm:w-44 p-2 border border-gray-400 shadow-lg rounded-lg transition duration-300 ease-in-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:bg-gray-100"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {options.map((option, i) => (
                        <option key={option} value={option}>
                            {labels ? labels[i] : option}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
};

FilterBar.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    setStatus: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
};

export default FilterBar;
