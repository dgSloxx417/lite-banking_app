import React from 'react'

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
          {/* DoughnutChart */}

          <div className='flex flex-col gap-6'></div>
      </div>
    </section>
  )
}

export default TotalBalanceBox