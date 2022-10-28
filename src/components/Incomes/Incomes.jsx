import "./incomes.style.css";

import { useContext } from "react"
import BalanceContext from "../../context/BalanceContext"

import { Card } from "../Card/Card";

export const Incomes = ()=>{

    const {allIncomes} = useContext(BalanceContext)

    return(
        <div>
            
            <h1> Hola Fer, soy ingresos </h1>
            {allIncomes.map(income => {
                return(
                    <>
                        <Card data={income} />
                    </>
                )
            })}
        </div>
    )
}