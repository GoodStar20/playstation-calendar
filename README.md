# PlayStation Calendar

This is a PlayStation calendar application built using React and TypeScript. It displays a collection of upcoming video game launches in a monthly view, allowing users to navigate between months and view event details.

## Features

- Displays a monthly view of upcoming video game launches.
- Allows navigation between months using 'Previous' and 'Next' buttons.
- URL-driven: supports routes like `http://localhost:3000/2023/10` for October 2023.
- Handles invalid dates by redirecting to the current month.
- Fetches events asynchronously and displays them in the calendar.
- Expands event details on click.

## Technologies

- React
- TypeScript
- React Router
- date-fns for date manipulation
- CSS for styling

## Trade-offs & Design Decisions

- The application will automatically redirect you to the current month and year. You can navigate between months using the arrows at the top of the calendar. Clicking on a date with an event will display details about that event.
- The application uses React Router for URL handling, allowing users to navigate directly to specific months by modifying the URL. This promotes a better user experience and SEO.
- Events are fetched using a custom hook, which separates data fetching logic from UI components, maintaining clean code.
- Local state is used to manage expanded events in the calendar cells. For larger applications, a global state management solution like Redux could be considered.

## Clone this repo

```bash
$ git clone https://github.com/GoodStar20/playstation-calendar.git
cd playstation-calendar
```

## Install dependencies

```
yarn install
yarn start
```

## Unit test

```
yarn test
```
