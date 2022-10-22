import React from "react";

function About() {
  return (
    <div className="snap-start w-full h-screen flex justify-center items-center bg-[#111215] font-roboto text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-b-[#5fab6f]">
              About
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, I'm Hiran, I'm a computer engineering undergraduat.</p>
          </div>
          <div>
            <p>
              I'm an encouraged and dedicated individual passionate about
              programming, machine learning, and electronic design automation.
              Seeking an opportunity to incorporate and improve my knowledge and
              skills by contributing to the growth of the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
