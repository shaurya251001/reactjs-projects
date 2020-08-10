//react-test-renderer

import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("Should set header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
