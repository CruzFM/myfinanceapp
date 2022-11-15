import "./myAccount.css";
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import { FormAdd } from "../FormAdd/FormAdd";
import BalanceContext from "../../context/BalanceContext"

export const MyAccount = ({ isDarkMode }) => {
  const [incomesModalIsOpen, setIncomesModalIsOpen] = useState(false);

  const [spentModalIsOpen, setSpentModalIsOpen] = useState(false);

  const [savingsModalIsOpen, setSavingsModalIsOpen] = useState(false);

  const darkModeModal = {
    overlay: {
      backgroundColor:
        isDarkMode === true ? "black" : "rgba(255, 255, 255, 0.75)",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: isDarkMode === true ? "rgb(45, 40, 40)" : "#fff",
      color: isDarkMode === true ? "white" : "black",
    },
  };

  const incomesCategories = ["Salary", "Investments", "Extras"];

  const spentCategories = ["Recurrent", "Extra"];

  const savingsCategories = ["Vacation", "Goods"];

  const {
    handleAddIncome,
    handleAddToSpent,
    handleAddtoSavings,
    incomeBalance,
    spentBalance,
    totalBalance,
    savingsBalance,
  } = useContext(BalanceContext);

  return (
    <section className="myAccount">
      <article className="myAccount--balance">
        <h2>Balance: ${totalBalance}</h2>
      </article>
      <article className="myAccount--items">
        <div>
          <div>
            <Link to="/incomes">
              <h3>Incomes: ${incomeBalance}</h3>
            </Link>
          </div>
          <div
            className="myAccount--items_add"
            onClick={() => setIncomesModalIsOpen(true)}
          >
            +
          </div>
          <Modal isOpen={incomesModalIsOpen} style={darkModeModal}>
            <FormAdd
              category={incomesCategories}
              nameAdd="income"
              addNew={handleAddIncome}
              setModalIsOpen={setIncomesModalIsOpen}
            />
            <button
              className="modal-btn"
              onClick={() => setIncomesModalIsOpen(false)}
            >
              X
            </button>
          </Modal>
        </div>
        <div>
          <div>
            <Link to="/spent">
              <h3>Spent: ${spentBalance}</h3>
            </Link>
          </div>
          <div
            className="myAccount--items_add"
            onClick={() => setSpentModalIsOpen(true)}
          >
            +
          </div>
          <Modal isOpen={spentModalIsOpen} style={darkModeModal}>
            <FormAdd
              category={spentCategories}
              nameAdd="spending"
              addNew={handleAddToSpent}
              setModalIsOpen={setSpentModalIsOpen}
            />
            <button
              className="modal-btn"
              onClick={() => setSpentModalIsOpen(false)}
            >
              X
            </button>
          </Modal>
        </div>
        <div>
          <div>
            <Link to="/savings">
              <h3>Savings: ${savingsBalance}</h3>
            </Link>
          </div>
          <div
            className="myAccount--items_add"
            onClick={() => setSavingsModalIsOpen(true)}
          >
            +
          </div>
          <Modal isOpen={savingsModalIsOpen} style={darkModeModal}>
            <FormAdd
              category={savingsCategories}
              nameAdd="saving"
              addNew={handleAddtoSavings}
              setModalIsOpen={setSavingsModalIsOpen}
            />
            <button
              className="modal-btn"
              onClick={() => setSavingsModalIsOpen(false)}
            >
              X
            </button>
          </Modal>
        </div>
      </article>
    </section>
  );
};