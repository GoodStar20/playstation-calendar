import React from "react";
import "./style.css";

interface CalendarCellProps {
  date: string;
  isHidden: boolean;
  event: any;
  onClick?: () => void;
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  isHidden,
  event,
  onClick,
}) => {
  const day = date ? date.split("-").pop() : "";

  return (
    <div
      onClick={onClick}
      className={`calendar-cell ${isHidden ? "hidden" : ""} ${
        event ? "event" : ""
      }`}
    >
      {event && event.imageFilenameThumb && (
        <img src={`/assets/${event.imageFilenameThumb}.webp`} alt="Event" />
      )}
      <div>{day}</div>
    </div>
  );
};

export default CalendarCell;
