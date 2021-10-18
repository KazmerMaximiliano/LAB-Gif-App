import React, { useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import GifModal from "./GifModal";

export const GifGrid = ({ category }) => {
  const [modalImg, setModalImg] = useState("");
  const [show, setShow] = useState(false);

  const { data: images, loading } = useFetchGifs(category);

  const handleOpenModal = (img) => {
    setModalImg(img);
    setShow(true);
  };

  return (
    <div className="gif-grid">
      {loading && (
        <FontAwesomeIcon className="gif-grid-loading" icon={faCircleNotch} />
      )}
      <GifModal onClose={() => setShow(false)} show={show} img={modalImg} />
      <div className="gif-grid-title">{category}</div>
      <div className="gif-grid-container">
        {images.map((img) => (
          <div key={img.id} onClick={() => handleOpenModal(img.url)}>
            <GifGridItem {...img} />
          </div>
        ))}
      </div>
    </div>
  );
};
