import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import BaseButton from "./BaseButton";

afterEach(cleanup);

test("render BaseButton component", () => {
  const { container } = render(<BaseButton>Button</BaseButton>);
  const buttonText = container.querySelector("button");
  expect(buttonText.textContent).toBe("Button");
});

test("render full width button", () => {
  const { getByTestId } = render(<BaseButton fullwidth>Button</BaseButton>);
  expect(getByTestId("button")).toHaveClass("w-full");
});

test("show loading bar and no text", () => {
  const { getByTestId, debug } = render(
    <BaseButton isLoading>Button</BaseButton>
  );
  expect(getByTestId("loading")).toBeTruthy();
  expect(getByTestId("button").textContent).toBe("");
});

test("custom event when click the button", () => {
  const action = jest.fn();
  const { getByTestId } = render(
    <BaseButton fullwidth onClick={action}>
      Button
    </BaseButton>
  );
  const button = getByTestId("button");
  fireEvent.click(button);
});
