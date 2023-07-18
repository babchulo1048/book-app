import { useGlobalContext } from "../context";
import "../styles/searchForm.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      setSearchTerm(text);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                placeholder="The lost world"
                className="form-control"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={30} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
