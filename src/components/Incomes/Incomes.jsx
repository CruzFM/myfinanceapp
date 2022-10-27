import { useContext } from "react"
import BalanceContext from "../../context/BalanceContext"


export const Incomes = ()=>{

    const {allIncomes} = useContext(BalanceContext)

    return(
        <div>
            
            <h1> Hola Fer, soy ingresos </h1>
            {allIncomes.map(income => {
                return(
                    <div>
                        <h1>{income.date}</h1>
                        <h3>{income.amount}</h3>
                    </div>
                )
            })}
        </div>
    )
}