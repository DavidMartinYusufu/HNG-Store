import React from "react";
import Check1 from "./Check1";
import Check2 from "./Check2";
import Check3 from "./Check3";

import close from "../assets/close.png";
import image1 from "../assets/checkout1.png";
import image2 from "../assets/checkout2.png";
import image3 from "../assets/checkout3.png";


// import Carts from "../CartsPage/Carts";

function Checkout() {
  return (
    <div>
      <Check1 />
      <div className=" flex justify-between gap-[32px] mt-[80px] mb-[80px] mr-[112px] ml-[112px]">
        <div className="w-full bg-palewhite rounded-[16px]  pt-[32px] pb-[32px] pr-[16px] pl-[16px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[20px]">Contact Information</h1>
            <div className="flex gap-[32px]">
              <div className=" w-full">
                <h2>First Name</h2>
                <div
                  id="one"
                  className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] rounded-[6px] w-full"
                >
                  <input
                    className="bg-greyBox text-[16px] w-full"
                    type="text"
                    placeholder="Enter first name"
                  />
                </div>
              </div>
              <div className=" w-full">
                <h2>Last Name</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] rounded-[6px]  w-full">
                  <input
                    className="bg-greyBox text-[16px]  w-full"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[32px] w-full">
              <div className="w-full">
                <h2>Phone Number</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                  <input
                    className="bg-greyBox text-[16px] w-full"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="w-full">
                <h2>Email Address</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                  <input
                    className="bg-greyBox text-[16px] w-full"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[24px] w-full">
              <h1 className="text-[20px]">Shipping Address</h1>
              <div className="flex gap-[32px] w-full">
                <div className="w-full">
                  <h2>Street Address *</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[32px] w-full">
                <div className="w-full">
                  <h2>Country *</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2>Town / City *</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full  rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[32px] w-full">
                <div className="w-full">
                  <h2>State</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2>Zip Code</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[32px]">
            <button className="bg-right text-herobtn pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px] text-[16px]">
              Place Order
            </button>
          </div>
        </div>


        <div className="w-[550px]">
          <div
            id="expand"
            className="bg-palewhite pt-[32px] pb-[32px] pr-[16px] pl-[16px] flex flex-col max-w-[400px] justify-end rounded-[16px]"
          >
            <div className="flex justify-center items-center justify-between">
              <h1 className="font-medium">Cart</h1>
              <div className="flex justify-center items-center">
                <img src={close} alt="" />
                <p className="text-anotherGrey">close</p>
              </div>
            </div>
            <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
            <div className="text-anotherGrey">3 Products added</div>
            <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
            <div className="flex justify-center items-center gap-[16px]">
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
                  <span className="w-[10px] h-[1px] bg-categorybtn"></span> 2{" "}
                  <span className="text-[18px]">+</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center mt-[-35px] text-line">
                <img className="mr-[-35px]" src={close} alt="" />
                <p>N2,000</p>
              </div>
            </div>
            <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
            <div className="flex justify-center items-center gap-[16px]">
              <img src={image1} alt="" />
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
                  <span className="w-[10px] h-[1px] bg-categorybtn"></span> 2{" "}
                  <span className="text-[18px]">+</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center mt-[-35px] text-line">
                <img className="mr-[-35px]" src={close} alt="" />
                <p>N2,000</p>
              </div>
            </div>
            <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
            <div className="flex justify-center items-center gap-[16px]">
              <img src={image3} alt="" />
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
                  <span className="w-[10px] h-[1px] bg-categorybtn"></span> 2{" "}
                  <span className="text-[18px]">+</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center mt-[-35px] text-line">
                <img className="mr-[-35px]" src={close} alt="" />
                <p>N2,000</p>
              </div>
            </div>
            <div id="line" className="bg-categorybtn w-full h-[1px]"></div>

            <div>
              <h1>Order Summary</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
