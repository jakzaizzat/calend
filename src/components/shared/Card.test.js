import React from "react";
import { toBeInTheDocument, toHaveStyle } from "@testing-library/jest-dom";
import { render, getByText, cleanup } from "@testing-library/react";

import Card from "./Card";

const props = {
  title: "Card Title",
};

afterEach(cleanup);

test("render Card component", () => {
  const action = jest.fn();

  const { getByTestId } = render(
    <Card title={props.title} action={action}>
      Body
    </Card>
  );

  expect(getByTestId("title").textContent).toBe("Card Title");
  expect(getByTestId("body").textContent).toBe("Body");
});
