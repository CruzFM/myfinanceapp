import { Card } from "../Card/Card";
import { useContext } from "react";
import BalanceContext from "../../context/BalanceContext";

export const Spent = () => {
  const { allSpent, setAllSpent, setSpentBalance, setTotalBalance } =
    useContext(BalanceContext);

  return (
    <div className="sections">
      <div className="sections--container">
        <h1> Your spendings: </h1>
        <div className="card-wrap">
          {allSpent.map((spending) => {
            return (
              <Card
                data={spending}
                array={allSpent}
                setState={setAllSpent}
                setItemBalance={setSpentBalance}
                setTotalBalance={setTotalBalance}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
