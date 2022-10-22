import React from "react";
import Typed from "react-typed";
function Profile() {
  return (
    <div className="snap-start h-screen flex justify-center items-center bg-[#111215] font-roboto w-full scroll-smooth">
      <div className="max-w-[1000px] mx-auto px-5 mt-[5rem]">
        <p className="text-[#5fab6f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff] mb-4">
          Hiran Eranda,
        </h1>
        <h2 className="flex text-2xl sm:text-5xl text-[#bdbdbd] ">
          Nice to meet you, please take a look around.
        </h2>
        {/* <p className="mt-4 max-w-[700px]  text-[#979797]">
          I'm an encouraged and dedicated individual passionate about
          programming, machine learning, and electronic design automation.
          Seeking an opportunity to incorporate and improve my knowledge and
          skills by contributing to the growth of the company.
        </p> */}

        {/* <img
          className="object-scale-down mx-auto mt-5 rounded-full w-72 h-72"
          src="/assets/IMG_1188.png"
          alt=""
        /> */}
        <div className="flex items-center mt-5 text-white text-l sm:text-xl">
          <p>Technologies I'm familiar in: &nbsp; </p>
          <Typed
            className="text-[#5fab6f]"
            strings={[
              "ReactJs",
              "JavaScript",
              "Express",
              "Solidity",
              "Remix IDE",
              "Moralis",
              "Java",
              "Tailwind css",
              "Git",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <div>
          <button className="flex items-center justify-center px-6 py-2 mt-5 text-white border-2 hover:border-[#5fab6f] hover:text-[#5fab6f]">
            View work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
