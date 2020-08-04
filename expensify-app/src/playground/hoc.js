//HOC:higher order component..
//A component that renders another component
//Reuse code
//Render highjacking
//Prop manipulation
//Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAdmin && <p>This is private info please dont share!</p>}
        <WrappedComponent {...props} />
        {/* <p>{props.info}</p> */}
      </div>
    ); //the props from this function are spread onto WrappedComponent function which are in turn used for the Info component
  };
};
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="SOME RANDOM TEXT" />,
//   document.querySelector(".app")
// );
const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated ? (
          <div>
            <p>This is private info please dont share</p>
            <WrappedComponent {...props} />
          </div>
        ) : (
          <p>Please log in to view that resource</p>
        )}
      </div>
    );
  };
};
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="SOME RANDOM TEXT" />,
  document.querySelector(".app")
);
