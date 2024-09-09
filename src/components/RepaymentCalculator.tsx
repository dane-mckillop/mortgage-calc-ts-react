import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { isValidInput } from '../helpers/validation';
import * as c from '../helpers/calculation';

interface RepaymentCalculatorProps {
  totalPrincipal: number;
  changeTotalPrincipal: (value: number) => void;
  monthlyPayment: number;
  changeMonthlyPayment: (value:number) => void;
  totalLoan: number;           //Principal + Interest
  changeTotalLoan: (value: number) => void;
  totalInterest: number;
  changeTotalInterest: (value: number) => void;
  downPayment: number;
  changeDownPayment: (value: number) => void;
}

const RepaymentCalculator:React.FC<RepaymentCalculatorProps> = (props) => {
  const [loanAmount, setLoanAmount] = useState<number>(0);         //Principal + DownPayment
  const [interestRate, setInterestRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(props.downPayment);
  const totalPrincipal = props.totalPrincipal;
  const changeTotalPrincipal = props.changeTotalPrincipal;
  const monthlyPayment = props.monthlyPayment;
  const changeMonthlyPayment = props.changeMonthlyPayment;
  const totalLoan = props.totalLoan;                        //Principal + Interest
  const changeTotalLoan = props.changeTotalLoan;
  const totalInterest = props.totalInterest;
  const changeTotalInterest = props.changeTotalInterest;
  const changeDownPayment = props.changeDownPayment;

  const handleCalculateRepayment = () => {
    if (isValidInput(loanAmount, interestRate, years, downPayment)) {
      
      const localTotalPrincipal = c.calculatePrincipal(loanAmount, downPayment);
      const localMonthlyPayment = c.calculateMonthlyPayment(localTotalPrincipal, years, interestRate);
      const localTotalLoan = c.calculateTotalLoan(years, localMonthlyPayment);
      const localTotalInterest = c.calculateInterest(localTotalPrincipal, localTotalLoan);

      changeTotalPrincipal(localTotalPrincipal);
      changeMonthlyPayment(localMonthlyPayment);
      changeTotalLoan(localTotalLoan);
      changeTotalInterest(localTotalInterest);
      changeDownPayment(downPayment);
    } else {
      changeTotalPrincipal(0)
      changeMonthlyPayment(0);
      changeTotalLoan(0);;
      changeTotalInterest(0);
      changeDownPayment(0);
    }
  };

  return (
    <Box sx={{ py: 0, px: 4, maxWidth: '1000px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Loan Amount"
            type="number"
            inputProps={{ min: 0}}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Down Payment"
            type="number"
            inputProps={{ min: 0}}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            inputProps={{ min: 0, max: 100}}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Period (years)"
            type="number"
            inputProps={{ min: 0}}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', m: '12px', width: '100%'}}>
          <Button variant="contained" color="primary" onClick={handleCalculateRepayment}>
            Calculate
          </Button>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', p: 1, width: '90%'}}>
          <Typography variant="body1">
            Monthly Repayments: ${monthlyPayment.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          <Typography variant="body1">
            Total Principal: ${totalPrincipal.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </Typography>
          <Typography variant="body1">
            Total Interest: ${totalInterest.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default RepaymentCalculator;