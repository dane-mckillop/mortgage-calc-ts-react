
export function isValidInput (
    loanAmount: number, 
    interestRate: number, 
    years: number,
    downPayment: number
): boolean {
    const interestRateValue = interestRate ? interestRate / 100 : 0;

    return !(
        loanAmount <= 0 ||
        interestRateValue < 0 ||
        years <= 0 ||
        downPayment < 0
    );
};