import { useEffect, useState } from "react";
import { ICalendarCells } from "../../types/Calendar";
import { ICalendarEvents } from "../../types/Calendar";
import CalendarCell from "../CalendarCell";
import CalendarEvent from "../CalendarEvent";
import "./style.css";

interface CalendarCellsProps {
  cells: ICalendarCells;
  events: ICalendarEvents | null | undefined;
}

const CalendarCells: React.FC<CalendarCellsProps> = ({ cells, events }) => {
  const [expandedEvents, setExpandedEvents] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const newExpandedEvents = cells.reduce(
      (acc: { [key: string]: boolean }, row) => {
        row.forEach((cell) => {
          if (cell && events && events[cell]) acc[cell] = false;
        });
        return acc;
      },
      {},
    );
    setExpandedEvents(newExpandedEvents);
  }, [cells, events]);

  const handleEventClick = (date: string) => {
    setExpandedEvents((prevState) => ({
      ...Object.keys(prevState).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {},
      ),
      [date]: !prevState[date],
    }));
  };

  const renderRow = (row: Array<string | null>, rowIndex: number) => {
    const hasEvents = row.some((cell) => cell && events && events[cell]);

    if (row.every((cell) => cell === null)) return null;

    return (
      <div className="calendar-row" key={`row-${rowIndex}`}>
        {row.map((date, cellIndex) => {
          const key = `cell-${rowIndex}-${cellIndex}`;
          return (
            <CalendarCell
              key={key}
              date={date as string}
              event={date && events && events[date]}
              isHidden={!date}
              onClick={() => handleEventClick(date as string)}
            />
          );
        })}
        {hasEvents &&
          row.map((date) => {
            if (!date || !events || !events[date]) return null;
            const key = `preview-${date}`;
            return (
              <CalendarEvent
                key={key}
                event={events[date]}
                date={date}
                isExpanded={expandedEvents[date]}
              />
            );
          })}
      </div>
    );
  };

  return <div className="calendar-cells">{cells.map(renderRow)}</div>;
};

export default CalendarCells;
