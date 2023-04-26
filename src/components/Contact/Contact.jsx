import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex items-center justify-center py-40">
      <div>
        <div className="w-full mb-10 lg:text-left text-center">
          <h3 className="text-[#f55f8d] text-3xl font-bold mb-3">CONTACT</h3>
          <h4 className="text-[#070120] text-xl mb-3 font-semibold">
            Don't be shy! Hit me up! 👇
          </h4>
        </div>
        <div className="w-full flex lg:flex-row flex-col sm:items-center items-start sm:justify-center justify-start lg:gap-x-20 gap-y-10">
          <div className="flex items-center gap-x-5">
            <div className="flex items-center justify-center w-20 h-20 p-5 rounded-full text-blue-500 shadow-lg text-3xl">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-[#070120] text-xl font-semibold">
                Location
              </span>
              <span className="text-[#6b7280] text-lg">
                Ho Chi Minh city , Viet Nam
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center justify-center w-20 h-20 p-5 rounded-full text-blue-500 shadow-lg text-3xl">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-[#070120] text-xl font-semibold">Mail</span>
              <span className="text-[#6b7280] text-lg">
                mathanhkhoi99@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
