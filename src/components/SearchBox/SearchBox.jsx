import css from './SearchBox.module.css';
import PropTypes from 'prop-types';

const SearchBox = ({ selectNameFilter, handleFilter }) => {
  const { searchContainer, searchTitle, searchInput } = css;
  return (
    <div className={searchContainer}>
      <h2 className={searchTitle}>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Search..."
        className={searchInput}
        value={selectNameFilter}
        onChange={handleFilter}
      />
    </div>
  );
};

SearchBox.propTypes = {
  selectNameFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default SearchBox;
