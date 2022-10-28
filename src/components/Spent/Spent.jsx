import "../Incomes/incomes.style.css"

import { useContext } from "react"
import BalanceContext from "../../context/BalanceContext"

export const Spent = ()=>{

    const {allSpent} = useContext(BalanceContext);

    return(
        <div>
            
            <h1> Hola Fer, soy Gastos </h1>
            {allSpent.map(spending => {
                return(
                    <div className="card">
                        <h2>{spending.date}</h2>
                        <h3>${spending.amount}</h3>
                        <h3>{spending.category}</h3>
                        <p>{spending.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}