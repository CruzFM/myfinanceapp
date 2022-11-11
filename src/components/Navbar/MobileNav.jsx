import { Link } from "react-router-dom";

export const MobileNav = ({
  handleToggleDarkMode,
  changeDarkModeBtn,
  setIsOpen,
}) => {
  return (
    <ul className="mobileNav">
      <li onClick={handleToggleDarkMode}>{changeDarkModeBtn()}</li>
      <li>
        <Link to="/incomes" onClick={() => setIsOpen(false)}>
          Incomes
        </Link>
      </li>
      <li>
        <Link to="/spent" onClick={() => setIsOpen(false)}>
          Spent
        </Link>
      </li>
      <li>
        <Link to="/savings" onClick={() => setIsOpen(false)}>
          Savings
        </Link>
      </li>
    </ul>
  );
};
