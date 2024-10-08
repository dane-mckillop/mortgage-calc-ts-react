import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { isValidInput } from '../helpers/validation';
import * as c from '../helpers/calculation';
import DynamicFees from './DynamicFees';
import Fees from '../interfaces/Fees.ts';

interface RepaymentCalculatorProps {
  totalPrincipal: number;
  changeTotalPrincipal: (value: number) => void;
  monthlyPayment: number;
  changeMonthlyPayment: (value: number) => void;
  totalLoan: number;           //Principal + Interest
  changeTotalLoan: (value: number) => void;
  totalInterest: number;
  changeTotalInterest: (value: number) => void;
  downPayment: number;
  changeDownPayment: (value: number) => void;
  feesTotal: number;
  changeFeesTotal: (value: number) => void;
  feesBool: boolean;
  changeFeesBool: (value: boolean) => void;
}

const RepaymentCalculator: React.FC<RepaymentCalculatorProps> = (props) => {
  const [loanAmount, setLoanAmount] = useState<number>(0);              //Principal + DownPayment
  const [loanAmountString, setLoanAmountString] = useState<string>('');
  const [interestRate, setInterestRate] = useState<number>(0);
  const [interestRateString, setInterestRateString] = useState<string>('');
  const [years, setYears] = useState<number>(0);
  const [yearsString, setYearsString] = useState<string>('');
  const [downPayment, setDownPayment] = useState<number>(props.downPayment);
  const [downPaymentString, setDownPaymentString] = useState<string>('');
  const [fields, setFields] = useState<Fees[]>([{ id: 0, fee: '' }]);
  const [nextId, setNextId] = useState<number>(1);
  const totalPrincipal = props.totalPrincipal;
  const changeTotalPrincipal = props.changeTotalPrincipal;
  const monthlyPayment = props.monthlyPayment;
  const changeMonthlyPayment = props.changeMonthlyPayment;
  const changeTotalLoan = props.changeTotalLoan;
  const totalInterest = props.totalInterest;
  const changeTotalInterest = props.changeTotalInterest;
  const feesTotal = props.feesTotal;
  const changeFeesTotal = props.changeFeesTotal;
  const feesBool = props.feesBool;
  const changeFeesBool = props.changeFeesBool;
  const changeDownPayment = props.changeDownPayment;
  const changeFields = (values:Fees[]) => { setFields(values) }
  const changeNextId = (value:number) => { setNextId(value) }

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

  //Handles conversion from user input string, to a numeric for calculation.
  const handleNumericInput = (
    input: string,
    setNumber: (value: number) => void,
    setString: (value: string) => void
  ) => {
    const temp = parseFloat(input);
    const lastChar = input.charAt(input.length - 1);

    // Empty field
    if (isNaN(temp)) {
      if (input === '-') {
        /* NEGATIVE INPUT DISALLOWED
        setNumber(0);
        setString(input);
        */
      } else {
        setNumber(0);
        setString('');
      }
    }
    // Valid input
    else {
      // Trailing zero or decimal values
      if (lastChar === '.' || lastChar === '0') {
        setNumber(temp);
        setString(input);
      }
      // Parse numbers as normal
      else {
        setNumber(temp);
        setString(String(temp));
      }
    }
  };

  return (
    <Box sx={{ py: 0, px: 4, maxWidth: '1000px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Loan Amount"
            type="string"
            value={loanAmountString}
            onChange={(e) => {
              handleNumericInput(e.target.value, setLoanAmount, setLoanAmountString)
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Down Payment"
            type="number"
            value={downPaymentString}
            onChange={(e) =>
              handleNumericInput(e.target.value, setDownPayment, setDownPaymentString)
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            value={interestRateString}
            onChange={(e) =>
              handleNumericInput(e.target.value, setInterestRate, setInterestRateString)
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Period (years)"
            type="number"
            value={yearsString}
            onChange={(e) =>
              handleNumericInput(e.target.value, setYears, setYearsString)
            }
            fullWidth
          />
        </Grid>
        {feesBool && (
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', m: '12px', width: '100%' }}>
            <DynamicFees 
              fields={fields} changeFields={changeFields}
              nextId={nextId} changeNextId={changeNextId}
              feesTotal={feesTotal} changeFeesTotal={changeFeesTotal} 
            />
          </Grid>
        )}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', m: '12px', width: '100%' }}>
          <Button variant="contained" color="primary" onClick={handleCalculateRepayment}>
            Calculate
          </Button>
          <FormControlLabel
            control={<Checkbox onChange={(e) => changeFeesBool(e.target.checked)} />}
            label="Fees" style={{ marginLeft: '4px' }}
          />
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', p: 1, width: '90%' }}>
          <Typography variant="body1">
            Monthly Repayments: ${monthlyPayment.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
          <Typography variant="body1">
            Total Principal: ${totalPrincipal.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
          <Typography variant="body1">
            Total Interest: ${totalInterest.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default RepaymentCalculator;