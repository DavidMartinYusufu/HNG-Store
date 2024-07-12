import React from "react";
import Header from "../HomePage/Header";

import radio1 from "../assets/Radiobutton.png";
import radio2 from "../assets/Radiobutton2.png";
import Cart from "../CartsPage/Carts";
import FifthSec from "../HomePage/FifthSec";
import close from "../assets/close.png";
import { Link } from "react-router-dom";

function Check3() {
  return (
    <div>
      <div className=" flex justify-end mr-[16px] mt-[16px] mb-[8px] pt-[8px] pb-[8px]">
        <Link to="/Checkout">
        <img src={close} alt="" />

        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-categorybtn text-[16px] font-bold mt-[8px]">
          CHECKOUT
        </div>
        <div className="flex justify-center items-center mt-[24px]">
          <div className="bg-checkgreen font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-white">
            <h1 className="text-white">1</h1>
          </div>

          <div className="h-[5px] w-[70px] bg-checkgreen"></div>

          <div className="bg-checkgreen font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-herobtn">
            <h1 className="text-white">2</h1>
          </div>

          <div className="h-[5px] w-[70px] bg-herobtn"></div>

          <div className="bg-herobtn font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-herobtn">
            <h1 className="text-white">3</h1>
          </div>
        </div>

        <div className="flex text-[14px] gap-[40px] text-herobtn2 mt-[8px]">
          <div>
            <p>Information</p>
          </div>

          <div className="text-categorybtn">
            <p>Payment</p>
          </div>

          <div>
            <p>Confirmation</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mb-[80px] md:ml-[112px] mt-[20px] gap-[32px] md:">
        <div className="md:bg-palewhite h-full max-h-[422px] pl-[16px] pr-[16px] pt-[32px] pb-[320px] md:rounded-[16px]">
          <h2 className="text-[20px] font-medium  pb-[32px]">
            Select Payment Method
          </h2>
          <div>
            <div className="flex items-start justify-start gap-[12px] p-[16px] mb-[16px] bg-greyBox rounded-[16px]">
              <img src={radio1} alt="" />
              <div className="mb-12px text-[14px]">
                <h2 className="font-bold pb-[12px]">Direct Transfer</h2>
                <p>
                  Make your payment directly into our bank account. Please use
                  your ID as the payment reference.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start items-center gap-[12px] text-[14px] mb-[16px] mt-[16px] pr-[16px] pl-[16px] pt-[13px] pb-[13px]">
              {/* <img src={radio2} alt="" /> */}
              <input type="radio" className="w-[20px] h-[20px]" />

              <p className="font-medium">Credit/Debit Card</p>
            </div>
            <div className="flex items-center justify-start items-center gap-[12px] text-[14px] mb-[16px] mt-[16px] pr-[16px] pl-[16px] pt-[13px] pb-[13px]">
              {/* <img src={radio2} alt="" /> */}
              <input type="radio" className="w-[20px] h-[20px]" />
              <p className="font-medium">Cash on Delivery</p>
            </div>
            <div>
              <button className="text-palewhite bg-right w-full pt-[10px] pb-[10px] pr-[26px] pl-[26px] rounded-[8px]">
                Continue to pay
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:inline">
          <Cart />
        </div>
      </div>
      <FifthSec />
    </div>
  );
}

export default Check3;
