import React from "react";
import Typed from "react-typed";
function Profile() {
  return (
    <div className="py-5">
      <div className="max-w-[800px] mx-auto mt-[-96] px-5 font-serif">
        <h1 className="flex justify-center text-3xl font-bold text-[#979797] mb-4">
          Hiran Eranda
        </h1>
        <h1 className="flex justify-center text-2xl text-[#a8a8a8] ">
          Computer Engineering undergraduate
        </h1>
        <p className="mt-4 text-justify text-[#979797] font-mono">
          I am a dedicated, adaptable, and responsible individual who enjoys
          work on my own initiative or in a team. I am looking for an innovative
          and ambitious company where I can assist my knowledge and skills along
          with acquiring realtime exposure to Computer engineering procedures.
          Based on my enthusiasm for programming, I am seeking a Software
          Development related job opportunity to develop my career as a Software
          Engineer.
        </p>
        <img
          className="object-scale-down mx-auto mt-5 rounded-full w-72 h-72"
          src="/assets/IMG_1188.png"
          alt=""
        />
        <div className="flex items-center justify-center mt-5 font-mono text-xl text-white">
          <p>I'm skilled in &nbsp; </p>
          <Typed
            className="text-[#5fab6f]"
            strings={[
              "ReactJs...",
              "JavaScript...",
              "Express...",
              "Solidity...",
              "Remix IDE...",
              "Moralis...",
              "Java...",
              "Tailwind css...",
              "Git...",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
