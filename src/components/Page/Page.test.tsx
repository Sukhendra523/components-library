import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from ".";

describe("Page", () => {
  it("render title and children", () => {
    const title = "this title";
    const children = "this is children";
    const { getByText } = render(<Page title={title}>{children}</Page>);

    const titleElm = getByText(title);
    const childrenElm = getByText(children);

    expect(titleElm).toBeInTheDocument();
    expect(childrenElm).toBeInTheDocument();
  });

  it("render correct styling", () => {
    const title = "this title";
    const children = "this is children";
    const { getByTestId } = render(<Page title={title}>{children}</Page>);

    const container = getByTestId("page-container");

    expect(container).toHaveStyle("background-color: #f5f5f5");
  });
});
