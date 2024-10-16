import { Stack, Typography } from '@mui/material';
import RepaymentCalculator from './RepaymentCalculator';
import LoanChart from './LoanChart';
import { useState } from 'react';

const BuyProperty: React.FC = () => {
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const [totalPrincipal, setTotalPrincipal] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);
    const [totalLoan, setTotalLoan] = useState<number>(0);
    const [downPayment, setDownPayment] = useState<number>(0);
    const [totalFees, setTotalFees] = useState<number>(0);
    const [feesBool, setFeesBool] = useState<boolean>(false);
    const [updateChart, setUpdateChart] = useState<boolean>(false);
    const changeMonthlyPayment = (value: number) => {
        setMonthlyPayment(value);
    };
    const changeTotalPrincipal = (value: number) => {
        setTotalPrincipal(value);
    };
    const changeTotalInterest = (value: number) => {
        setTotalInterest(value);
    };
    const changeTotalLoan = (value: number) => {
        setTotalLoan(value);
    };
    const changeDownPayment = (value: number) => {
        setDownPayment(value);
    };
    const changeTotalFees = (value: number) => {
        setTotalFees(value)
    };
    const changeFeesBool = (value: boolean) => {
        setFeesBool(value);
    }
    const changeUpdateChart = (value: boolean) => {
        setUpdateChart(value);
    }

  return (
    <div>
      <Stack
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        <Typography variant="h4" sx={{ py: 3 }}>
          Repayment Calculator
        </Typography>
        <RepaymentCalculator
          monthlyPayment={monthlyPayment}
          changeMonthlyPayment={changeMonthlyPayment}
          totalLoan={totalLoan}
          changeTotalLoan={changeTotalLoan}
          totalPrincipal={totalPrincipal}
          changeTotalPrincipal={changeTotalPrincipal}
          totalInterest={totalInterest}
          changeTotalInterest={changeTotalInterest}
          downPayment={downPayment}
          changeDownPayment={changeDownPayment}
          totalFees={totalFees}
          changeTotalFees={changeTotalFees}
          feesBool={feesBool}
          changeFeesBool={changeFeesBool}
          updateChart={updateChart}
          changeUpdateChart={changeUpdateChart}
        />
        <LoanChart
          totalPrincipal={totalPrincipal}
          totalInterest={totalInterest}
          totalLoan={totalLoan}
          totalFees={totalFees}
          feesBool={feesBool}
          updateChart={updateChart}
        />
      </Stack>
    </div>
  );
};

export default BuyProperty;
