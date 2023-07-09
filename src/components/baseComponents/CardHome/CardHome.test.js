import React from "react";
import { shallow } from "enzyme";
import CardHome from "./CardHome";

describe("CardHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
