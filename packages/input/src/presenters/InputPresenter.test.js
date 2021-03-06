import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import InputPresenter from "./InputPresenter";
import behavesLikeInputPropPasser from "../__test__/behavesLikeInputPropPasser";

describe("InputPresenter", () => {
  behavesLikeInputPropPasser({
    Subject: InputPresenter,
    Receiver: "input"
  });

  it("renders by default", () => {
    expect(renderer.create(<InputPresenter />).toJSON()).toMatchSnapshot();
  });

  it("renders with id", () => {
    expect(
      renderer.create(<InputPresenter id="my_id" />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with hover", () => {
    expect(
      renderer.create(<InputPresenter hasHover />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with focus", () => {
    expect(
      renderer.create(<InputPresenter hasFocus />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders when disabled", () => {
    expect(
      renderer.create(<InputPresenter isDisabled />).toJSON()
    ).toMatchSnapshot();
  });

  it("sets event handlers on the input", () => {
    const onInputHandler = () => {};
    const onChangeHandler = () => {};
    const onFocusHandler = () => {};
    const onBlurHandler = () => {};
    const onMouseEnterHandler = () => {};
    const onMouseLeaveHandler = () => {};
    const wrapper = mount(
      <InputPresenter
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onInput={onInputHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    );

    const inputProps = wrapper.find("input").props();
    expect(inputProps.onChange).toEqual(onChangeHandler);
    expect(inputProps.onFocus).toEqual(onFocusHandler);
    expect(inputProps.onBlur).toEqual(onBlurHandler);
    expect(inputProps.onMouseEnter).toEqual(onMouseEnterHandler);
    expect(inputProps.onMouseLeave).toEqual(onMouseLeaveHandler);
    expect(inputProps.onInput).toEqual(onInputHandler);
  });
});
