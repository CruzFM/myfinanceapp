import { createContext, useState } from "react";

const BalanceContext = createContext();

export function BalanceProvider( {children} ){
  //Total Balance
  const [totalBalance, setTotalBalance] = useState(0);

  //Incomes
  const [allIncomes, setAllIncomes] = useState([]);

  const [incomeBalance, setIncomeBalance] = useState(0);

  //Show the income balance
  // const addToIncomeBalance = () => {
  //   if (allIncomes.length > 0) {
  //     let amountsOnly = [];
  //     allIncomes.map((income) => amountsOnly.push(income.amount));
  //     console.log(amountsOnly);
  //     let finalBalance = amountsOnly.reduce((a, b) => a + b, 0);
  //     setIncomeBalance(finalBalance)
  //   }
  // };

  const handleAddIncome = (newIncome) => {
    setAllIncomes((prevIncomes) => [...prevIncomes, newIncome]);
    setIncomeBalance(prevIncomeBalance => prevIncomeBalance + newIncome.amount)
    console.log(incomeBalance)
  };

  //Spent
  const [allSpent, setAllSpent] = useState([]);

  const [spentBalance, setSpentBalance] = useState(0);

  const handleAddToSpent = (newSpending) => {
    setAllSpent((prevSpent) => [...prevSpent, newSpending]);
  };
  //Savings
  const [allSavings, setAllSavings] = useState([]);

  const [savingsBalance, setSavingsBalance] = useState();

  const handleAddtoSavings = (newSaving) => {
    setAllSavings((prevAllSavings) => [...prevAllSavings, newSaving]);
  };

  //To do: funnciones para poder crear los gastos.
  //detalle: el usuario deberia poder cargar sus gastos y estos deberian poder visualizarse en sus respectivos componentes como unas listas o cards.
  //ademas: como no es una app con un backend, la realidad es que deberia poder setearlo en local storage. el local lo traeria. (idealmente)
  //quizas: podriamos crear las categorias de gastos como: habituales o fijos, y como variables. mismo caso con los ingresos.
  //los ahorros deberian quedar fuera del balance (quizas)

  return (
    <BalanceContext.Provider
      value={{
        totalBalance,
        setTotalBalance,

        allIncomes, //usado en Incomes
        setAllIncomes,
        handleAddIncome, //usado en myAccount
        incomeBalance,
        setIncomeBalance,
        // addToIncomeBalance, // Incomes, myAccount

        allSpent, //usado en Spending
        setAllSpent,
        spentBalance,
        setSpentBalance,
        handleAddToSpent, //usado en myAccount

        allSavings, //usado en Savings
        setAllSavings,
        handleAddtoSavings, //usado en myAccount
        savingsBalance,
        setSavingsBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

export default BalanceContext