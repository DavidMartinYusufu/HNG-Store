import React from "react";
import Union from "../assets/Union.png";

function FourthSec() {
  return (
    <div className="bg-right m-auto rounded-[16px] self-stretch mt-[80px] mr-[112px] mb-[80px] ml-[112px]">
      <div className="flex justify-center items-center justify-between pt-[40px] pr-[112px] pb-[40px] pl-[112px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[24px] max-w-[354px] tracking-[1px]">
            <h1 className="text-subscribe text-[40px] font-medium leading-[50px]">
              Stay updated with Visionary Vibes!
            </h1>
            <h2 className=" text-subscribe">
              Enter your email to get updates about new arrivals and exclusive
              offers.
            </h2>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="bg-black rounded-[8px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] w-full">
              <input
                className="bg-black w-full outline-[0] text-grey"
                type="email"
                placeholder="Enter your email here|"
              />  
            </div>
            <div className="bg-greyBox text-white w-[354] rounded-[8px] text-center">
              <button className="text-subscribe font-medium pt-[16px] pr-[32px] pb-[16px] pl-[32px] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="bg-right">
          <img src={Union} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FourthSec;
