import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      addCategory((categories) => {
        let find = categories.find((e) => e === inputValue);
        return !find ? [inputValue, ...categories] : categories;
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Buscar"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button type="submit">
        <FontAwesomeIcon className="gif-grid-loading" icon={faSearch} />
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
