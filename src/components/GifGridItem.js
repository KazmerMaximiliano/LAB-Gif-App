import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="gif-grid-item" style={{ backgroundImage: `url(${url})` }}>
      <div className="gif-grid-item-name">
        <p>{title}</p>
      </div>
    </div>
  );
};
