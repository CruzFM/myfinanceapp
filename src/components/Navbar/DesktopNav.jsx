import { Link } from "react-router-dom";

export const DesktopNav = ({ handleToggleDarkMode, changeDarkModeBtn }) => {
  return (
    <ul>
      <li onClick={handleToggleDarkMode}>{changeDarkModeBtn()}</li>
      <li>
        <Link to="/incomes">Incomes</Link>
      </li>
      <li>
        <Link to="/spent">Spent</Link>
      </li>
      <li>
        <Link to="/savings">Savings</Link>
      </li>
    </ul>
  );
};
