import React from "react";
import { ICalendarEvent } from "../../types/Calendar";
import { getFullDateName } from "../../utils/dateUtils";

import "./style.css";

interface CalendarEventProps {
  isExpanded: boolean;
  event: ICalendarEvent;
  date: string;
}

const CalendarEvent: React.FC<CalendarEventProps> = ({
  isExpanded,
  date,
  event: { title, summary, imageFilenameFull, learnMoreLink, purchaseLink },
}) => {
  return (
    <div
      className={`calendar-preview ${isExpanded ? "expanded" : ""}`}
      style={{
        backgroundImage: imageFilenameFull
          ? `url(/assets/${imageFilenameFull}.webp)`
          : undefined,
      }}
    >
      {isExpanded && (
        <>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
          <div className="available-date">
            Available {getFullDateName(date)}
          </div>
          <a
            href={learnMoreLink}
            target="_blank"
            className="action-btn learn-more"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <a
            href={purchaseLink}
            target="_blank"
            className="action-btn pre-order"
            rel="noopener noreferrer"
          >
            Pre Order Now
          </a>
        </>
      )}
    </div>
  );
};

export default CalendarEvent;
