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
                        Incomes
                    </div>
                    <div>
                        +
                    </div>

                </div>
                <div>
                    <div>
                        Spent
                    </div>
                    <div>
                        +
                    </div>
                    
                </div>
                <div>
                    <div>
                        Savings
                    </div>
                    <div>
                        +
                    </div>
                </div>
            </article>
        </section>
    )
}