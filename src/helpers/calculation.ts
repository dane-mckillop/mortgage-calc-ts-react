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

//Calculate capital gains tax FOR THE PROPERTY ONLY. 
//Used in conjunction with calculateCapitalGains.
//Result will vary greatly based on marginal tax threshold.
//Marginal Tax - Australian Income threshold 2024/2025
//$18,201 or less       Nil
//$18,201 – $45,000     16c for each dollar over $18,200
//$45,001 – $135,000    $4,288 plus 30c for each $1 over $45,000
//$135,001 – $190,000	$31,288 pluc 37c for each $1 over $135,000
//$190,001 and over	    $51,638 plus 45c for each $1 over $190,000
export function calculateCapGainsTax (
    taxableIncome: number,      //Simplified. Complexity for multiple properties and/or complex earning statements.
    propertyBaseValue: number,  //How much the property cost  
    propertySaleValue: number,  //How much you sold the property
    propertyExpenses: number,   //Any tax-deductable property expenses
    twelveMonthsHeld: boolean,  //Australian resident holding asset more than 12 months
): number {
    let capGains: number = calculateCapitalGains(propertyBaseValue, propertySaleValue, propertyExpenses);
    let taxRate: number;

    //If an Australian has held the asset for 12 months or more,
    //They only have to pay tax on half.
    taxableIncome = twelveMonthsHeld ?
        taxableIncome + (capGains * 0.5)
        :
        taxableIncome + capGains;

    //Set the tax bracket.Only concerned with CGT on property, not overall tax.
    switch (true) {
        case taxableIncome <= 18200:
            taxRate = 0;
            break;
        case taxableIncome < 45000:
            taxRate = 0.16;
            break;
        case taxableIncome < 135000:
            taxRate = 0.30;
            break;
        case taxableIncome < 190000:
            taxRate = 0.37;
            break;
        default:
            taxRate = 0.45;
            break;
    }

    //Multiply the taxable capital gains by the marginal income tax rate
    if (taxRate <= 0) {
        return 0;
    } else {
        return capGains * taxRate;
    }
}