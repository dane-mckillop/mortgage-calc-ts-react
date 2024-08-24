import { useState, useEffect } from 'react';

const MarketDataComponent = () => {
  const [marketData, setMarketData] = useState(null);
  const apiKey = import.meta.env.ALPHA_VANTAGE_API_KEY;;
  const symbol = 'AAPL';
  const method = 'TIME_SERIES_DAILY';
  const month = '2024-05';
  const dataType = 'json';

  useEffect(() => {
    const apiUrl = `https://www.alphavantage.co/query?function=${method}&symbol=${symbol}&month=${month}&apikey=${apiKey}&datatype=${dataType}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMarketData(data);
      })
      .catch(error => {
        console.error('Error fetching market data:', error);
      });
  }, []);

  return (
    <div>
      {marketData ? (
        <div>
          <h2>Market Data for {symbol}</h2>
          {/* Render the market data */}
        </div>
      ) : (
        <p>Loading market data...</p>
      )}
    </div>
  );
};

export default MarketDataComponent;