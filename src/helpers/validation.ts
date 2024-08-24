
export function isValidInput (loanAmount: number, interestRate: number, years: number): boolean {
    const interestRateValue = interestRate ? interestRate / 100 : 0;

    return !(
        isNaN(loanAmount) ||
        isNaN(interestRateValue) ||
        isNaN(years) ||
        loanAmount <= 0 ||
        interestRateValue < 0 ||
        years <= 0
    );
};