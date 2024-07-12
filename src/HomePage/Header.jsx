import React from "react";
import cart from "../assets/shopping-cart-02.png";
import ticket from "../assets/ticket-percent.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="md:shadow-[0_35px_2px_-35px_rgba(0,0,0,0.3)]">
      <div className="bg-myColor flex justify-center items-center pt-[8px] pb-[8px] gap-[10px]">
        <div>
          <img className="h-[16px] w-[16px] mb-[2px]" src={ticket} alt="" />
        </div>
        <p className="m-0 p-0 text-[14px] pr-[22px] font-medium">
          50%+ off — Limited time!
        </p>
        <img className="h-[16px] w-[16px] mb-[2px]" src={close} alt="" />
      </div>

      <div className="flex justify-center items-center justify-between m-auto pt-[24px] pb-[24px] pl-[16px] pr-[16px] md:pl-[112px] md:pr-[112px]">
        <Link to="/">
          <div className="w-[48px] h-[22px] flex justify-center items-center gap-[12px] rounded-[10px]">
            <div className="flex flex-col gap-[4px] inline md:hidden pl-[20px]">
              <div className="w-[22px] h-[2px] bg-black"></div>
              <div className="w-[22px] h-[2px] bg-black"></div>
              <div className="w-[22px] h-[2px] bg-black"></div>
            </div>
            <img src={logo} alt="" />
          </div>
        </Link>

        <div
          id="searchInput"
          className="hidden md:flex gap-[4px] items-center p-[8px] rounded-[99px] outline-headerInput border-[1px] w-full  max-w-[500px]"
        >
          <input
            className="  text-[16px] h-[20px] outline-0 w-full max-w-[500px] pl-[8px]"
            type="text"
            placeholder="Hinted search text|"
          />
          <button className="pr-[10px]">
            <img src={search} alt="" />
          </button>
        </div>

        <div>
          <div className="inline md:hidden">
            <Link to="/carts2">
              <div className="flex">
                <button className="pr-[10px] inline md:hidden">
                  <img src={search} alt="" />
                </button>
                <img src={cart} alt="" />
              </div>
            </Link>
          </div>
          <div className="hidden md:inline">
            <Link to="/checkout">
              <div className="flex">
                <button className="pr-[10px] inline md:hidden">
                  <img src={search} alt="" />
                </button>
                <img src={cart} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
