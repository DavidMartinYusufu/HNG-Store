import React from "react";
import van from "../assets/van.png";
import money from "../assets/money.png";
import lock from "../assets/lock.png";
import phone from "../assets/phone.png";

function SecSec() {
  return (
    <div>
      <div className="w-11/12 m-auto border-[1px] border-grey">
        <div className="text-[44px] text-firstGreen font-bold max-w-[600px]">
          <h2>We provide the best customer experiences</h2>
        </div>
        <div className="flex gap-[32px] flex-wrap justify-between">
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-[264px]">
            <img src={van} alt="" />
            <h2 className="font-bold">Free Shipping</h2>
            <p>Order above $100</p>
          </div>
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-[264px]">
            <img src={money} alt="" />
            <h2 className="font-bold">Money-back</h2>
            <p>30 days guarantee</p>
          </div>
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-[264px]">
            <img src={lock} alt="" />
            <h2 className="font-bold">Secure Payments</h2>
            <p>Secured by paystack</p>
          </div>
          <div className="bg-greyBox flex flex-col justify-center items-start pt-[32px] pb-[32px] pl-[16px] rounded-[16px] w-[264px]">
            <img src={phone} alt="" />
            <h2 className="font-bold">24/7 Support</h2>
            <p>Phone and Email support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecSec;
