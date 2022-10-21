import React from "react";

// cv icon
import { HiOutlineDocumentText } from "react-icons/hi";

function Navbar() {
  return (
    <div className="border-b border-b-gray-700">
      <div className="max-w-[1240px] flex mx-auto justify-between p-5">
        <div className="flex">
          <h1 className="text-2xl md:text-3xl text-[#5fab6f] my-auto flex gap-5">
            Welcome
          </h1>
          <img
            className="object-scale-down w-12 h-8"
            src="/assets/fire.gif"
            alt=""
          />
        </div>

        <ul className="flex justify-center ml-5 font-mono text-l md:text-xl border border-[#5fab6f] rounded-md px-1 hover:border-[#278e3d] text-[#5fab6f] hover:text-[#278e3d]">
          <li className="my-auto rounded-full ">
            <a href="/assets/resume.pdf">
              <HiOutlineDocumentText
                size={"1.2em"}
                className="cursor-pointer"
              />
            </a>
          </li>
          <li className="px-1 py-1 font-mono cursor-pointer ">
            <a href="/assets/resume.pdf">My resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
