import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { handleNumericInput } from '../../helpers/validation';
import { calculateCapGainsTax } from '../../helpers/calculation';

const SellProperty: React.FC = () => {
    const [income, setIncome] = useState<number>(0);
    const [incomeString, setIncomeString] = useState<string>("");
    const [saleAmount, setSaleAmount] = useState<number>(0);
    const [saleAmountString, setSaleAmountString] = useState<string>("");
    const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
    const [purchaseAmountString, setPurchaseAmountString] = useState<string>("");
    const [conveyancing, setConveyancing] = useState<number>(0);
    const [conveyancingString, setConveyancingString] = useState<string>("");
    const [stampDuty, setStampDuty] = useState<number>(0);
    const [stampDutyString, setStampDutyString] = useState<string>("");
    const [commissionFlat, setCommissionFlat] = useState<number>(0);
    const [commissionFlatString, setCommissionFlatString] = useState<string>("");
    const [advertising, setAdvertising] = useState<number>(0);
    const [advertisingString, setAdvertisingString] = useState<string>("");
    const [other, setOther] = useState<number>(0);
    const [otherString, setOtherString] = useState<string>("");
    const [netProfit, setNetProfit] = useState<number>(0);
    const [grossProfit, setGrossProfit] = useState<number>(0);
    const [capGainsTax, setCapGainsTax] = useState<number>(0);
    const [twelveMonthsHeld, setTwelveMonthsHeld] = useState<boolean>(true);

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
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item xs={4}>
                                <TextField
                                    label="Taxable Income"
                                    type="string"
                                    value={incomeString}
                                    onChange={(e) => {
                                        handleNumericInput(e.target.value, setIncome, setIncomeString)
                                    }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
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
                            <Grid item xs={4}>
                                <TextField
                                    label="Purchase Amount"
                                    type="string"
                                    value={purchaseAmountString}
                                    onChange={(e) => {
                                        handleNumericInput(e.target.value, setPurchaseAmount, setPurchaseAmountString)
                                    }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Stamp Duty"
                                    type="string"
                                    value={stampDutyString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setStampDuty, setStampDutyString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Conveyancing"
                                    type="string"
                                    value={conveyancingString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setConveyancing, setConveyancingString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Commission (Flat)"
                                    type="string"
                                    value={commissionFlatString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setCommissionFlat, setCommissionFlatString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Advertising"
                                    type="string"
                                    value={advertisingString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setAdvertising, setAdvertisingString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Other"
                                    type="string"
                                    value={otherString}
                                    onChange={(e) =>
                                        handleNumericInput(e.target.value, setOther, setOtherString)
                                    }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', m: '12px', width: '100%' }}>
                                <Button variant="contained" color="primary" onClick={() => {
                                    let capitalGains = calculateCapGainsTax(
                                        income,
                                        purchaseAmount,
                                        saleAmount,
                                        0, //Placeholder, research tax writeoff expenses
                                        twelveMonthsHeld
                                    );
                                    setCapGainsTax(capitalGains);
                                    setGrossProfit(saleAmount - purchaseAmount);
                                    setNetProfit(
                                        saleAmount -
                                        purchaseAmount -
                                        capitalGains -
                                        stampDuty -
                                        conveyancing -
                                        commissionFlat -
                                        advertising -
                                        other
                                    );
                                }}>
                                    Calculate
                                </Button>
                                <FormControlLabel label="12 Months owned?" sx={{mx: 1}}
                                    control={
                                        <Checkbox
                                            checked={twelveMonthsHeld}
                                            sx={{pr:0.5}}
                                            onChange={(e) => { 
                                                setTwelveMonthsHeld(e.target.checked); 
                                            }}
                                            color="primary"
                                        />
                                    }
                                />
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', p: 1, width: '90%' }}>
                                <Typography variant="h6" color={'primary'} style={{ marginRight: '5px' }}>
                                    Net Profit: ${netProfit.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </Typography>
                                <Typography variant="h6" style={{ marginRight: '5px' }}>
                                    Gross Profit: ${grossProfit.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </Typography>
                                <Typography variant="h6" style={{ marginRight: '5px' }}>
                                    Capital Gains Tax: ${capGainsTax.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </Typography>
                            </Box>
                        </Grid>
                    </Stack>
                </Box>
            </Stack>
        </div >
    );
}

export default SellProperty;