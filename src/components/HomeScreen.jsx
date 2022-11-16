import React, { useState } from "react";
import { categoryDate } from "../data";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#0c0e29] ">
      <div className="pt-[2rem] lg:max-w-[60vw] lg:mx-auto">
        {/* <img src="https://chain-kits.co/user/logo.svg" alt="" /> */}
        <div className="flex flex-col items-center justify-center px-3 ">
          <h1 className="text-end text-[#195ba6] text-md absolute right-3 top-2">
            beta
          </h1>
          <p className="text-white font-semibold mb-5">
            Open protocol to communicate securely between Wallets and Dapps
            (Web3 Apps).
          </p>
          <p className="text-white font-semibold mb-5">
            The protocol establishes a remote connection using a Bridge server.
          </p>
          <span
            className=" animate-pulse hover:scale-105 transition-all duration-200 px-[20px] font-bold text-white
          cursor-pointer  mt-4 py-3 border-l-2 border-[#3182ce] rounded-lg bg-[#1a1c34]"
          >
            <Link to="/wallet">Connect Wallet</Link>
          </span>
        </div>
        <div className="max-w-[70vw] mx-auto mt-[2rem]">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="h-[2px] w-full bg-gray-500 mt-3" />
        <div className="flex items-center justify-center p-3 flex-col mt-[2rem]">
          <h1 className="font-bold text-md text-[#0150b8] mb-[2rem]">
            Qucik Start
          </h1>
          <div className="flex gap-5 flex-wrap items-center justify-center">
            {categoryDate.map((item, index) => (
              <Link to="/wallet" key={index}>
                <div
                  className="md:w-[220px] md:h-[210px] bg-[#1a1c34] w-[320px] h-[140px]
              flex flex-col items-center justify-center border-l-[6px]
              cursor-pointer hover:scale-105 transition-all duration-300 border-[#3182ce] rounded-lg"
                >
                  <span></span>
                  <img src={item.imgurl} alt="" />
                  <h1 className="text-md font-semibold mt-4 text-white">
                    {item.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-[4rem] md:max-w-[70vw] mx-auto">
          <h1 className="text-[#195ba6] font-bold text-md">Distribution</h1>
          <div className="flex justify-between text-white w-full px-3">
            <div>
              <p className="text-[1rem] mt-3 md:text-[2rem] font-bold">50K+</p>
              <p className="text-md font-semibold">resolved issues</p>
            </div>
            <div>
              <p className="text-[1rem] mt-3 md:text-[2rem] font-bold">200K+</p>
              <p className="text-md font-semibold">active Wallets</p>
            </div>
            <div>
              <p className="text-[1rem] mt-3 md:text-[2rem] font-bold">100+</p>
              <p className="text-md font-semibold">contributors</p>
            </div>
          </div>
        </div>

        <div className="mt-[3rem]  mb-[5rem] flex flex-col items-center">
          <p className="text-md text-white font-semibold">
            Ready to resolve your blockchain issues?
          </p>
          <p className="text-md text-white font-semibold">
            We are here to provide help.
          </p>
          <span
            className="px-5 py-2 bg-[#0150b8] 
          cursor-pointer rounded-lg text-white
          mt-[1rem]  font-bold hover:scale-105 transition-all duration-300 "
          >
            <Link to="/wallet">Get Started</Link>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4 text-gray-400 mb-3 ">
            <a
              href="https://www.instagram.com/"
              className="hover:text-gray-500"
            >
              <AiOutlineInstagram size={19} />
            </a>
            <a href="https://discord.com/" className="hover:text-gray-500">
              <SiDiscord size={19} />
            </a>
            <a href="https://twitter.com/" className="hover:text-gray-500">
              <AiOutlineTwitter size={19} />
            </a>
          </div>
          <p className="text-white text-sm font-semibold">
            secured-© 2022 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
