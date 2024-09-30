import { useEffect, useState } from "react";
import { startOfMonth, endOfMonth, format } from "date-fns";
import { ICalendarCells } from "../types/Calendar";

const createUseCells = (year: number, month: number): ICalendarCells => {
  const date = new Date(year, month - 1);
  const firstDay = startOfMonth(date).getDay();
  const daysInMonth = endOfMonth(date).getDate();

  const cells: ICalendarCells = Array.from({ length: 6 }, () =>
    Array(7).fill(null),
  );

  for (let day = 1; day <= daysInMonth; day++) {
    const row = Math.floor((firstDay + day - 1) / 7);
    const column = (firstDay + day - 1) % 7;
    cells[row][column] = format(new Date(year, month - 1, day), "yyyy-M-d");
  }

  return cells;
};

const useCells = (year: number, month: number) => {
  const [cells, setCells] = useState<ICalendarCells>([]);

  useEffect(() => {
    setCells(createUseCells(year, month));
  }, [year, month]);

  return { cells };
};

export default useCells;
