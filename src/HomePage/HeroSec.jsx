
import left from "../assets/icon.png";

import FirstSec from "./FirstSec";
import SecSec from "./SecSec";
import ThirdSec from "./ThirdSec";
import FourthSec from "./FourthSec";
import FifthSec from "./FifthSec";
import Header from "./Header";

import "./HeroSec.css";

function HeroPage() {
  return (
    <>
    <Header/>
      <div className="" id="image">
        <div className="md:pl-[112px]  md:pt-[112px]">
          <div className="md:w-8/12">
            <div className=" text-white text-[40px] pt-[66px] pl-[16px] font-medium md:leading-[130px] md:tracking-tighter lg:text-[100px]">
              <h1>See better, look better, and feel confident.</h1>
            </div>

            <button className="p-[16px] bg-herobtn ml-[16px] flex justify-center items-center gap-[16px] rounded-[99px] mt-[50px]">
              Explore our Products
              <div className="flex justify-center items center rounded-[9999px] bg-right pt-[5px] pr-[8px] pb-[5px] pl-[8px]">
                <img src={left} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <FirstSec />
      <ThirdSec />
      <SecSec />
      <FourthSec />
      <FifthSec/>
    </>
  );
}

export default HeroPage;
