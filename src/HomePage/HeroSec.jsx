
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
        <div className="pl-[105px] pt-[100px]">
          <div className=" w-10/12">
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
      <ThirdSec />
      <SecSec />
      <FourthSec />
      <FifthSec/>
    </>
  );
}

export default HeroPage;
