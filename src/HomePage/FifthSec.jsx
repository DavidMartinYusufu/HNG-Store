import React from "react";
import footerimg from "../assets/footerimg.png";
import title from "../assets/Title.png";

import cell from "../assets/Cell.png";
import cell1 from "../assets/Cell1.png";
import cell2 from "../assets/Cell2.png";
import cell3 from "../assets/Cell3.png";
import glaz1 from "../assets/GLAZ1.png";
import linkedin from "../assets/Ln.png";
import twitter from "../assets/Tw.png";
import instagram from "../assets/Ig.png";
import facebook from "../assets/Fb.png";

function FifthSec() {
  return (
    <div className="bg-featurebtn">
      <div className="flex text-palewhite justify-center items-center justify-between pt-[80px] md:pr-[112px] pb-[80px] md:pl-[112px]">
        <div className="flex flex-col pl-[32px] gap-[40px]">
          <div className="flex  flex-col gap-[8px]">
            <img className="h-[40px]" src={title} alt="Title" />
            <p className="text-[16px]">
              New daily deals,{" "}
              <span className="text-footergreen">50%+ off</span>
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[16px]">Offer expires in:</p>
            <div className="flex text-center  text-[12px] gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <img src={cell} alt="time" /> <p>Days</p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <img src={cell1} alt="time" /> <p>Hours</p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <img src={cell2} alt="time" /> <p>Minutes</p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <img src={cell3} alt="time" /> <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className="hidden md:inline h-[240px] max-w-[750px]" src={footerimg} alt="" />
        </div>
      </div>

      <div className="pt-[80px] md:pr-[112px] pb-[40px] md:pl-[112px] flex flex-col gap-[31px] pl-[16px] pr-[16px]">
        <div className="h-[1px] w-full bg-line"></div>
        <div className=" flex flex-col justify-start items-start justify-between md:flex-row ">
          <div className="w-[48px] h-[22px] pt-[1px] pb-[32px]">
            <img src={glaz1} alt="" />
          </div>
          <div className="flex flex-col flex-end gap-[16px]">
            <div className="flex md:justify-end gap-[24px]">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <div>
              <p className="text-categorybtn">
                © 2020 Rayna. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthSec;
