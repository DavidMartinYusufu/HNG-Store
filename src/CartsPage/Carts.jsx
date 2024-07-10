import React from "react";
import close from "../assets/close.png";
import image1 from "../assets/checkout1.png";
import image2 from "../assets/checkout2.png";

function Carts() {
  return (
    <div>
      <div className="bg-palewhite pt-[32px] pb-[32px] pr-[16px] pl-[16px] flex flex-col w-full max-w-[900px]">
        <div>
          <h1>Cart</h1>
          <div>
            <img src={close} alt="" />
            <p>close</p>
          </div>
        </div>
        <div id="line" className="bg-categorybtn w-full h-[1px]"></div>
        <div className="flex justify-center items-center gap-[16px] w-full flex-wrap">
          <img src={image2} alt="" />
          <div>
            <h2 className="text-line text-[16px] font-medium">Reading Glasses</h2>
            <p className="text-[14px]">Frame Colour: Silver</p>
            <p className="text-[14px]">Shipping: <span className="text-free">Free</span></p>
            <div>- 2 +</div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <img src={close} alt="" />
            <p>N2,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
