import React, { useState } from "react";
import { AiOutlineGift, AiFillHeart } from "react-icons/ai";
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

         flex flex-col justify-center drop-shadow-md

         p-10 rounded-full items-center bg-white2/[.6] cursor-pointer  w-60 h-60"
        >
          <GiAirplaneDeparture className=" w-10 h-10 cursor-pointer " />
          <GiIceland className="drop-shadow-md  w-40 h-40 text-blue cursor-pointer " />
          <GiAirplaneArrival className=" w-10 h-10  cursor-pointer " />
        </div>
      ) : (
        <div
          className="bg-white2/[.6] drop-shadow-md

        w-60 h-60 flex flex-col justify-center items-center p-10 rounded-full cursor-pointer "
        >
          <AiOutlineGift className="text-red font-thin w-20 mb-4 h-20 cursor-pointer  " />
          <p className="text-2xl flex flex-row">
            Til Shirine{" "}
            <AiFillHeart className="text-red drop-shadow-md  ml-1 mt-1" />{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Present;
