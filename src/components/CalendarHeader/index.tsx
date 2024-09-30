import { getMonthName } from "../../utils/dateUtils";

import "./style.css";

interface CalendarHeaderProps {
  year: number;
  month: number;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  month,
  year,
  incrementMonth,
  decrementMonth,
}) => {
  return (
    <div className="month-header">
      <span onClick={decrementMonth}>‹</span>
      <h1>
        {getMonthName(year, month)} {year}
      </h1>
      <span onClick={incrementMonth}>›</span>
    </div>
  );
};

export default CalendarHeader;
