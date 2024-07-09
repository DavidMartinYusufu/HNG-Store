import React from "react";
import down from "../assets/down.png";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import rate from "../assets/Rating.png";


function FirstSec() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center items-center justify-between w-11/12 m-auto border-[1px] border-grey mt-[100px]">
          <h1 className="text-[28px] font-medium">Featured Products</h1>
          <button className="flex border-[1px] border-featurebtn rounded-[8px] gap-[4px] p-[10px] ">
            Featured Products
            <img src={down} alt="down arrow" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-[16px] flex-wrap justify-between w-11/12 m-auto border-[1px] border-grey mt-[100px]">
          <div>
            <img src={frame1} alt="" />
            <img  className="pt-[12px]" src={rate} alt="" />
            <h2>Sony - WH-CH720N Wireless Noise Canceling</h2>
            <p>$149.99</p>
          </div>
          <div>
            <img src={frame2} alt="" />
            <img className="pt-[12px]" src={rate} alt="" />
            <h2>Sony - WH-CH720N Wireless Noise Canceling</h2>
            <p>$149.99</p>
          </div>
          <div>
            <img src={frame3} alt="" />
            <img className="pt-[12px]" src={rate} alt="" />
            <h2>Sony - WH-CH720N Wireless Noise Canceling</h2>
            <p>$149.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSec;
