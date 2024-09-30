import { format, isValid, parse, addMonths } from "date-fns";

export function isValidDate(year: number, month: number) {
  return isValid(new Date(year, month - 1)) && month >= 1 && month <= 12;
}

export const getCurrentYearMonth = (): string => {
  return format(new Date(), "yyyy/M");
};

export const getUpdateMonth = (
  year: number,
  month: number,
  months: number,
): string => {
  const currentDate = new Date(year, month - 1);
  const nextMonthDate = addMonths(currentDate, months);
  return format(nextMonthDate, "yyyy/M");
};

export const getMonthName = (year: number, month: number) => {
  const date = parse(`${year}-${month}-01`, "yyyy-MM-dd", new Date());
  const monthName = format(date, "MMMM");
  return monthName;
};

export const getFullDateName = (dateString: string) => {
  const date = parse(dateString, "yyyy-M-d", new Date());
  const monthName = format(date, "MMMM do yyyy");
  return monthName;
};
