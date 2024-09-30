import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CalendarHeader from "./";

jest.mock("../../utils/dateUtils", () => ({
  getMonthName: jest.fn(),
}));

describe("CalendarHeader Component", () => {
  const mockIncrementMonth = jest.fn();
  const mockDecrementMonth = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls incrementMonth when right arrow is clicked", () => {
    render(
      <CalendarHeader
        year={2024}
        month={9}
        incrementMonth={mockIncrementMonth}
        decrementMonth={mockDecrementMonth}
      />,
    );

    fireEvent.click(screen.getByText("›"));

    expect(mockIncrementMonth).toHaveBeenCalled();
  });

  test("calls decrementMonth when left arrow is clicked", () => {
    render(
      <CalendarHeader
        year={2024}
        month={9}
        incrementMonth={mockIncrementMonth}
        decrementMonth={mockDecrementMonth}
      />,
    );

    fireEvent.click(screen.getByText("‹"));

    expect(mockDecrementMonth).toHaveBeenCalled();
  });
});
