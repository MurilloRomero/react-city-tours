import React, { useState } from "react";
import "./Tour.scss";

const Tour = (props) => {
  const { img, city, name, info } = props;

  const [show, setShow] = useState(false);
  const showClick = () => {
    setShow(!show);
  };
  const [close, setClose] = useState(true);
  const showClose = () => {
    setClose(!close);
  };

  return (
    <>
      {close && (
        <article className="tour">
          <div className="img-container">
            <img src={img} alt={name} />
            <span className="close-btn" onClick={showClose}>
              <i className="fas fa-window-close"></i>
            </span>
          </div>
          <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>
              info{" "}
              <span onClick={showClick}>
                <i className="fas fa-caret-square-down"></i>
              </span>
            </h5>
            {show && <p>{info}</p>}
          </div>
        </article>
      )}
    </>
  );
};

export default Tour;
