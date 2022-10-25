import { createContext, useState } from "react";

const BalanceContext = createContext();

export function BalanceProvider( {children} ){

    //Total Balance
    const [totalBalance, setTotalBalance] = useState();

    //Incomes
    const [allIncomes, setAllIncomes] = useState([]);

    const [incomeBalance, setIncomeBalance] = useState();

    //Spent
    const [allSpent, setAllSpent] = useState([]);

    const [spentBalance, setSpentBalance] = useState();

    //Savings
    const [allSavings, setAllSavings] = useState([]);

    const [savingsBalance, setSavingsBalance] = useState();


    //To do: funnciones para poder crear los gastos.
    //detalle: el usuario deberia poder cargar sus gastos y estos deberian poder visualizarse en sus respectivos componentes como unas listas o cards.
    //ademas: como no es una app con un backend, la realidad es que deberia poder setearlo en local storage. el local lo traeria. (idealmente)
    //quizas: podriamos crear las categorias de gastos como: habituales o fijos, y como variables. mismo caso con los ingresos.
    //los ahorros deberian quedar fuera del balance (quizas)
}