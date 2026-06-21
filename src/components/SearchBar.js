import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-box">

      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search Anything..."
      />

    </div>
  );
}

export default SearchBar;