import React from "react";
import down from "../assets/down.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";
import ten from "../assets/ten.png";
import eleven from "../assets/eleven.png";
import twelve from "../assets/twelve.png";
import thirteen from "../assets/thirteen.png";
import fourtheen from "../assets/fourtheen.png";
import fiftheen from "../assets/fiftheen.png";
import sixteen from "../assets/sixteen.png";
import seventeen from "../assets/seventeen.png";
import eighteen from "../assets/eighteen.png";
import ninteen from "../assets/ninteen.png";
import rating from "../assets/Rating.png";

import leftarrow from "../assets/Frame13.png";
import rightarrow from "../assets/Frame14.png";

function ThirdSec() {
  return (
    <div>
      <div className="flex flex-col  gap-[60px] mt-[80px] mb-[80px] md:ml-[112px] md:mr-[112px] ">
        <div className="flex justify-center items-center justify-between flex-col text-categorybtn md:flex-row">
          <div className="text-[40px] text-featurebtn">
            <h1>50+ Products</h1>
          </div>
          <div className="flex gap-[8px] justify-center items-center text-[14px] flex-col md:flex-row">
            <h2>Filter Products By:</h2>
            <button className="flex justify-center items-center rounded-[8px] border-[1px] border-categorybtn pt-[8px] pb-[8px] pr-[16px] pl-[16px]">
              All Category
              <img src={down} alt="" />
            </button>
          </div>
        </div>
        <div className=" md:flex md:flex-col gap-[60px]">
          <div className="grid grid-cols-2 gap-[12px] justify-center items-center pl-[16px] pr-[16px] md:flex md:justify-between md:gap-[32px]">
            <div className="flex flex-col items-start">
              <img className="" src={one} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Style Optics</h2>
              <p>$80 $40</p>
            </div>
            <div className="flex flex-col items-start">
              <img className="" src={two} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Casual Dark Shades</h2>
              <p>$120 $60</p>
            </div>
            <div className="flex flex-col items-start">
              <img className="" src={three} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>SpectraClear Lense</h2>
              <p>$140 $70</p>
            </div>
            <div className="flex flex-col items-start">
              <img className="" src={four} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Blue Light Blocker</h2>
              <p>$140 $70</p>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-[12px] pl-[16px] pr-[16px] md:flex md:justify-between md:gap-[32px]">
            <div className="flex flex-col items-start">
              <img src={five} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Trendlense</h2>
              <p>$170 $85</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={six} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Sleek Sight</h2>
              <p>$100 $50</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={seven} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>EliteEyes</h2>
              <p>$200 $100</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={eight} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Pure Vision</h2>
              <p>$100 $50</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[12px] pl-[16px] pr-[16px] md:flex md:justify-between md:gap-[32px]">
            <div className="flex flex-col items-start">
              <img src={nine} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Fashion Sunglass</h2>
              <p>$20 $10</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={ten} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>White Sunglass</h2>
              <p>$220 $110</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={eleven} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Gaze DarGLo Glasses</h2>
              <p>$500 $250</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={twelve} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Tobiipro Glasses</h2>
              <p>$700 $350</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[12px] pl-[16px] pr-[16px] md:flex md:justify-between md:gap-[32px]">
            <div className="flex flex-col items-start">
              <img src={thirteen} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Wearable eye tracker</h2>
              <p>$1200 $600</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={fourtheen} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Adjustable Eye Glasses</h2>
              <p>$500 $250</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={six} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Brown Frame lense</h2>
              <p>$1200 $50</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={fiftheen} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Flexfocus Adjustable Glass</h2>
              <p>$1000 $500</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[12px] pl-[16px] pr-[16px] md:flex md:justify-between md:gap-[32px]">
            <div className="flex flex-col items-start">
              <img src={sixteen} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>JIM Halo Frame Glass</h2>
              <p>$300 $150</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={five} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Black Glass lense</h2>
              <p>$1000 $500</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={eighteen} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>ZEN STainless Glass</h2>
              <p>$1200 $600</p>
            </div>
            <div className="flex flex-col items-start">
              <img src={ninteen} alt="image" />
              <img className="pt-[12px]" src={rating} alt="" />
              <h2>Klaidescope Glasses</h2>
              <p>$200 $100</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center justify-between">
          <img className="pl-[16px]" src={leftarrow} alt="" />
          <div className="flex gap-[24px]">
            <div className="text-[14px] font-medium">Page 1 of 5</div>
            <div><span className="border-[1px] rounded-[6px] pt-[3px] pb-[3px] pr-[6px] pl-[6px] border-firstGreen">1</span>{" "}... 5</div>
          </div>
          <img className="pr-[16px]" src={rightarrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSec;
