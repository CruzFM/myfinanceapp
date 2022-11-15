import "../../App.css";
import { useContext } from "react";
import BalanceContext from "../../context/BalanceContext";

import { Card } from "../Card/Card";

export const Incomes = () => {
  const { allIncomes, setAllIncomes, setIncomeBalance, setTotalBalance } =
    useContext(BalanceContext);

  return (
    <div className="sections">
      <div className="sections--container">
        <h1> Your incomes: </h1>
        <div className="card-wrap">
          {allIncomes.map((income) => {
            return (
              <Card
                data={income}
                array={allIncomes}
                setState={setAllIncomes}
                setItemBalance={setIncomeBalance}
                setTotalBalance={setTotalBalance}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
