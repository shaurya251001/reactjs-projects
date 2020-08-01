import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__h3">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
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
