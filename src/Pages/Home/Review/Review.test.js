import { render, screen, cleanup } from "@testing-library/react";
import Review from './Review'
import "@testing-library/jest-dom";

test("should render text component", () => {
    render(<Review />);
    var textElem = screen.getByTestId("reviewtest");
    expect(textElem).toBeInTheDocument();
  });