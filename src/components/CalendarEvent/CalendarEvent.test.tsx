import { render, screen } from "@testing-library/react";
import CalendarEvent from "./"; // Adjust the import path as necessary
import { ICalendarEvent } from "../../types/Calendar";
import { getFullDateName } from "../../utils/dateUtils";

describe("CalendarEvent Component", () => {
  const mockEvent: ICalendarEvent = {
    id: "18213007415c6b3aceb83604",
    launchDate: "2024-09-13T09:01:30.152Z",
    title: "Gran Turismo 7",
    summary:
      "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
    imageFilenameThumb: "gran-turismo-7__1x1",
    imageFilenameFull: "gran-turismo-7__16x9",
    learnMoreLink: "https://www.playstation.com/en-us/games/gran-turismo-7/",
    purchaseLink:
      "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly when expanded", () => {
    const date = "2024-9-13";

    render(<CalendarEvent isExpanded={true} event={mockEvent} date={date} />);

    expect(screen.getByText(/September 13th 2024/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /learn more/i })).toHaveAttribute(
      "href",
      mockEvent.learnMoreLink,
    );
    expect(
      screen.getByRole("link", { name: /pre order now/i }),
    ).toHaveAttribute("href", mockEvent.purchaseLink);
  });
});
