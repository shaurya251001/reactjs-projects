//react-test-renderer
import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../../components/Header";

test("Should set header correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
