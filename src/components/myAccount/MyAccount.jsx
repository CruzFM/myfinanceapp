import "./myAccount.css";
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import { FormAdd } from "../FormAdd/FormAdd";
import BalanceContext from "../../context/BalanceContext"

export const MyAccount = ( {handleToggleDarkMode, isDarkMode} )=>{

    const [incomesModalIsOpen, setIncomesModalIsOpen] = useState(false);

    const [spentModalIsOpen, setSpentModalIsOpen] = useState(false);

    const [savingsModalIsOpen, setSavingsModalIsOpen] = useState(false);

    const darkModeModal = {
      overlay: isDarkMode === true && { backgroundColor: "black" },
      content:
        isDarkMode === true && 
            {
              backgroundColor: "rgb(45, 40, 40)",
              color: "white",
            },
    };

    const incomesCategories = [
        'Salary',
        'Investments',
        'Extras',
    ]

    const spentCategories = [
        'Recurrent',
        'Extra',
    ]

    const savingsCategories =[
        'Vacation',
        'Goods'
    ]

    const { setAllIncomes, allIncomes, handleAddIncome } = useContext(BalanceContext);


    return(
        <section className="myAccount">
            <article className="myAccount--balance">
                <h2>
                    Balance:
                </h2>
            </article>
            <article onClick={handleToggleDarkMode}>{isDarkMode === true ? 'dark' : 'white'}</article>
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
                    <Modal isOpen={incomesModalIsOpen} style={darkModeModal} className="modal">
                        <FormAdd category={incomesCategories} nameAdd='income' addNew={handleAddIncome} />
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
                    <Modal isOpen={spentModalIsOpen}  style={darkModeModal}>
                        <FormAdd 
                            category={spentCategories} 
                            nameAdd='spending' 

                        />
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
                    <Modal isOpen={savingsModalIsOpen} style={darkModeModal}>
                        <FormAdd category={savingsCategories} nameAdd='saving' />
                        <button onClick={()=> setSavingsModalIsOpen(false)}>Close</button>
                    </Modal>
                </div>
            </article>
        </section>
    )
}