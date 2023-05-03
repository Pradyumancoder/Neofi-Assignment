import { useState, useEffect } from "react";

const CurrentPrice = ({ symbol, setLatestPrice }) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    ws.onmessage = (event) => {
      const tradeData = JSON.parse(event.data);
      setPrice(Math.round(tradeData.p * 100) / 100);
      setLatestPrice(Math.round(tradeData.p * 100) / 100);
      setLoading(false);
    };

    return () => {
      ws.close();
    };
  }, [symbol, setLatestPrice]);

  return (
    <span className="text-lg text-[#627EEA] font-semibold flex items-center gap-3">
      ₹{" "}
      {loading ? (
        <span className="spinner"></span>
      ) : (
        `${Math.round(price * 80 * 100) / 100}`
      )}
    </span>
  );
};

export { CurrentPrice };
