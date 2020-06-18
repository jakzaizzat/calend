import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonGroup from "./ButtonGroups";

const durations = ["10:00 a.m", "11:00 a.m", "12:00 a.m"];
const active = "10:00 a.m";
test("Render button group", () => {
  const { container } = render(
    <ButtonGroup durations={durations}></ButtonGroup>
  );

  expect(container).toBeTruthy();
  expect(container.querySelectorAll("button").length).toBe(3);
  expect(container.querySelector("button:nth-child(2)").textContent).toBe(
    "11:00 a.m minutes"
  );
});

test("Highlight the active button", () => {
  const { container } = render(
    <ButtonGroup durations={durations} active={active}></ButtonGroup>
  );
  expect(container.querySelector("button:nth-child(1)")).toHaveClass(
    "bg-indigo-600 text-white"
  );
});

test("Trigger an event when click the button", () => {
  const handleChanges = jest.fn();

  const { container, debug } = render(
    <ButtonGroup
      durations={durations}
      handleChanges={handleChanges}
    ></ButtonGroup>
  );
  fireEvent.click(container.querySelector("button"));
  expect(container).toBeTruthy();
});
