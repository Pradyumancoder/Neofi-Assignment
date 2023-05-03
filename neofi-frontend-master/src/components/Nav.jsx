import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <nav className="px-10.5 py-3 flex-none bg-nav flex items-center md:flex-row justify-between relative">
      <img src="/assets/neofi.png" alt="" className="w-28.5 h-10.5" />
      <ul className="hidden md:flex justify-center items-center gap-3 list-none">
        <li className="text-[#627EEA] font-semibold cursor-pointer">Trade</li>
        <li className="text-[#5A5A5A] font-semibold cursor-pointer">Earn</li>
        <li className="text-[#5A5A5A] font-semibold cursor-pointer">Support</li>
        <li className="text-[#5A5A5A] font-semibold cursor-pointer">About</li>
      </ul>
      <ul
        className={`${
          !mobileToggle ? "hidden" : "block"
        } md:hidden absolute right-12 flex flex-col gap-3 top-8 text-xl p-3 w-48 bg-white rounded-xl z-50`}
      >
        <li
          className="text-[#627EEA] font-semibold cursor-pointer"
          onClick={() => setMobileToggle(false)}
        >
          Trade
        </li>
        <li
          className="text-[#5A5A5A] font-semibold cursor-pointer"
          onClick={() => setMobileToggle(false)}
        >
          Earn
        </li>
        <li
          className="text-[#5A5A5A] font-semibold cursor-pointer"
          onClick={() => setMobileToggle(false)}
        >
          Support
        </li>
        <li
          className="text-[#5A5A5A] font-semibold cursor-pointer"
          onClick={() => setMobileToggle(false)}
        >
          About
        </li>
        <li
          className="text-[#5A5A5A] font-semibold cursor-pointer"
          onClick={() => setMobileToggle(false)}
        >
          Connect wallet
        </li>
      </ul>
      <RxHamburgerMenu
        className="md:hidden text-xl text-white font-bold"
        onClick={() => setMobileToggle((prev) => !prev)}
      />
      <section className="hidden md:inline-block flex justify-start mr-28.5">
        <button className="text-[#ffffff] text-base py-3 px-[17px] rounded-3xl bg-gradient-to-r from-[#3387D5] to-[#7A06C9]">
          Connect wallet
        </button>
      </section>
    </nav>
  );
};

export { Nav };
