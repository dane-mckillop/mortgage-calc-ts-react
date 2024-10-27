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
    
    it('should calculate monthly payment to ', () => {
        const principal = -100000;
        const years = 30;
        const interestRate = 6;

        const result = calculateMonthlyPayment(
            principal, years, interestRate
        );
        expect(result).toBeCloseTo(-599.55052515275239459146124368448, 10);
    })
})
//Consider validation error for negative years or interest rate.

//Calculate Capital Gains Tax - Bracket 1
describe('calculateCapitalGainsTax', () => {

    it('should have no tax for bracket $18200 or less', () => {
        const result = calculateCapGainsTax(
            22500, 50000, 60000, 500, true
        );
        expect(result).toBe(0);
    })
});
