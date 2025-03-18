import CustomDropdown from "./CustomDropDown";
import PropTypes from "prop-types";

const FilterBar = ({ category, setCategory, sortBy, setSortBy }) => {
    const categoryOptions = ["All Categories", "Phone Strap", "Candles", "Key Chains", "Wool Products"];
    const sortOptions = ["All Price", "Price: Low to High", "Price: High to Low"];

    return (
        <div className="flex items-center justify-end gap-4 mb-4">
            <CustomDropdown options={categoryOptions} selected={category} setSelected={setCategory} />
            <CustomDropdown options={sortOptions} selected={sortBy} setSelected={setSortBy} />
        </div>
    );
};

FilterBar.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
};

export default FilterBar;
