import React from "react";
import Check1 from "./Check1";
import Check2 from "./Check2";
import Check3 from "./Check3";

function Checkout() {
  return (
    <div>
      <Check1 />
      <div className=" mt-[80px] mb-[80px] mr-[112px] ml-[112px]">
        <div className="bg-palewhite rounded-[16px]  pt-[32px] pb-[32px] pr-[16px] pl-[16px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[20px]">Contact Information</h1>
            <div className="flex gap-[32px]">
              <div>
                <h2>First Name</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                  <input
                    className="bg-greyBox text-[16px] "
                    type="text"
                    placeholder="Enter first name"
                  />
                </div>
              </div>
              <div>
                <h2>Last Name</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                  <input
                    className="bg-greyBox text-[16px] "
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[32px]">
              <div>
                <h2>Phone Number</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                  <input
                    className="bg-greyBox text-[16px] "
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <h2>Email Address</h2>
                <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                  <input
                    className="bg-greyBox text-[16px] "
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[20px]">Shipping Address</h1>
              <div className="flex gap-[32px]">
                <div>
                  <h2>Street Address *</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-700 rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] "
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <h2>Country *</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] "
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div>
                  <h2>Town / City *</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] "
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <h2>State</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] "
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <h2>Zip Code</h2>
                  <div className="bg-greyBox pl-[16px] pr-[16px] pt-[10px] pb-[10px] max-w-[336px] rounded-[6px]">
                    <input
                      className="bg-greyBox text-[16px] "
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Checkout;
