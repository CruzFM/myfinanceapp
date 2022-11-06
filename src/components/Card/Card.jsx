import "./card.style.css"

export const Card = (props) =>{
    return(
        <div className="card">
            <h2>${props.data.amount}</h2>
            <h4>{props.data.date}</h4>
            <h6>{props.data.category}</h6>
            <p>{props.data.detail}</p>
        </div>
    )
}