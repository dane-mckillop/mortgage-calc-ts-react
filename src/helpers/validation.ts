
export function isValidInput(
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

//Handles conversion from user input string, to a numeric for calculation.
export function handleNumericInput(
    input: string,
    setNumber: (value: number) => void,
    setString: (value: string) => void
): void {
    const temp = parseFloat(input);
    const lastChar = input.charAt(input.length - 1);

    // Empty field
    if (isNaN(temp)) {
        if (input === '-') {
            /* NEGATIVE INPUT DISALLOWED
            setNumber(0);
            setString(input);
            */
        } else {
            setNumber(0);
            setString('');
        }
    }
    // Valid input
    else {
        // Trailing zero or decimal values
        if (lastChar === '.' || lastChar === '0') {
            setNumber(temp);
            setString(input);
        }
        // Parse numbers as normal
        else {
            setNumber(temp);
            setString(String(temp));
        }
    }
};