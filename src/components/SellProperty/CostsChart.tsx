import React, { useRef, useEffect } from 'react';
import Highcharts from 'highcharts';
import ICostChart from './ICostChart';

const CostChart: React.FC<ICostChart> = ({
    conveyancing = 0,
    stampDuty = 0,
    commissionFlat = 0,
    advertising = 0,
    other = 0,
    capGainsTax = 0,
    netProfit = 0,
    grossProfit = 0,
    calculated
}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            // Initialize the chart
            Highcharts.chart(chartRef.current, {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Financial Overview'
                },
                xAxis: {
                    categories: ['Financial Summary']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Amount ($)'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            formatter: function() {
                                // Ensure value is a number before formatting
                                return `$${Highcharts.numberFormat(this.y || 0, 0)}`;
                            }
                        }
                    }
                },
                series: [{
                    name: 'Gross Profit',
                    type: 'bar',
                    data: [grossProfit],
                    stack: 'gross'
                }, {
                    name: 'Net Profit',
                    type: 'bar',
                    data: [netProfit],
                    stack: 'other'
                }, {
                    name: 'Capital Gains Tax',
                    type: 'bar',
                    data: [capGainsTax],
                    stack: 'other'
                }, {
                    name: 'Fees',
                    type: 'bar',
                    data: [conveyancing + stampDuty + commissionFlat + advertising + other],
                    stack: 'other'
                }]
            });
        }
    }, [calculated]);

    return <div 
        style={{height: 260}}
        ref={chartRef} 
    />;
};

export default CostChart;
