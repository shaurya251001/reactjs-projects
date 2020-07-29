import React from "react";
import ReactDOM from "react-dom";
import Indecision from "./components/Indecision";

ReactDOM.render(<Indecision />, document.querySelector(".app"));
// class OldSyntax {
//   constructor() {
//     this.name = "xyz";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = "xyz";
//   getGreeting = () => {
//     return `Hi ${this.name}`;
//   };
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
