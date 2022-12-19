import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Enter something ..."
      />
      <button onClick={search}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  );
};

export default Search;
