import React from "react";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

// social icons
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className="pt-5 pb-5 border-t border-t-gray-700">
      <div className="max-w-[1240px] mx-auto p-5 grid lg:grid-cols-2 gap-4">
        <div className="text-[#5fab6f]">
          <h1 className="flex justify-center mb-4 text-xl border-b border-gray-700">
            Contact me
          </h1>

          <ul className="flex px-1 font-mono text-l md:text-xl">
            <li className="my-auto rounded-full ">
              <BsTelephone />
            </li>
            <li className="px-2 py-1 font-mono">+947018303</li>
          </ul>
          <ul className="flex px-1 font-mono text-l md:text-xl">
            <li className="my-auto rounded-full ">
              <HiOutlineMail />
            </li>
            <li className="px-2 py-1 font-mono">hiraneranda@gmail.com</li>
          </ul>
          <ul className="flex px-1 font-mono text-l md:text-xl">
            <li className="my-auto rounded-full ">
              <GoLocation />
            </li>
            <li className="px-2 py-1 font-mono">
              Malwanegama, Talawa, Sri Lanka
            </li>
          </ul>
        </div>
        <div className="text-[#5fab6f]">
          <h1 className="flex justify-center text-xl border-b border-gray-700">
            Check out my profiles
          </h1>
          <div className="flex justify-center">
            <ul className="text-2xl md:text-3xl mt-2 text-[#5fab6f] flex flex-col space-y-3 ">
              <li className="cursor-pointer hover:text-[#278e3d]">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/hiran-eranda-38b7451b3/"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li className="cursor-pointer hover:text-[#278e3d]">
                <a target="blank" href="https://github.com/hiranEranda">
                  <BsGithub />
                </a>
              </li>
              <li className="cursor-pointer hover:text-[#278e3d]">
                <a
                  target="blank"
                  href="https://www.facebook.com/hiran.eranda.5"
                >
                  <BsFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
