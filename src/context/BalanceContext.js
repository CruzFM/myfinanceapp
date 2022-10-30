import { createContext, useState } from "react";

const BalanceContext = createContext();

export function BalanceProvider( {children} ){
  //Total Balance
  const [totalBalance, setTotalBalance] = useState(0);

  //Incomes
  const [allIncomes, setAllIncomes] = useState([]);

  const [incomeBalance, setIncomeBalance] = useState(0);

  const handleAddIncome = (newIncome) => {
    //Adds a new income to the list of incomes
    setAllIncomes((prevIncomes) => [...prevIncomes, newIncome]);

    //Changes income balance. Sums every new amount into the pre-existing value
    setIncomeBalance(prevIncomeBalance => prevIncomeBalance + newIncome.amount);


    //TESTING
    setTotalBalance(prevTotalBalance => prevTotalBalance + newIncome.amount);
  };

  //Spent
  const [allSpent, setAllSpent] = useState([]);

  const [spentBalance, setSpentBalance] = useState(0);

  const handleAddToSpent = (newSpending) => {
    //Adds a new spending to the list of spendings
    setAllSpent((prevSpent) => [...prevSpent, newSpending]);

    //Changes spent balance. Sumbs every new amount into the pre-existing value
    setSpentBalance(prevSpentBalance => prevSpentBalance + newSpending.amount);

    //TESTING
    setTotalBalance(prevTotalBalance=> prevTotalBalance - newSpending.amount);
  };


  //Savings
  const [allSavings, setAllSavings] = useState([]);

  const [savingsBalance, setSavingsBalance] = useState(0);

  const handleAddtoSavings = (newSaving) => {
    //Adds a new saving to the list of savings
    setAllSavings((prevAllSavings) => [...prevAllSavings, newSaving]);

    //Adds the sum of the total savings to the savings balance.
    //NOTE: the savings amount doesnt affect the total balance.
    //TESTING
    setSavingsBalance(prevSavingBalance => prevSavingBalance + newSaving.amount)
  };

  //To do: funnciones para poder crear los gastos.
  //detalle: el usuario deberia poder cargar sus gastos y estos deberian poder visualizarse en sus respectivos componentes como unas listas o cards.
  //ademas: como no es una app con un backend, la realidad es que deberia poder setearlo en local storage. el local lo traeria. (idealmente)
  //quizas: podriamos crear las categorias de gastos como: habituales o fijos, y como variables. mismo caso con los ingresos.
  //los ahorros deberian quedar fuera del balance (quizas)

  return (
    <BalanceContext.Provider
      value={{
        totalBalance, //myAccount
        setTotalBalance,

        allIncomes, //usado en Incomes
        setAllIncomes,
        handleAddIncome, //usado en myAccount
        incomeBalance, // usado en myAccount
        setIncomeBalance,

        allSpent, //usado en Spending
        setAllSpent,
        spentBalance, //usado en myAccount
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