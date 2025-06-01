import React from 'react';
// import play_icon from '../../assets/play-icon.png';


const About = ({ setPlayState }) => {
  return (
    <div
      className="mx-auto my-24 flex flex-col items-center justify-center w-full bg-cover bg-center bg-gradient-to-t from-black/75 to-green-900/70"
      style={{ backgroundImage: `url('../../assets/200w.webp')` }}
    >
      <div className="flex flex-col md:flex-row w-full gap-8 items-center justify-center">
        <div className="relative flex-basis-40 w-full">
          <img src={assets.rohit_img} className="w-full rounded-lg" alt="" />
          <img
            src={play_icon}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 cursor-pointer"
            onClick={() => setPlayState(true)}
          />
        </div>
        <div className="flex-basis-56 w-full text-center md:text-left">
          <h3 className="font-semibold text-lg text-gray-300">About me</h3>
          <h2 className="text-2xl font-medium text-blue-900 my-2 max-w-xs">
         
          </h2>
          <p className="text-gray-200 mb-4 text-base">
            I’m Rohit Raj, a B.Tech student in Computer Science and Engineering,
            specializing in IoT. I have hands-on experience in programming and
            project development. My passion lies in using technology to solve
            complex problems, foster collaboration, and create impactful
            solutions that contribute to the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

