// Calculates the total interest for a mortgage
export function calculateInterest(
    principal: number, 
    totalLoan: number
): number {
    const totalInterest = totalLoan - principal;

    console.log(totalInterest);

    return totalInterest;
}

// Calculates the total amount for a loan
// Requires the monthlyPayments to be known, see calculateMonthlyPayments
export function calculateTotalLoan(
    years: number, 
    monthlyPayment: number
): number {
    const paymentsPerYear = 12;
    const totalRepayments = paymentsPerYear * years;

    console.log(totalRepayments * monthlyPayment);
    return totalRepayments * monthlyPayment;
}

// Calculates the principal for a mortgage
export function calculatePrincipal(
    loanAmount: number, 
    downPayment: number
): number {
    let principal = loanAmount - downPayment;

    // Check if principal is negative
    principal = principal > 0 ? principal : 0;

    return principal;
}

// Calculates the monthly payments for a mortgage
export function calculateMonthlyPayment(
    principal: number, 
    years: number, 
    interestRate: number
): number {
    const paymentsPerYear = 12;
    const totalRepayments = paymentsPerYear * years;
    const interestDecimal = interestRate / 100;
    const periodicInterest = interestDecimal / paymentsPerYear;

    const portionOfInterest = principal * periodicInterest;
    const discountFactor = 1 - Math.pow(1 + periodicInterest, -totalRepayments);

    return portionOfInterest / discountFactor;
}
