
import { Card } from "../Card/Card"
import { useContext } from "react";
import BalanceContext from "../../context/BalanceContext";

export const Savings = ()=>{

    const { allSavings, setAllSavings, setSavingsBalance, setTotalBalance } = useContext(BalanceContext);

    return (
      <div className="sections">
        <div className="sections--container">
          <h1>Your savings:</h1>
          <div className="card-wrap">
            {allSavings.map((saving) => {
              return (
                <Card
                  data={saving}
                  array={allSavings}
                  setState={setAllSavings}
                  setItemBalance={setSavingsBalance}
                  setTotalBalance={setTotalBalance}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}