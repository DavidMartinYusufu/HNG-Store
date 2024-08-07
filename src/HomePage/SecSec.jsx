import React from "react";
import van from "../assets/van.png";
import money from "../assets/money.png";
import lock from "../assets/lock.png";
import phone from "../assets/phone.png";

function SecSec() {
  return (
    <div>
      <div className="mt-[80px] mb-[80px] md:ml-[112px] md:mr-[112px]">
        <div className="text-[40px] leading-[45px] pl-[16px] md:text-[54px] md:leading-[65px] text-firstGreen font-bold max-w-[600px]">
          <h2>We provide the best customer experiences</h2>
        </div>
        <div className="grid grid-cols-2 gap-[12px] pl-[16px] pr-[16px] md:flex md:gap-[32px] md:justify-between mt-[32px]">
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-full max-w-[280px]">
            <img src={van} alt="" />
            <h2 className="font-bold pt-[16px] text-subscribe">Free Shipping</h2>
            <p className="text-grey2">Order above $100</p>
          </div>
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-full max-w-[280px]">
            <img src={money} alt="" />
            <h2 className="font-bold pt-[16px] text-subscribe">Money-back</h2>
            <p className="text-grey2">30 days guarantee</p>
          </div>
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-full max-w-[280px]">
            <img src={lock} alt="" />
            <h2 className="font-bold pt-[16px] text-subscribe">Secure Payments</h2>
            <p className="text-grey2">Secured by paystack</p>
          </div>
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-full max-w-[280px]">
            <img src={phone} alt="" />
            <h2 className="font-bold pt-[16px] text-subscribe">24/7 Support</h2>
            <p className="text-grey2">Phone and Email support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecSec;
