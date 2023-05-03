import { useState } from "react";
import { cryptocurrencies } from "../data";
import { searchCoin } from "../helpers";

const CoinsData = ({ selectedCoin, togglePopup, chooseCoin }) => {
  const [searchText, setSearchText] = useState("");
  const coins = searchCoin(cryptocurrencies, searchText);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto min-h-screen bg-[#0B0819] bg-opacity-50 backdrop-blur-xs h-screen">
      <main className="h-full w-full flex items-center justify-center items-center px-6 md:px-20">
        <section className="rounded-2xl bg-[#181627] w-3/4 h-2/4 md:w-1/4 md:h-2/3 mx-auto mt-24 p-3">
          <span className="flex justify-end">
            <img
              src="/icons/cross.png"
              className="cursor-pointer"
              onClick={() => togglePopup((prev) => !prev)}
              alt=""
            />
          </span>
          <section className="flex flex-col gap-3 w-4/5 mx-auto h-full">
            <span className="flex gap-3 items-center w-full rounded-2xl border border-[#6E56F8] px-3 py-2">
              <img src="/icons/search.png" alt="" />
              <input
                type="search"
                className="text-sm font-semibold outline-none text-xs w-full bg-[#181627] text-white"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search chains"
              />
            </span>
            <section className="h-4/5 overflow-y-scroll flex flex-col gap-4">
              {coins.map((c) => {
                const isThatSelectedCoin = c.name === selectedCoin.name;
                return (
                  <span
                    key={c.code}
                    className={`cursor-pointer flex gap-3 items-center w-full rounded-md px-3 py-1 ${
                      isThatSelectedCoin &&
                      "rounded-md bg-[#1B192D] justify-between"
                    }`}
                    onClick={() => {
                      chooseCoin(c);
                      togglePopup((prev) => !prev);
                      localStorage.setItem("selectedCoin", JSON.stringify(c));
                    }}
                  >
                    <span className="flex gap-3 items-center">
                      <img src={c.icon} alt={c.code} />
                      <p className="text-white text-sm">{c.name}</p>
                    </span>
                    {isThatSelectedCoin && (
                      <img src="/icons/correct.png" alt="" />
                    )}
                  </span>
                );
              })}
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export { CoinsData };


