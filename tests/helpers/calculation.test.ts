import { describe, expect, it } from 'vitest';
import {
    calculateInterest,
    calculateTotalLoan,
    calculatePrincipal,
    calculateMonthlyPayment,
    calculateCapitalGains,
    calculateCapGainsTax
} from '../../src/helpers/calculation';

//Calculate Interest - Positive
describe('calculateInterest', () => {

    it('should calculate $10000 interest', () => {
        const totalLoan = 110000;
        const totalPrincipal = 100000;

        const result = calculateInterest(
            totalPrincipal, totalLoan
        );
        expect(result).toBe(10000);
    })
})

//Calculate Interest - Negative
describe('calculateInterest', () => {

    it('should calculate -$10000 interest', () => {
        const totalLoan = 100000;
        const totalPrincipal = 110000;

        const result = calculateInterest(
            totalPrincipal, totalLoan
        );
        expect(result).toBe(-10000);
    })
})

//Calculate Total Loan - Positive
describe('calculateTotalLoan', () => {

    it('should calculate the $360000 total loan', () => {
        const years = 30;
        const monthlyPayment = 1000;

        const result = calculateTotalLoan(
            years, monthlyPayment
        );
        expect(result).toBe(360000);
    })
})

//Calculate Total Loan - Negative
describe('calculateTotalLoan', () => {

    it('should calculate the -$360000 total loan', () => {
        const years = 30;
        const monthlyPayment = -1000;

        const result = calculateTotalLoan(
            years, monthlyPayment
        );
        expect(result).toBe(-360000);
    })
})

//Calculate Total Loan - Zero Years
describe('calculateTotalLoan', () => {

    it('should show $0 total loan for zero years', () => {
        const years = 0;
        const monthlyPayment = 1000;

        const result = calculateTotalLoan(
            years, monthlyPayment
        );
        expect(result).toBe(0);
    })
})

//Calculate Total Loan - Zero Repayment
describe('calculateTotalLoan', () => {

    it('should show $0 total loan for $0 monthly payments', () => {
        const years = 30;
        const monthlyPayment = 0;

        const result = calculateTotalLoan(
            years, monthlyPayment
        );
        expect(result).toBe(0);
    })
})

//Calculate Principal - Positive
describe('calculatePrincipal', () => {
    
    it('should calculate the principal as $90000', () => {
        const loanAmount = 100000;
        const downPayment = 10000;

        const result = calculatePrincipal(
            loanAmount, downPayment
        );
        expect(result).toBe(90000);
    })
})

//Calculate Principal - Negative
describe('calculatePrincipal', () => {
    
    it('should validate principal to $0 instead of negative.', () => {
        const loanAmount = 10000;
        const downPayment = 100000;

        const result = calculatePrincipal(
            loanAmount, downPayment
        );
        expect(result).toBe(0);
    })
})

//Calculate Monthly Payment - Positive
describe('calculateMonthlyPayment', () => {

    it('should calculate monthly payment to ', () => {
        const principal = 100000;
        const years = 30;
        const interestRate = 6;

        const result = calculateMonthlyPayment(
            principal, years, interestRate
        );
        expect(result).toBeCloseTo(599.55052515275239459146124368448, 10);
    })

})

//Calculate Monthly Payment - Negative Principal
describe ('calculateMonthlyPayment', () => {
    
    it('should calculate monthly payment to ~$599.55', () => {
        const principal = -100000;
        const years = 30;
        const interestRate = 6;

        const result = calculateMonthlyPayment(
            principal, years, interestRate
        );
        expect(result).toBeCloseTo(-599.55052515275239459146124368448, 10);
    })
})
//Consider validation error for negative years or negative interest rate.

//Calculate Capital Gains - Positive
describe ('calcualteCapitalGains', () => {

    it('should calculate capital gains to be 50000', () => {
        const salePrice = 100000;
        const basePrice = 50000;

        const result = calculateCapitalGains(
            salePrice, basePrice
        );
        expect(result).toBe(50000);
    })
})

//Calculate Capital Gains - Negative
describe ('calcualteCapitalGains', () => {

    it('should calculate capital gains to be 50000', () => {
        const salePrice = 50000;
        const basePrice = 100000;

        const result = calculateCapitalGains(
            salePrice, basePrice
        );
        expect(result).toBe(-50000);
    })
})

//Calculate Capital Gains Tax - Bracket 1, upper bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have no CG-tax for $18200 income. Held more than 12 months.', () => {
        const taxableIncome = 16200;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;

        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(0);
    })
});

//Calculate Capital Gains Tax - Less than 12 months held, $4000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have CG-tax greater than zero for $18200 income, held less than 12 months.', () => {
        const taxableIncome = 16200;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = false;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBeGreaterThan(0);
    })
});

//Calculate Capital Gains Tax - Bracket 1, lower bound loss, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have no CG-tax for bracket $18200 or less. Zero income.', () => {
        const taxableIncome = 0;
        const propertyBaseValue = 50000;
        const propertySaleValue = 50000;
        const propertyExpenses = 0;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(0);
    })
});

//Calculate Capital Gains Tax - Bracket 2, lower bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $320 CG-tax for income $18201.', () => {
        const taxableIncome = 16201;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(320);
    })
});

//Calculate Capital Gains Tax - Bracket 2, upper bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $320 CG-tax for income $45000.', () => {
        const taxableIncome = 43000;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(320);
    })
});

//Calculate Capital Gains Tax - Bracket 3, lower bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $600 CG-tax for income $45001.', () => {
        const taxableIncome = 43001;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(600);
    })
});

//Calculate Capital Gains Tax - Bracket 3, upper bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $600 CG-tax for income $135000.', () => {
        const taxableIncome = 133000;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(600);
    })
});

//Calculate Capital Gains Tax - Bracket 4, lower bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $740 CG-tax for income $135001.', () => {
        const taxableIncome = 133001;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(740);
    })
});

//Calculate Capital Gains Tax - Bracket 4, upper bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $740 CG-tax for income $190000.', () => {
        const taxableIncome = 188000;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(740);
    })
});

//Calculate Capital Gains Tax - Bracket 4, lower bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $900 CG-tax for income $190001.', () => {
        const taxableIncome = 188001;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(900);
    })
});

//Calculate Capital Gains Tax - Bracket 4, big number bound, $2000 CapGains
describe('calculateCapitalGainsTax', () => {

    it('should have $900 CG-tax for income $~1.7977e+308.', () => {
        const taxableIncome = Number.MAX_VALUE;
        const propertyBaseValue = 55000;
        const propertySaleValue = 60000;
        const propertyExpenses = 1000;
        const twelveMonthsHeld = true;
        
        const result = calculateCapGainsTax(
            taxableIncome, 
            propertyBaseValue, 
            propertySaleValue, 
            propertyExpenses, 
            twelveMonthsHeld
        );
        expect(result).toBe(900);
    })
});