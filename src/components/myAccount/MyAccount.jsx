import "./myAccount.css";
import { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import { FormAdd } from "../FormAdd/FormAdd";
import BalanceContext from "../../context/BalanceContext"

export const MyAccount = ({ handleToggleDarkMode, isDarkMode }) => {
  const [incomesModalIsOpen, setIncomesModalIsOpen] = useState(false);

  const [spentModalIsOpen, setSpentModalIsOpen] = useState(false);

  const [savingsModalIsOpen, setSavingsModalIsOpen] = useState(false);

  const darkModeModal = {
    overlay: isDarkMode === true && { backgroundColor: "black" },
    content: isDarkMode === true && {
      backgroundColor: "rgb(45, 40, 40)",
      color: "white",
    },
  };

  const incomesCategories = ["Salary", "Investments", "Extras"];

  const spentCategories = ["Recurrent", "Extra"];

  const savingsCategories = ["Vacation", "Goods"];

  const {
    setAllIncomes,
    allIncomes,
    handleAddIncome,
    handleAddToSpent,
    handleAddtoSavings,
    incomeBalance,
    spentBalance,
    totalBalance,
    savingsBalance
  } = useContext(BalanceContext);

  return (
    <section className="myAccount">
      <article className="myAccount--balance">
        <h2>Balance: ${totalBalance}</h2>
      </article>
      <article onClick={handleToggleDarkMode}>
        {isDarkMode === true ? "dark" : "white"}
      </article>
      <article className="myAccount--items">
        <div>
          <div>
            <Link to="/incomes">
              <h3>Incomes: ${incomeBalance}</h3>
            </Link>
          </div>
          <div onClick={() => setIncomesModalIsOpen(true)}>+</div>
          <Modal
            isOpen={incomesModalIsOpen}
            style={darkModeModal}
            // className="modal"
          >
            <FormAdd
              category={incomesCategories}
              nameAdd="income"
              addNew={handleAddIncome}
            />
            <button className="modal-btn" onClick={() => setIncomesModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <div>
            <Link to="/spent">
              <h3>Spent: ${spentBalance}</h3>
            </Link>
          </div>
          <div onClick={() => setSpentModalIsOpen(true)}>+</div>
          <Modal isOpen={spentModalIsOpen} style={darkModeModal}>
            <FormAdd
              category={spentCategories}
              nameAdd="spending"
              addNew={handleAddToSpent}
            />
            <button className="modal-btn" onClick={() => setSpentModalIsOpen(false)}>X</button>
          </Modal>
        </div>
        <div>
          <div>
            <Link to="/savings">
              <h3>Savings: ${savingsBalance}</h3>
            </Link>
          </div>
          <div onClick={() => setSavingsModalIsOpen(true)}>+</div>
          <Modal isOpen={savingsModalIsOpen} style={darkModeModal}>
            <FormAdd
              category={savingsCategories}
              nameAdd="saving"
              addNew={handleAddtoSavings}
            />
            <button className="modal-btn" onClick={() => setSavingsModalIsOpen(false)}>X</button>
          </Modal>
        </div>
      </article>
    </section>
  );
};