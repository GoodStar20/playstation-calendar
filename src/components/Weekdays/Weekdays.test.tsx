import { render, screen } from "@testing-library/react";
import Weekdays from "./";

describe("Weekdays Component", () => {
  test("renders all weekdays", () => {
    render(<Weekdays />);

    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    weekdays.forEach((day) => {
      const listItem = screen.getByText(day);
      expect(listItem).toBeInTheDocument();
    });
  });
});
