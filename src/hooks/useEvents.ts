import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { format, isValid } from "date-fns";
import { ICalendarEvent, ICalendarEvents } from "../types/Calendar";

interface UseEvents {
  events: ICalendarEvents | null;
  isLoading: boolean;
  error: Error | null;
}

function useEvents(): UseEvents {
  const [events, setEvents] = useState<ICalendarEvents | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCalendarData = useCallback(async () => {
    try {
      const { data } = await axios.get<ICalendarEvent[]>(
        "https://amock.io/api/goodstar/playstation",
      );

      const reformattedData: ICalendarEvents = data.reduce((acc, item) => {
        const date = new Date(item.launchDate);

        if (isValid(date)) {
          const key = format(date, "yyyy-M-d");
          return { ...acc, [key]: item };
        } else {
          console.error(`Invalid date found: ${item.launchDate}`);
          return acc;
        }
      }, {});

      setEvents(reformattedData);
    } catch (error: any) {
      setError(error);
      setEvents(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCalendarData();
  }, [fetchCalendarData]);

  return { events, isLoading, error };
}

export default useEvents;
