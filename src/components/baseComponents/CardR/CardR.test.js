import React from "react";
import { shallow } from "enzyme";
import CardR from "./CardR";

describe("CardR", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardR />);
    expect(wrapper).toMatchSnapshot();
  });
});
