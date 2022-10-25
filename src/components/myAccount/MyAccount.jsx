import "./myAccount.css"

export const MyAccount = ()=>{
    return(
        <section className="myAccount">
            <article className="myAccount--balance">
                <h2>
                    Balance:
                </h2>
            </article>
            <article className="myAccount--items">
                <div>
                    <div>
                        <h3>Incomes:</h3>
                    </div>
                    <div>
                        +
                    </div>

                </div>
                <div>
                    <div>
                        <h3>Spent:</h3>
                    </div>
                    <div>
                        +
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Savings:</h3>
                    </div>
                    <div>
                        +
                    </div>
                </div>
            </article>
        </section>
    )
}