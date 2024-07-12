import React from "react";
import Check1 from "./Check1";
import Check2 from "./Check2";
import Check3 from "./Check3";
import Check4 from "./Check4";

import close from "../assets/close.png";
import image1 from "../assets/checkout1.png";
import image2 from "../assets/checkout2.png";
import image3 from "../assets/checkout3.png";
import radio1 from "../assets/Radiobutton.png";
import radio2 from "../assets/Radiobutton2.png";
import FifthSec from "../HomePage/FifthSec";

import Carts from "../CartsPage/Carts";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Check1 />
      <div className=" flex flex-col md:flex-row gap-[32px] mt-[80px] mb-[80px] md:mr-[112px] md:ml-[112px]">
        <div className="flex flex-col w-full md:bg-palewhite rounded-[16px]  pt-[32px] pb-[32px] pr-[16px] pl-[16px]">
          <div className="flex flex-col gap-[24px] text-categorybtn">
            <h1 className="text-[20px] font-medium">Contact Information</h1>
            <div className="flex flex-col md:flex-row gap-[32px]">
              <div className=" w-full">
                <h2 className="text-[14px] font-medium mb-[12px]">
                  First Name
                </h2>
                <div
                  id="one"
                  className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] rounded-[6px] w-full"
                >
                  <input
                    className="md:bg-greyBox text-[16px] w-full"
                    type="text"
                    placeholder="Enter first name"
                  />
                </div>
              </div>
              <div className=" w-full">
                <h2 className="text-[14px] font-medium mb-[12px]">Last Name</h2>
                <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] rounded-[6px]  w-full">
                  <input
                    className="md:bg-greyBox text-[16px]  w-full"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[32px] w-full">
              <div className="w-full">
                <h2 className="text-[14px] font-medium mb-[12px]">
                  Phone Number
                </h2>
                <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                  <input
                    className="md:bg-greyBox text-[16px] w-full"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-[14px] font-medium mb-[12px]">
                  Email Address
                </h2>
                <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                  <input
                    className="md:bg-greyBox text-[16px] w-full"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[24px] w-full text-categorybtn">
              <h1 className="text-[20px] mt-[32px] font-medium">
                Shipping Address
              </h1>
              <div className="flex gap-[32px] w-full">
                <div className="w-full">
                  <h2 className="text-[14px] font-medium mb-[12px]">
                    Street Address *
                  </h2>
                  <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="md:bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[32px] w-full">
                <div className="w-full">
                  <h2 className="text-[14px] font-medium mb-[12px]">
                    Country *
                  </h2>
                  <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="md:bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="text-[14px] font-medium mb-[12px]">
                    Town / City *
                  </h2>
                  <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full  rounded-[6px]">
                    <input
                      className="md:bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[32px] w-full">
                <div className="w-full">
                  <h2 className="text-[14px] font-medium mb-[12px]">State</h2>
                  <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="md:bg-greyBox text-[16px] w-full"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="text-[14px] font-medium mb-[12px]">
                    Zip Code
                  </h2>
                  <div className="border-categorybtn border md:bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] w-full rounded-[6px]">
                    <input
                      className="md:bg-greyBox text-[16px] w-full"
                      Place Order
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
              <Link to="/check3">
              Place Order
              </Link>
            </button>
          </div>
        </div>
        <div className="hidden md:inline">
          <Carts />
        </div>
      </div>

      <FifthSec />
    </div>
  );
}

export default Checkout;
