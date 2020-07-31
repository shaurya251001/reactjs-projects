import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <div>
        {props.options.map((element) => {
          return (
            <Option
              text={element}
              key={element}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Options;
