import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { handleNumericInput } from '../helpers/validation';
import { calculateCapGainsTax } from '../helpers/calculation';

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
    const [netProfit, setNetProfit] = useState<number>(0);
    const [grossProfit, setGrossProfit] = useState<number>(0);
    const [capGainsTax, setCapGainsTax] = useState<number>(0);

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
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', m: '12px', width: '100%' }}>
                                <Button variant="contained" color="primary" onClick={() => {
                                    let capitalGains = calculateCapGainsTax(
                                        income, 
                                        purchaseAmount, 
                                        saleAmount, 
                                        0, //Placeholder, research tax writeoff expenses
                                        true //Placeholder, add checkbox
                                    );
                                    setCapGainsTax(capitalGains);
                                    setGrossProfit(saleAmount - purchaseAmount);
                                    setNetProfit(saleAmount - purchaseAmount - capitalGains - stampDuty - conveyancing - commissionFlat);
                                }}>
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
                            <Typography variant="body1" pb={2}>Advertising</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </div >
    );
}

export default SellProperty;