import React, { useContext } from "react";
import { BycClubContext } from "./../context/context";

function Navbar() {
  const { connectWallet, currentAccount } = React.useContext(BycClubContext);

  return (
    <div className="mx-4">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <div className="text-2xl text-black font-bold hover:text-white transition-colors cursor-pointer">
          BYC CLUB
        </div>

        <div>
          <button
            onClick={connectWallet}
            className="py-2 px-4 bg-black text-white font-bold rounded-md hover:bg-gray-200 
                    hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            {!currentAccount
              ? "connect wallet"
              : `${currentAccount.slice(0, 5)}...${currentAccount.slice(
                  currentAccount.length - 4
                )}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
