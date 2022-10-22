import React from "react";

// cv icon
import { HiOutlineDocumentText } from "react-icons/hi";

function Navbar() {
  return (
    <div className="fixed w-full border-b border-b-gray-700 bg-[#111215]">
      <div className="max-w-[1240px] flex mx-auto justify-between p-5">
        <div className="flex">
          <img
            className="object-scale-down w-16 h-16"
            src="/assets/h.gif"
            alt=""
          />
        </div>

        <ul className="flex justify-center ml-5 font-roboto text-l max-h-[2em] md:text-xl border border-[#5fab6f] rounded-md px-1 hover:border-[#278e3d] text-[#5fab6f] hover:text-[#278e3d] mt-3">
          <li className="my-auto rounded-full ">
            <a href="/assets/resume.pdf">
              <HiOutlineDocumentText
                size={"1.2em"}
                className="cursor-pointer"
              />
            </a>
          </li>
          <li className="px-1 py-1 cursor-pointer font-roboto ">
            <a href="/assets/resume.pdf">My resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
