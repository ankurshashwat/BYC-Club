import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <section className="hero py-16 flex items-center min-h-auto justify-center">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <h1 className="mt-3 text-[2.5rem] font-bold leading-[3rem] tracking-tight text-black">
            Rent your next ride <br />
            <span className="mt-3 text-[2.5rem] font-bold leading-[3rem] tracking-tight text-white">
              {" "}
              with ethereum.{" "}
            </span>
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            {" "}
            connect your wallet, select a ride, and you're off to races.{" "}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => handleClick("dashboard")}
            className="transform rounded-md bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-gray-200 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            select a ride
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
