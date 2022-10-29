import "../Incomes/incomes.style.css";
import { useContext } from "react";
import BalanceContext from "../../context/BalanceContext";

export const Savings = ()=>{

    const { allSavings } = useContext(BalanceContext);

    return(
        <div>
            <h1>Hola Fer, soy ahorros</h1>
            {allSavings.map(saving => {
                return(
                    <div className="card">
                        <h2>{saving.date}</h2>
                        <h3>${saving.amount}</h3>
                        <h3>{saving.category}</h3>
                        <p>{saving.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}