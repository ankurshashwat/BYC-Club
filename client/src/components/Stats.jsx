import React, { useState, useEffect, useContext } from "react";
import { BiWallet } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdPedalBike } from "react-icons/md";
import AddToBalanceForm from "./AddToBalanceForm";
import PayForm from "./PayForm";
import { BycClubContext } from "./../context/context";

function Stats() {
  const [color, setColor] = useState("");
  const { renterBalance, due, duration, renter } =
    React.useContext(BycClubContext);

  useEffect(() => {
    renter && renter.active ? setColor("#FF0000") : setColor("#00FF00");
  }, [color]);
  console.log(color);

  return (
    <div>
      <div className="heading flex justify-center items-center text-xl font-bold">
        Hey {renter}, here are your stats:
      </div>
      <div className="flex flex-wrap max-h-100vh">
        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div className="relative flex flex-col min-w-0 break-words glassmorphism duration-200 hover:scale-105 rounded mb-3 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    ETH Credit{" "}
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    {" "}
                    {renterBalance}{" "}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-yellow-500">
                    <BiWallet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div className="relative flex flex-col min-w-0 break-words glassmorphism duration-200 hover:scale-105 rounded mb-4 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    ETH Due
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    {" "}
                    {due}{" "}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <MdAttachMoney />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div className="relative flex flex-col min-w-0 break-words glassmorphism duration-200 hover:scale-105 rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    Total Duration{" "}
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    {" "}
                    {duration}{" "}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-blue-500">
                    <AiOutlineClockCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div className="relative flex flex-col min-w-0 break-words glassmorphism duration-200 hover:scale-105 rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    Ride Status{" "}
                  </h5>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
                    style={{ backgroundColor: `${color}` }}
                  >
                    <MdPedalBike />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formWrapper flex flex-row justify-center items-center">
        <AddToBalanceForm />
        <PayForm />
      </div>
    </div>
  );
}

export default Stats;
