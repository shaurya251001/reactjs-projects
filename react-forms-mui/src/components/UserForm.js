import React, { Component } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    } = this.state;
    const values = {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
