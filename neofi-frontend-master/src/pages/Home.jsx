import { cryptocurrencies } from "../data";
import { useEffect, useState } from "react";
import { CardData } from "../components/CardData";
import {CoinsData} from "../components/CoinsData"

const Home = () => {
  const [openCoinSelectionPopup, setOpenCoinSelectionPopup] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(
    JSON.parse(localStorage.getItem("selectedCoin")) ?? cryptocurrencies[0]
  );
  const [investment, setInvestment] = useState("");
  const [estimation, setEstimation] = useState("");
  const [ltsPrice, setLtsPrice] = useState();

  useEffect(() => {
    setEstimation(investment.length > 0 ? +investment / (ltsPrice * 80) : "");
  }, [investment, ltsPrice]);

  return (
    <main class="flex justify-center items-center grow h-screen w-full bg-black z-0">
      {openCoinSelectionPopup && (
        <CoinsData
          selectedCoin={selectedCoin}
          chooseCoin={setSelectedCoin}
          togglePopup={setOpenCoinSelectionPopup}
        />
      )}
      <CardData
        setOpenCoinSelectionPopup={setOpenCoinSelectionPopup}
        selectedCoin={selectedCoin}
        investment={investment}
        setInvestment={setInvestment}
        estimation={estimation}
        setLtsPrice={setLtsPrice}
      />
    </main>
  );
};

export { Home };
