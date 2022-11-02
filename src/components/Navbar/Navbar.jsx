import "./navbar.style.css";
import { Link } from "react-router-dom";

export const Navbar = ( {isDarkMode, handleToggleDarkMode} )=>{
    return(
        <nav className="navbar">
            <span><Link to="/">FinanceApp</Link></span>
            <ul>
                <li onClick={handleToggleDarkMode}>{isDarkMode === true ? "dark" : "white"}</li>
                <li><Link to="/incomes">Incomes</Link></li>
                <li><Link to="/spent">Spent</Link></li>
                <li><Link to="/savings">Savings</Link></li>
            </ul>
        </nav>
    )
}