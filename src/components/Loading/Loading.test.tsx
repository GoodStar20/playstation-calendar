import { render, screen } from "@testing-library/react";
import Loading from "./";

describe("Loading Component", () => {
  test("renders loading image", () => {
    render(<Loading />);

    const loadingImage = screen.getByAltText(/loading/i);
    expect(loadingImage).toBeInTheDocument();

    expect(loadingImage).toHaveAttribute(
      "src",
      expect.stringContaining("loading.gif"),
    );
  });
});
