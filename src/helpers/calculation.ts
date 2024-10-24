//////////////////
// Buy Property //
//////////////////

// Calculates the total interest for a mortgage
export function calculateInterest(
    principal: number, 
    totalLoan: number
): number {
    const totalInterest = totalLoan - principal;

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
    const paymentsPerYear = 12;     //Can become variable field.
    const totalRepayments = paymentsPerYear * years;
    const interestDecimal = interestRate / 100;
    const periodicInterest = interestDecimal / paymentsPerYear;

    const portionOfInterest = principal * periodicInterest;
    const discountFactor = 1 - Math.pow(1 + periodicInterest, -totalRepayments);

    return portionOfInterest / discountFactor;
}


///////////////////
// Sell Property //
///////////////////

//Calculates the capital gains (or loss) for a property
//Expenses usually include:
// • Stamp Duty
// • Conveyancing & Building Inspection Fees
// • Loan Origination Fees (mortgage-related expenses)
// • Valuation Fees
// • Agent Commission
// • Advertising costs
// • Renovation costs

//Overloads, not used but for practice
export function calculateCapitalGains(
    salePrice: number, 
    basePrice: number
): number;
export function calculateCapitalGains(
    salePrice: number, 
    basePrice: number,
    expenses: number
): number;
//Implementation
export function calculateCapitalGains(
    salePrice: number,
    basePrice: number,
    expenses?: number
): number {
    if (expenses) {
        return salePrice - (basePrice + expenses);
    } else {
        return salePrice - basePrice;
    }
}

//Calculate capital gains tax. Used in conjunction with calculateCapitalGains
//Result will vary greatly based on marginal tax threshold.
//Marginal Tax - Australian Income threshold rates
//$18,201 or less       0%
//$18,201 – $45,000     19%
//$45,001 – $120,000    32.5%
//$120,001 – $180,000	37%
//$180,001 and over	    45%
export function calculateCapGainsTax (
    taxableIncome: number,      //Simplified. Requires revisement for multiple properties and complex earning statement.
    propertyBaseValue: number,  //How much the property cost  
    propertySaleValue: number,  //How much you sold the property
    propertyExpenses: number,   //Any tax-deductable property expenses
    twelveMonthsHeld: boolean,  //Australian resident holding asset more than 12 months
): number {
    let capGainsTax: number = 0;
    let capGains: number = calculateCapitalGains(propertyBaseValue, propertySaleValue, propertyExpenses);
    //let taxRate

    return capGainsTax;
}