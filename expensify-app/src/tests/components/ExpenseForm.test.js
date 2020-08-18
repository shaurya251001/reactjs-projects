import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render the ExpenseForm component correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set up description on input change", () => {
  const value = "nwe";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
  const value = "new";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input recieved", () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toBe(value);
});
test("should not set amount if invalid input recieved", () => {
  const value = "23.505";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toBe("");
});
