import React, { useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import {
  GiIceland,
  GiAirplaneArrival,
  GiAirplaneDeparture,
} from "react-icons/gi";

function Present() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <div
          className="

         flex flex-col justify-center p-10 rounded-full items-center bg-white/[.8] cursor-pointer  w-80 h-80"
        >
          <GiAirplaneDeparture className=" w-20 h-20 cursor-pointer " />
          <GiIceland className=" w-60 h-60 text-blue cursor-pointer " />
          <GiAirplaneArrival className=" w-20 h-20  cursor-pointer " />
        </div>
      ) : (
        <div className="bg-white/[.8] w-80 h-80 flex flex-col justify-center items-center p-10 rounded-full cursor-pointer ">
          <AiOutlineGift className="text-red w-40 h-40 cursor-pointer  " />
          <p className="text-4xl">God Jul Shirine</p>
        </div>
      )}
    </div>
  );
}

export default Present;
