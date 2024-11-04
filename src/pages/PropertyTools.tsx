import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import BuyProperty from '../components/BuyProperty/BuyProperty';
import SellProperty from '../components/SellProperty/SellProperty';

const BuyCalculators: React.FC = () => {
    const [tab, setTab] = useState<number>(1);
    const changeTab = (event: React.SyntheticEvent, value: number) => {
        setTab(value);
    };

    return (
        <div>
            <Tabs value={tab} onChange={changeTab} aria-label="tab example">
                <Tab label="Mortgage Repayments" value={1} />
                <Tab label="Sale Capital Gains" value={2} />
            </Tabs>
            {tab === 1 &&
                <BuyProperty />}
            {tab === 2 && 
                <SellProperty />}
        </div>
    );
};

export default BuyCalculators;