import React from "react";

function Loader(props) {
  return (
    <div className="row center-align load">
      <div
        className={
          props.condition
            ? "preloader-wrapper big active"
            : "preloader-wrapper big active hide"
        }
      >
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
