import { Box, Button, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { handleNumericInput } from '../helpers/validation';

const SellProperty: React.FC = () => {
    const [saleAmount, setSaleAmount] = useState<number>(0);
    const [saleAmountString, setSaleAmountString] = useState<string>();
    const [outstanding, setOutstanding] = useState<number>(0);
    const [outstandingString, setOutstandingString] = useState<string>();
    const [stampDuty, setStampDuty] = useState<number>(0);
    const [stampDutyString, setStampDutyString] = useState<string>();
    const [commissionFlat, setCommissionFlat] = useState<number>(0);
    const [commissionFlatString, setCommissionFlatString] = useState<string>();
    const [netProfit, setNetProfit] = useState<number>(0);
    const [grossProfit, setGrossProfit] = useState<number>(0);
    const [capGainsTax, setCapGainsTax] = useState<number>(0);
    const changeSaleAmount = (value: number) => {
        setSaleAmount(value);
    }
    const changeOutstanding = (value: number) => {
        setOutstanding(value);
    }
    const changeStampDuty = (value: number) => {
        setStampDuty(value);
    }
    const changeCommissionFlat = (value: number) => {
        setCommissionFlat(value);
    }
    const changeNetProfit = (value: number) => {
        setNetProfit(value);
    }
    const changeGrossProfit = (value: number) => {
        setGrossProfit(value);
    }
    const changeCapGainsTax = (value: number) => {
        setCapGainsTax(value);
    }

    return (
        <div>
            <Stack
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            >
                <Box sx={{ py: 0, px: 4, maxWidth: '1000px' }}>
                    <Typography align="center" variant="h4" sx={{ py: 3 }}>
                        Property Sale
                    </Typography>
                    <Stack direction={'row'}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Sale Amount"
                                    type="string"
                                    value={saleAmountString}
                                    onChange={(e) => {
                                        handleNumericInput(e.target.value, setSaleAmount, setSaleAmountString)
                                    }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Outstanding Loan"
                                    type="string"
                                    value={outstandingString}
                                    onChange={(e) => {
                                        handleNumericInput(e.target.value, setOutstanding, setOutstandingString)
                                    }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Stamp Duty"
                                    type="number"
                                    value={stampDutyString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setStampDuty, setStampDutyString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Commission (Flat)"
                                    type="number"
                                    value={commissionFlatString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setCommissionFlat, setCommissionFlatString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', m: '12px', width: '100%' }}>
                                <Button variant="contained" color="primary" onClick={() => {/* Placeholder*/ }}>
                                    Calculate
                                </Button>
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', p: 1, width: '90%' }}>
                                <Typography variant="body1" style={{ marginRight: '5px' }}>
                                    Net Profit: ${netProfit.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </Typography>
                                <Typography variant="body1" style={{ marginRight: '5px' }}>
                                    Gross Profit: ${grossProfit.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </Typography>
                                <Typography variant="body1" style={{ marginRight: '5px' }}>
                                    Capital Gains Tax: ${capGainsTax.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </Typography>
                            </Box>
                        </Grid>
                        <Stack sx={{ px: 3 }} >
                            <Typography variant="body1" pb={2}>Capital gains: %50!?. Research</Typography>
                            <Typography variant="body1" pb={2}>Stamp duty:</Typography>
                            <Typography variant="body1" pb={2}>Advertising</Typography>
                            <Typography variant="body1" pb={2}>Agent commission %</Typography>
                            <Typography variant="body1" pb={2}>Conveyancing: Buyer & Seller</Typography>
                            <Typography variant="body1" pb={2}>Replace with graphic</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </div >
    );
}

export default SellProperty;