import React from "react";
import Header from "../HomePage/Header";

function Check3() {
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center">
        <div className="text-categorybtn text-[16px] mt-[8px]">CHECKOUT</div>
        <div className="flex justify-center items-center mt-[24px]">
          <div className="bg-checkgreen font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-white">
            <h1 className="text-white">1</h1>
          </div>

          <div className="h-[5px] w-[70px] bg-checkgreen"></div>

          <div className="bg-checkgreen font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-herobtn">
            <h1 className="text-white">2</h1>
          </div>

          <div className="h-[5px] w-[70px] bg-checkgreen"></div>

          <div className="bg-checkgreen font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-herobtn">
            <h1 className="text-white">3</h1>
          </div>
        </div>

        <div className="flex text-[14px] gap-[40px] text-herobtn2 mt-[8px]">
          <div>
            <p>Information</p>
          </div>

          <div>
            <p>Payment</p>
          </div>

          <div className="text-categorybtn">
            <p>Confirmation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check3;
