import React from "react";

const Items = (props) => {
  return (
    <div>
      <h1>My work</h1>
      <p>This is my item {props.match.params.item}</p>
    </div>
  );
};

export default Items;
