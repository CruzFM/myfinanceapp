import "./card.style.css"
import { useContext } from "react"
import BalanceContext from "../../context/BalanceContext"


export const Card = (props) =>{

    const { deleteItem } = useContext(BalanceContext)

    return(
        <div className="card">
            <h2>${props.data.amount}</h2>
            <h4>{props.data.date}</h4>
            <h6>{props.data.category}</h6>
            <p>{props.data.detail}</p>
            <button 
                onClick={ ()=> deleteItem(props.array, props.data, props.setState, props.setItemBalance, props.setTotalBalance)}
                style={{backgroundColor: "red", color:"white", padding: "12px"}}
            >X</button>
        </div>
    )
}