import React from "react";
import { shallow } from "enzyme";
import ButtonAct from "./ButtonAct";

describe("ButtonAct", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ButtonAct />);
    expect(wrapper).toMatchSnapshot();
  });
});
