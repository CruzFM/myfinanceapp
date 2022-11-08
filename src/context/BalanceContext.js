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

  //DELETE ITEM --------------(saving, spending or income)

  const deleteItem = (array, item, setState, setItemBalance, setTotalBalance) =>{
    let itemIndex = array.indexOf(item);
    let slicedOne = array.slice(0, itemIndex);
    let slicedTwo = array.slice(itemIndex + 1);
    let newArray = slicedOne.concat(slicedTwo);
    let sumOrRestItem = (object) =>{
      if( item.category === "Recurrent" || item.category === "Extra" ){
        return item.amount * -1;
      } else if(item.category === "Vacation" || item.category === "Goods"){
        return 0;
      } else{
        return item.amount;
      }
    }
    setState(newArray);
    setItemBalance(prevItemBalance => prevItemBalance - item.amount);
    setTotalBalance(prevTotalBalance => prevTotalBalance - sumOrRestItem(item));
  }
  //-----------------------------------------------------

  return (
    <BalanceContext.Provider
      value={{
        totalBalance, //myAccount
        setTotalBalance, // Incomes, Spent, Savings

        allIncomes, //usado en Incomes
        setAllIncomes,
        handleAddIncome, //usado en myAccount
        incomeBalance, // usado en myAccount,
        setIncomeBalance, // Card

        allSpent, //usado en Spending
        setAllSpent,
        spentBalance, //usado en myAccount, Card
        setSpentBalance, // usado en Card
        handleAddToSpent, //usado en myAccount

        allSavings, //usado en Savings
        setAllSavings,
        handleAddtoSavings, //usado en myAccount
        savingsBalance, 
        setSavingsBalance, // savings

        deleteItem, // para usar en Card y MyAcc
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

export default BalanceContext