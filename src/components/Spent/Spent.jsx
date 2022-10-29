import { Card } from "../Card/Card"
import { useContext } from "react"
import BalanceContext from "../../context/BalanceContext"

export const Spent = ()=>{

    const {allSpent} = useContext(BalanceContext);

    return(
        <div>    
            <h1> Hola Fer, soy Gastos </h1>
            <div className="card-wrap">
                {allSpent.map(spending => {
                    return(
                        <Card data={spending} />
                    )
                })}
            </div>
        </div>
    )
}