import React, { useContext } from "react";
import Ride1 from "../assets/ride1.jpg";
import Ride2 from "../assets/ride2.jpg";
import Ride3 from "../assets/ride3.jpg";
import { BycClubContext } from "./../context/context";

function Ride() {
  const { checkOut, checkIn } = useContext(BycClubContext);
  return (
    <div className="cardWrapper flex flex-wrap flex-row justify-center items-center">
      <div className="flex h-screen items-center justify-center px-4">
        <div className="max-w-sm overflow-hidden rounded-xl glassmorphism shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img src={Ride1} alt="ride1" className="h-[320px] w-full" />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">
              Well, aren't you going up to the lake tonight, you've been
              planning it for two weeks.
            </p>
            <div className="flex flex-row justify-around">
              <button
                onClick={checkOut}
                className="w-1/3 bg-black rounded-md py-2 text-white hover:bg-gray-200 hover:shadow-md transition ease-in duration-200"
              >
                check out
              </button>
              <button
                onClick={checkIn}
                className="w-1/3 bg-black rounded-md py-2 text-white hover:bg-gray-200 hover:shadow-md transition ease-in duration-200"
              >
                check in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[screen] items-center justify-center px-4">
        <div className="max-w-sm min-w-1/4 overflow-hidden rounded-xl glassmorphism shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img src={Ride2} alt="ride2" className="h-[320px] w-full" />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">
              Well, aren't you going up to the mountains, you've been planning
              it for two weeks.
            </p>
            <div className="flex flex-row justify-around">
              <button
                onClick={checkOut}
                className="w-1/3 bg-black rounded-md py-2 text-white hover:bg-gray-200 hover:shadow-md transition ease-in duration-200"
              >
                check out
              </button>
              <button
                onClick={checkIn}
                className="w-1/3 bg-black rounded-md py-2 text-white hover:bg-gray-200 hover:shadow-md transition ease-in duration-200"
              >
                check in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center px-4">
        <div className="max-w-sm overflow-hidden rounded-xl glassmorphism shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img src={Ride3} alt="ride3" className="h-[320px] w-full" />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">
              Well, aren't you going out in the snow, you've been planning it
              for two weeks.
            </p>
            <div className="flex flex-row justify-around">
              <button
                onClick={checkOut}
                className="w-1/3 bg-black rounded-md py-2 text-white hover:bg-gray-200 hover:shadow-md transition ease-in duration-200"
              >
                check out
              </button>
              <button
                onClick={checkIn}
                className="w-1/3 bg-black rounded-md py-2 text-white hover:bg-gray-200 hover:shadow-md transition ease-in duration-200"
              >
                check in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ride;
