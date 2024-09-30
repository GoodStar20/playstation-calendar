import { render, screen, fireEvent } from "@testing-library/react";
import CalendarCell from "./";

describe("CalendarCell Component", () => {
  const mockEvent = {
    imageFilenameThumb: "event-thumbnail",
  };
  const date = "2024-9-30";

  test("renders the day correctly", () => {
    render(<CalendarCell date={date} isHidden={false} event={null} />);

    expect(screen.getByText("30")).toBeInTheDocument();
  });

  test("renders event image when an event is present", () => {
    render(<CalendarCell date={date} isHidden={false} event={mockEvent} />);

    const img = screen.getByAltText("Event");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/event-thumbnail.webp");
  });

  test("does not render an event image when no event is present", () => {
    render(<CalendarCell date={date} isHidden={false} event={null} />);

    expect(screen.queryByAltText("Event")).not.toBeInTheDocument();
  });

  test("calls onClick when cell is clicked", () => {
    const handleClick = jest.fn();

    render(
      <CalendarCell
        date={date}
        isHidden={false}
        event={null}
        onClick={handleClick}
      />,
    );

    fireEvent.click(screen.getByText("30"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
