import "./myAccount.css";
import {Link} from 'react-router-dom';

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
                        <Link to='/incomes'>
                            <h3>Incomes:</h3>
                        </Link>
                    </div>
                    <div>
                        +
                    </div>

                </div>
                <div>
                    <div>
                    <Link to='/spent'>
                        <h3>Spent:</h3>
                    </Link>
                    </div>
                    <div>
                        +
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/savings'>
                            <h3>Savings:</h3>
                        </Link>
                    </div>
                    <div>
                        +
                    </div>
                </div>
            </article>
        </section>
    )
}