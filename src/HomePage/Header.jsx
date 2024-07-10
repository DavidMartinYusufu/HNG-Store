import React from "react";
import cart from "../assets/shopping-cart-02.png";
import ticket from "../assets/ticket-percent.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import logo from "../assets/logo.png";


function Header() {
  return (
    <div className="bg-grey">
      <div className="bg-myColor flex justify-center items-center pt-[8px] pb-[8px] gap-[10px]">
        <div>
          <img className="h-[16px] w-[16px] mb-[2px]" src={ticket} alt="" />
        </div>
        <p className="m-0 p-0 text-[14px] pr-[22px] font-medium">50%+ off — Limited time!</p>
        <img className="h-[16px] w-[16px] mb-[2px]" src={close} alt="" />
      </div>

      <div className="flex justify-center items-center justify-between m-auto pt-[24px] pb-[24px] pl-[112px] pr-[112px]">
        <img src={logo} alt="" />

        <div id="searchInput" className=" flex bg-grey gap-[4px] items-center p-[8px] rounded-[99px] outline-headerInput border-[1px] w-full  max-w-[500px]">
          <input
            className=" text-[16px] h-[20px] bg-grey outline-0 w-full max-w-[500px] pl-[8px]"
            type="text"
            placeholder="Hinted search text|"
          />
          <button className="pr-[10px]">
            <img src={search} alt="" />
          </button>
        </div>

        <img src={cart} alt="" />
      </div>
    </div>
  );
}

export default Header;
