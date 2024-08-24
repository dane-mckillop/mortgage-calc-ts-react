import React, { useEffect, useRef } from 'react';
import Highcharts, { Options } from 'highcharts';

interface LoanChartProps {
  totalPrincipal: number;
  totalInterest: number;
  totalLoan: number;
}

const LoanChart: React.FC<LoanChartProps> = ({ totalPrincipal, totalInterest, totalLoan }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalAmount = totalPrincipal + totalInterest;
    const principalPercentage = totalPrincipal > 0 ? (totalPrincipal / totalAmount) * 100 : 0;
    const interestPercentage = totalInterest > 0 ? (totalInterest / totalAmount) * 100 : 0;

    const options: Options = {
      colors: ['#01BAF2', '#71BF45', '#FAA74B', '#B37CD2'],
      chart: {
        type: 'pie',
      },
      title: {
        text: `Mortgage: $${totalLoan.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      },
      tooltip: {
        formatter: function () {
          return `${this.point?.name}: ${this.y?.toFixed(2)}%`;
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y:.2f} %',
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie', 
          name: 'Percentage',
          colorByPoint: true,
          innerSize: '60%',
          data: [
            { name: 'Principal', y: principalPercentage },
            { name: 'Interest', y: interestPercentage },
          ],
        } as Highcharts.SeriesPieOptions,
      ],
    };

    if (chartRef.current) {
      const chart = Highcharts.chart(chartRef.current, options);

      return () => {
        chart.destroy();
      };
    }
  }, [totalPrincipal, totalInterest, totalLoan]);

  return <div ref={chartRef} />;
};

export default LoanChart;
