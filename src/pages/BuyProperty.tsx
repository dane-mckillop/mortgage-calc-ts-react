import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import RepaymentCalculator from '../components/RepaymentCalculator';
import LoanChart from '../components/LoanChart';

const BuyProperty: React.FC = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPrincipal, setTotalPrincipal] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalLoan, setTotalLoan] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(0);

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
        />
        <LoanChart
          totalPrincipal={totalPrincipal}
          totalInterest={totalInterest}
          totalLoan={totalLoan}
        />
      </Stack>
    </div>
  );
};

export default BuyProperty;
