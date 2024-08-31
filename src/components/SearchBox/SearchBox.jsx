import css from './SearchBox.module.css';
import PropTypes from 'prop-types';

const SearchBox = ({ filterValue, handleFilter }) => {
  const { searchContainer, searchTitle, searchInput } = css;
  return (
    <div className={searchContainer}>
      <h2 className={searchTitle}>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Search..."
        className={searchInput}
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default SearchBox;
