import React from "react";
import down from "../assets/down.png";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import rate from "../assets/Rating.png";

function FirstSec() {
  return (
    <div>
      <div className="mt-[80px] mb-[80px] ml-[112px] mr-[112px]">
        <div className="flex flex-wrap justify-center items-center justify-between">
          <h1 className="text-[28px] font-medium">Featured Products</h1>
          <h2 className="text-[18px] font-medium">New Sales</h2>
        </div>

        <div className="flex justify-center items-center justify-between mt-[52px]">
          <div>
            <img className="w-[360px] h-[383px]" src={frame1} alt="" />
            <img className="pt-[16px]" src={rate} alt="" />
            <h2 className="text-[18px] pt-[4]">Visionary Elegance Eyewear</h2>
            <p className="text-[16] pt-[4] font-bold">$149.99</p>
          </div>
          <div>
            <img className="w-[360px] h-[383px]" src={frame2} alt="" />
            <img className="pt-[16px]" src={rate} alt="" />
            <h2 className="text-[18px] pt-[4]">Women Party sunglasses</h2>
            <p className="text-[16] pt-[4] font-bold">$149.99</p>
          </div>
          <div>
            <img className="w-[360px] h-[383px]" src={frame3} alt="" />
            <img className="pt-[16px]" src={rate} alt="" />
            <h2 className="text-[18px] pt-[4]">Driver Protection Glasses</h2>
            <p className="text-[16] pt-[4] font-bold">$149.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSec;
