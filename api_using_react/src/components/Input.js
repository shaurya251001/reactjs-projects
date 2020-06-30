import React from "react";

export default function Input(props) {
  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        <form>
          <div className="col s6 center-align offset-s2">
            <input onChange={props.onchange} />
          </div>
          <div className="col s2">
            <button
              onClick={props.onclick}
              type="submit"
              className="btn waves-effect mb"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
