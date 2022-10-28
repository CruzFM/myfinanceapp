import "./incomes.style.css";

import { useContext } from "react"
import BalanceContext from "../../context/BalanceContext"


export const Incomes = ()=>{

    const {allIncomes} = useContext(BalanceContext)

    return(
        <div>
            
            <h1> Hola Fer, soy ingresos </h1>
            {allIncomes.map(income => {
                return(
                    <div className="card">
                        <h2>{income.date}</h2>
                        <h3>{income.amount}</h3>
                        <h3>{income.category}</h3>
                        <p>{income.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}