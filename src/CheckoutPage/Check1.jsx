import React from "react";
import Header from "../HomePage/Header";

function Check1() {
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center">
        <div className="text-categorybtn font-bold text-[16px] mt-[8px]">
          {" "}
          <h1>CHECKOUT</h1>
        </div>
        <div className="flex justify-center items-center mt-[24px]">
          <div className="bg-checkgreen font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-white">
            <h1 className="text-white">1</h1>
          </div>

          <div className="h-[5px] w-[70px] bg-herobtn"></div>

          <div className="bg-herobtn font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-herobtn">
            <h1 className="text-herobtn2">2</h1>
          </div>

          <div className="h-[5px] w-[70px] bg-herobtn"></div>

          <div className="bg-herobtn font-bold text-[16px] p-[8] w-[32px] h-[32px] rounded-[40px] flex justify-center items-center text-center text-herobtn">
            <h1 className="text-herobtn2">3</h1>
          </div>
        </div>

        <div className="flex text-[14px] gap-[40px] text-herobtn2 mt-[8px]">
          <div className="text-categorybtn">
            <p>Information</p>
          </div>

          <div>
            <p>Payment</p>
          </div>

          <div>
            <p>Confirmation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check1;
