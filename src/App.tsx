import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Calendar from "./pages/Calendar";
import { getCurrentYearMonth } from "./utils/dateUtils";

function App() {
  const RedirectToCurrentDate: React.FC = () => {
    const navigate = useNavigate();
    const currentYearMonth = getCurrentYearMonth();

    useEffect(() => {
      navigate(`/${currentYearMonth}`);
    }, [currentYearMonth, navigate]);

    return null;
  };

  return (
    <Router>
      <Routes>
        <Route path="/:year/:month" element={<Calendar />} />
        <Route path="/" element={<RedirectToCurrentDate />} />
      </Routes>
    </Router>
  );
}

export default App;
