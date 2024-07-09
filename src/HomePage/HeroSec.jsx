import cart from "../assets/Frame1000001086.png";
import ticket from "../assets/ticket-percent.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import glaz from "../assets/GLAZ.png";
import left from "../assets/icon.png";

import FirstSec from "./FirstSec";
import SecSec from "./SecSec";
import ThirdSec from "./ThirdSec";
import FourthSec from "./FourthSec";
import FifthSec from "./FifthSec";

import "./HeroSec.css";

function HeroPage() {
  return (
    <>
      <div className="bg-myColor flex justify-center items-center pt-[8px] pb-[8px] gap-[10px]">
        <div className="flex items-center">
          <img className="h-[16px] w-[16px]" src={ticket} alt="" />
        </div>
        <p className="m-0 p-0 text-[14px]">50%+ off — Limited time!</p>
        <img className="h-[16px] w-[16px]" src={close} alt="" />
      </div>

      <div className="flex justify-center items-center justify-between flex-wrap m-auto pt-[24px] pb-[24px] pl-[112px] pr-[112px]">
        <img src={glaz} alt="" />

        <div className=" flex bg-grey  rounded-[100px] gap-[4px] items-center  p-[8px]">
          <input
            className=" text-[16px] h-[20px] bg-grey outline-0"
            type="text"
            placeholder="Hinted search text"
          />
          <button>
            <img src={search} alt="" />
          </button>
        </div>

        <img src={cart} alt="" />
      </div>

      <div className="" id="image">
        <div className="pl-[105px] pt-[100px]">
          <div className=" w-10/12 border-[1px] border-grey">
            <div className="text-white text-[100px] w-8/12 tracking-tighter leading-[130px] font-small">
              <h1>See better, look better, and feel confident.</h1>
            </div>

            <button className="p-[10px] bg-herobtn flex justify-center items-center gap-[10px] rounded-[99px] mt-[50px]">
              Explore our Products
              <div className="flex justify-center items center rounded-[9999px] bg-right pt-[5px] pr-[8px] pb-[5px] pl-[8px]">
                <img src={left} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <FirstSec />
      <SecSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec/>
    </>
  );
}

export default HeroPage;
