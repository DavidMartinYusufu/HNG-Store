import cart from "../assets/Frame1000001086.png";
import ticket from "../assets/ticket-percent.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import glaz from "../assets/GLAZ.png";
import left from "../assets/icon.png";

import FirstSec from "./FirstSec";
import SecSec from "./SecSec";
import ThirdSec from "./ThirdSec";
import FourthSec from "./FourthSec.";

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

      <div className="bg-image h-[160vh] bg-cover bg-image['image']">
        <div>
          <div className="flex justify-center items-center justify-between w-10/12 flex-wrap m-auto pt-[8px] pt-[8px]">
            <img src={glaz} alt="" />

            <div className=" flex round-[100px] bg-grey p-[8px]  rounded-[100px] gap-[4px]">
              <input
                className="max-w-[400px] h-[28px] pr-[8px] pl-[8px] rounded-[100px] bg-grey outline-0"
                type="text"
                placeholder="Hinted search text"
              />
              <button>
                <img src={search} alt="" />
              </button>
            </div>

            <img src={cart} alt="" />
          </div>

          <div className="w-10/12 m-auto border-[1px] border-grey mt-[120px] ">
            <div className="text-white text-[62px] w-6/12 font-medium">
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
      <ThirdSec/>
      <FourthSec/>
    </>
  );
}

export default HeroPage;
