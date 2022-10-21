import React from "react";

// cv icon
import { HiOutlineDocumentText } from "react-icons/hi";

// social icons
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Navbar() {
  return (
    <div className="border-b border-b-gray-700">
      <div className="max-w-[1240px] flex mx-auto justify-between p-5">
        <ul className="text-2xl md:text-3xl text-[#5fab6f] my-auto flex gap-5">
          <li className="cursor-pointer">
            <a
              target="blank"
              href="https://www.linkedin.com/in/hiran-eranda-38b7451b3/"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="cursor-pointer">
            <a target="blank" href="https://github.com/hiranEranda">
              <BsGithub />
            </a>
          </li>
          <li className="cursor-pointer">
            <a target="blank" href="https://www.facebook.com/hiran.eranda.5">
              <BsFacebook />
            </a>
          </li>
        </ul>
        <ul className="flex justify-center ml-5 font-mono text-l md:text-xl">
          <li className="text-[#5fab6f] rounded-full my-auto">
            <a href="/assets/resume.pdf">
              <HiOutlineDocumentText
                size={"1.6em"}
                className="cursor-pointer"
              />
            </a>
          </li>
          <li className="font-mono text-[#5fab6f] border-[#5fab6f] rounded-md px-2 py-1 cursor-pointer">
            <a href="/assets/resume.pdf"> My resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
