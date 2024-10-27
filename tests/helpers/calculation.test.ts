import { describe, expect, it } from 'vitest';
import {
    calculateInterest,
    calculateTotalLoan,
    calculateCapitalGains,
    calculateCapGainsTax
} from '../../src/helpers/calculation';

//Calculate Interest - Positive
describe('calculateInterest', () => {

    it('should correctly calculate $10000 interest', () => {
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

    it('should correctly calculate -$10000 interest', () => {
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

    it('should correctly calculate -$10000 interest', () => {
        const totalLoan = 100000;
        const totalPrincipal = 110000;

        const result = calculateInterest(
            totalPrincipal, totalLoan
        );
        expect(result).toBe(-10000);
    })
})


//Calculate Capital Gains Tax - Bracket 1
describe ('calculateCapitalGainsTax', () => {

    it('should have no tax for bracket $18200 or less', () => {
        const result = calculateCapGainsTax(
            22500, 50000, 60000, 500, true
        );
        expect(result).toBe(0);
    })
});
