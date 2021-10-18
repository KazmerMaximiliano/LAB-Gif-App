import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Gifs"]);

  return (
    <div className="container">
      <div className="app-bar">
        <div className="app-logo">
          <FontAwesomeIcon className="app-logo-icon" icon={faReact} />
          <div className="app-logo-name">React Gif App</div>
        </div>
        <div className="app-search-input">
          <AddCategory addCategory={setCategories} />
        </div>
      </div>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
