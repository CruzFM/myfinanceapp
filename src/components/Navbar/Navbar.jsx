import "./navbar.style.css";
import lightModeBtn from "../../images/light-mode-btn.png"
import darkModeBtn from "../../images/dark-mode-btn.png"
import { Link } from "react-router-dom";

export const Navbar = ( {isDarkMode, handleToggleDarkMode} )=>{

    const changeDarkModeBtn = ()=>{
        if(isDarkMode === true){
            return(
                <img src={lightModeBtn} style={{width: '20px', cursor:"pointer"}} alt="lightMode"/>
            )
        } else {
            return(
                <img src={darkModeBtn} style={{width: '20px', cursor:"pointer"}} alt="darkMode"/>
            )
        }
    }
    return(
        <nav className="navbar">
            <span><Link to="/"><strong>FinanceApp</strong></Link></span>
            <ul>
                <li onClick={handleToggleDarkMode}>{changeDarkModeBtn()}</li>
                <li><Link to="/incomes">Incomes</Link></li>
                <li><Link to="/spent">Spent</Link></li>
                <li><Link to="/savings">Savings</Link></li>
            </ul>
        </nav>
    )
}