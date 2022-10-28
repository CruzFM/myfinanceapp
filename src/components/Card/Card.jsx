export const Card = (props) =>{
    return(
        <div className="card">
            <h2>{props.data.date}</h2>
            <h3>${props.data.amount}</h3>
            <h3>{props.data.category}</h3>
            <p>{props.data.detail}</p>
        </div>
    )
}