import "./myAccount.css";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import { FormAdd } from "../FormAdd/FormAdd";

export const MyAccount = ()=>{

    const [incomesModalIsOpen, setIncomesModalIsOpen] = useState(false);

    const [spentModalIsOpen, setSpentModalIsOpen] = useState(false);

    const [savingsModalIsOpen, setSavingsModalIsOpen] = useState(false);

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
                    <div onClick={()=> setIncomesModalIsOpen(true)}>
                        +
                    </div>
                    <Modal isOpen={incomesModalIsOpen}>
                        {/* <h2>Hola fer, soy Incomes Modal</h2>
                        <p>sigamos laburando.</p> */}
                        <FormAdd />
                        <button onClick={()=> setIncomesModalIsOpen(false)}>Close</button>
                    </Modal>
                </div>
                <div>
                    <div>
                    <Link to='/spent'>
                        <h3>Spent:</h3>
                    </Link>
                    </div>
                    <div onClick={()=> setSpentModalIsOpen(true)}>
                        +
                    </div>
                    <Modal isOpen={spentModalIsOpen}>
                        <h2>Hola fer, soy Spent Modal</h2>
                        <p>sigamos laburando.</p>
                        <button onClick={()=> setSpentModalIsOpen(false)}>Close</button>
                    </Modal>
                </div>
                <div>
                    <div>
                        <Link to='/savings'>
                            <h3>Savings:</h3>
                        </Link>
                    </div>
                    <div onClick={()=> setSavingsModalIsOpen(true)}>
                        +
                    </div>
                    <Modal isOpen={savingsModalIsOpen}>
                        <h2>Hola fer, soy Savings Modal</h2>
                        <p>sigamos laburando.</p>
                        <button onClick={()=> setSavingsModalIsOpen(false)}>Close</button>
                    </Modal>
                </div>
            </article>
        </section>
    )
}