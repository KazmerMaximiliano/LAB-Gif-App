import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const GifModal = ({ show, onClose, img }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="gif-modal">
      <div className="gif-modal-close-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="gif-modal-img">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

GifModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

export default GifModal;
