import React from "react";
import Union from "../assets/Union.png";


function FourthSec() {
  return (
    <div className="bg-right w-11/12 m-auto rounded-[16px] pt-[40px] pr-[112px] pb-[40px] pl-[112px] self-stretch">
      <div className="flex justify-center items-center justify-between">
        <div>
          <div className="max-w-[350px]">
            <h1 className="text-[40px] font-medium">Stay updated with Visionary Vibes!</h1>
            <h2>Enter your email to get updates about new arrivals and exclusive offers.</h2>
          </div>
          <div>
            <input className="pt-[10px] pr-[32px] pb-[10px] pl-[32px] w-full" type="email" placeholder="Enter your email here|"/>
          </div>
          <div>
            <button className="">Subscribe</button>
          </div>
        </div>
        <div className="bg-#38CB89">
          <img src={Union} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FourthSec;
