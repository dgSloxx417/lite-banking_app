import React from "react";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}

        <div className="flex flex-col gap-6"></div>
        <h2 className="header-2">Bank Accounts: {totalBanks} </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-amount flex-center gap-2">

          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
