import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CalendarHeader from "../../components/CalendarHeader";
import Weekdays from "../../components/Weekdays";
import CalendarCells from "../../components/CalendarCells";

import useCells from "../../hooks/useCells";
import useEvents from "../../hooks/useEvents";
import {
  getCurrentYearMonth,
  getUpdateMonth,
  isValidDate,
} from "../../utils/dateUtils";
import CalendarError from "../../components/CalendarError";
import Loading from "../../components/Loading";

const Calendar: React.FC = () => {
  const { year: yearParam, month: monthParam } = useParams<{
    year: string;
    month: string;
  }>();
  const navigate = useNavigate();

  const year = Number(yearParam);
  const month = Number(monthParam);

  const { cells } = useCells(year, month);
  const { events, isLoading, error } = useEvents();

  const handleNavigation = (months: number) => {
    const targetMonth = getUpdateMonth(year, month, months);
    navigate(`/${targetMonth}`);
  };

  useEffect(() => {
    if (!isValidDate(year, month)) {
      const currentDate = getCurrentYearMonth();
      navigate(`/${currentDate}`);
    }
  }, [year, month, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <CalendarError />;
  }

  return (
    <>
      <CalendarHeader
        year={year}
        month={month}
        incrementMonth={() => handleNavigation(1)}
        decrementMonth={() => handleNavigation(-1)}
      />
      <Weekdays />
      <CalendarCells cells={cells} events={events} />
    </>
  );
};

export default Calendar;
