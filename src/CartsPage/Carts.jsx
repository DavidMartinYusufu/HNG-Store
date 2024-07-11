import React from "react";
import close from "../assets/close.png";

// import Check1 from "./Check1.jsx";
// import Check2 from "./Check2.jsx";
// import Check3 from "./Check3.jsx";

import image1 from "../assets/checkout1.png";
import image2 from "../assets/checkout2.png";
import image3 from "../assets/checkout3.png";
import radio1 from "../assets/Radiobutton.png";
import radio2 from "../assets/Radiobutton2.png";

import FifthSec from "../HomePage/FifthSec";
import Check1 from "../CheckoutPage/Check1.jsx";


function Carts() {
  return (
    <div>
      <div className="w-[450px] ">
        <div
          id="expand"
          className="bg-palewhite pt-[32px] pb-[32px] pr-[16px] pl-[16px] flex flex-col max-w-[400px] justify-end rounded-[16px]"
        >
          <div className="flex justify-center items-center justify-between mb-[5px]">
            <h1 className="font-medium">Cart</h1>
            <div className="flex justify-center items-center">
              <img src={close} alt="" />
              <p className="text-anotherGrey">close</p>
            </div>
          </div>
          <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
          <div className="text-anotherGrey mt-[11px] mb-[11px]">
            3 Products added
          </div>
          <div
            id="line"
            className="bg-categorybtn w-full h-[1px] mb-[24px]"
          ></div>
          <div className="flex justify-center items-center justify-between">
            <div className="flex gap-[16px]">
              <img src={image2} alt="" />
              <div className="flex flex-col justify-between">
                <h2 className="text-line text-[16px] font-medium">
                  Reading Glasses
                </h2>
                <p className="text-[12px] text-line">Frame Colour: Silver</p>
                <p className="text-[12px] text-line">
                  Shipping: <span className="text-free">Free</span>
                </p>
                <div className="flex items-center border-[1px] border-line gap-[12px] text-categorybtn rounded-[8px] mt-[1px] pt-[1px] pb-[1px] pr-[8px] pl-[8px] w-[70px]">
                  {" "}
                  <span className="w-[10px] h-[1px] bg-categorybtn"></span>{" "}
                  <span className="text-[14px] font-medium">2</span>{" "}
                  <span className="text-[18px]">+</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-center justify-center mt-[-35px] text-line">
              <img className="mr-[-35px]" src={close} alt="" />
              <p>N2,000</p>
            </div>
          </div>
          <div
            id="line"
            className="bg-categorybtn w-full h-[1px] mb-[24px] mt-[24px]"
          ></div>
          <div className="flex justify-center items-center gap-[16px]">
            <img src={image1} alt="" />
            <div className="flex flex-col justify-between">
              <h2 className="text-line text-[16px] font-medium tracking-tighter">
                UV400 Protection Glasses for Men Women Outdoor
              </h2>
              <p className="text-[12px] text-line">Frame Colour: Yellow</p>
              <p className="text-[12px] text-line">
                Shipping: <span className="text-free">Free</span>
              </p>
              <div className="flex items-center border-[1px] border-line gap-[12px] text-categorybtn rounded-[8px] mt-[1px] pt-[1px] pb-[1px] pr-[8px] pl-[8px] w-[70px]">
                {" "}
                <span className="w-[10px] h-[1px] bg-categorybtn"></span>{" "}
                <span className="text-[14px] font-medium">2</span>{" "}
                <span className="text-[18px]">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-center justify-center mt-[-35px] text-line">
              <img className="mr-[-35px]" src={close} alt="" />
              <p>N2,000</p>
            </div>
          </div>
          <div
            id="line"
            className="bg-categorybtn w-full h-[1px] mb-[24px] mt-[24px]"
          ></div>
          <div className="flex justify-center items-center gap-[16px]">
            <img src={image3} alt="" />
            <div className="flex flex-col justify-between">
              <h2 className="text-line text-[16px] font-medium">
                Vintage Cat Eye SUn Glassess
              </h2>
              <p className="text-[12px] text-line">Frame Colour: Silver</p>
              <p className="text-[12px] text-line">
                Shipping: <span className="text-free">Free</span>
              </p>
              <div className="flex items-center border-[1px] border-line gap-[12px] text-categorybtn rounded-[8px] mt-[1px] pt-[1px] pb-[1px] pr-[8px] pl-[8px] w-[70px]">
                {" "}
                <span className="w-[10px] h-[1px] bg-categorybtn"></span>{" "}
                <span className="text-[14px] font-medium">2</span>{" "}
                <span className="text-[18px]">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-center justify-center mt-[-35px] text-line">
              <img className="mr-[-35px]" src={close} alt="" />
              <p>N2,000</p>
            </div>
          </div>
          <div
            id="line"
            className="bg-categorybtn w-full h-[1px] mb-[32px] mt-[24px]"
          ></div>

          <div className="border-[1px] border-categorybtn p-[16px] text-line rounded-[4px]">
            <h1>Order Summary</h1>
            <div className="flex justity-center items-center justify-between border-[1px] border-categorybtn rounded-[4px] mt-[16px] pt-[13px] pb-[13px] pr-[16px] pl-[16px]">
              <div className="flex justity-center items-center gap-[12px]">
                <img src={radio1} alt="" />
                <h2>Free shipping</h2>
              </div>
              <p>N0.00</p>
            </div>
            <div className="flex justity-center items-center justify-between border-[1px] border-categorybtn rounded-[4px] mt-[12px] pt-[13px] pb-[13px] pr-[16px] pl-[16px]">
              <div className="flex justity-center items-center gap-[12px]">
                <img src={radio2} alt="" />
                <h2>Express shipping</h2>
              </div>
              <p>+N15.00</p>
            </div>
            <div className="flex justity-center items-center justify-between border-[1px] border-categorybtn rounded-[4px] mt-[12px] mb-[16px] pt-[13px] pb-[13px] pr-[16px] pl-[16px]">
              <div className="flex justity-center items-center gap-[12px]">
                <img src={radio2} alt="" />
                <h2>Pick Up</h2>
              </div>
              <p>%21.00</p>
            </div>
            <div className="flex justify-between mt-[13px] mb-[13px]">
              <h1 className="font-medium">Subtotal</h1>
              <p>N1234.00</p>
            </div>
            <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
            <div className="flex justify-between mt-[13px] mb-[13px]">
              <h1 className="font-medium">Shipping fee</h1>
              <p>N0.00</p>
            </div>
            <div
              id="line"
              className="bg-categorybtn w-full h-[1px]  mt-[16px] mb-[16px]"
            ></div>
            <div className="flex justify-between font-bold text-[18px]">
              <h1>Total</h1>
              <p>NG1345.00</p>
            </div>
            <div
              id="line"
              className="bg-categorybtn w-full h-[1px]  mt-[16px] mb-[16px] inline md:hidden"
            ></div>
            <div className="mt-[32px] inline md:hidden">
              <button className="bg-right text-herobtn pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px] text-[16px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
