import React from "react";

export default function Card(props) {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={props.img} />
          {console.log(props.img)}
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-Namecontent">
          <p></p>
        </div>
        <div className="card-action center-align">
          <a href={props.url} className="btn waves-effect yellow">
            Recipe
          </a>
        </div>
      </div>
    </div>
  );
}
