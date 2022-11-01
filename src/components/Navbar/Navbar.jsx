import "./navbar.style.css";

export const Navbar = ()=>{
    return(
        <nav className="navbar">
            <span>FinanceApp</span>
            <ul>
                <li>Incomes</li>
                <li>Spent</li>
                <li>Savings</li>
            </ul>
        </nav>
    )
}