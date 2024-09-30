import "./style.css";

const CalendarError = () => {
  return (
    <p className="error">
      <b>
        Unable to load the calendar. Please check your internet connection and
        try again.
      </b>
    </p>
  );
};

export default CalendarError;
