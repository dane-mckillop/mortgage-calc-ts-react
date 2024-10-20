
const TrancheCalculator: React.FC = () => {
    /*
    * Objective: Allow user to calculate what their repayment of a loan will be,
    *       if they are varying their repayment amount over time. 
    *       The goal is to optimize repayments to increase sustainability of the loan,
    *       and reduce interest repaid.
    * 
    * Example:
    *       A user should be able to set a repayment for $400000, a down-payment of
    *       $40000, interest rate of 5% and a repayment period of 20-years.
    *       This initial "tranche1" encompasses the entirety of the loan.
    *       The repayment for tranche1 will be auto-calculated.
    *       Repayment will be represented on a linegraph with amortizaton represented
    *       with RHS as inception, and LHS as full-repayment.
    * 
    *       The user then decides after a sub-period, say 10-years, they wish to
    *       increase their repayments. "Add tranche", will show a pop-up,
    *       where the user can increase or decrease their repayments, change the
    *       interest rate.
    * 
    *       The line-graph will update to show how much sooner the loan will be repayed,
    *       with a clear distinction on the line graph to distinguish tranche1 & tranche2.
    *       Two plots will be shown, the consistent repayment plot, and the variable plot.
    *       The user can set additional tranches, in this example tranche3 will heavily
    *       reduce payments. The secondary plot will show how much longer the variable plot
    *       will run over the amortization period, and flag if default will occur.
    *
    */

    return (
        <div>

        </div>
    )
}

export default TrancheCalculator;