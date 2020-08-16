import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/Notfound";

test("should render the NotFoundPage component correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
