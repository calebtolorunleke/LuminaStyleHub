import React from "react";
import Header from "./Header";
import MainIMG from "../assets/Aboutuscomp.jpg";
import trendIMG1 from "../assets/pic1.jpg";
import trendIMG2 from "../assets/pic2.jpg";
import trendIMG3 from "../assets/pic3.jpg";
import trendIMG4 from "../assets/pic4.jpg";
import trendIMG5 from "../assets/pic5.jpg";
import trendIMG6 from "../assets/pic6.jpg";
import Footer from "./Footer";

const AboutusComp = () => {
  const mainHead = [
    {
      themain:
        "Lumina StyleHub is an online platform that celebrates and showcases Nigerian fashion, providing users with a curated selection of local designers, fashion products and style inspiration ",
    },
  ];

  const trendingDiv = [
    { trendIMG: trendIMG1, trendName: "Desolate By Ola" },
    { trendIMG: trendIMG2, trendName: "Demi's Puffi" },
    { trendIMG: trendIMG3, trendName: "Anu takes Street" },
    { trendIMG: trendIMG4, trendName: "Racks by T" },
    { trendIMG: trendIMG5, trendName: "Chi Eleganz" },
    { trendIMG: trendIMG6, trendName: "Meenah's heaven Anu takes Street" },
  ];

  const mission = [
    {
      missionText:
        "To bridge the gap between the fashion forward people and the authentic Nigerian creatives.",
    },
    {
      missionText:
        "To allow customers be able to personalize their fashion journey.",
    },
    {
      missionText:
        "To pave way for global recognition of the Nigerian Designers.",
    },
  ];

  return (
    <div>
      <Header />

      <div className="flex flex-col relative items-center md:h-[570px]">
        <img
          src={MainIMG}
          alt=""
          className="object-cover md:h-150 md:w-full absolute z-0"
        />
        {mainHead.map((inmain, index) => (
          <h1
            key={index}
            className="z-10 text-center md:text-4xl text-white p-10 md:p-40 font-semibold"
          >
            {inmain.themain}
          </h1>
        ))}
      </div>

      <div className="flex flex-col items-center p-10">
        <h1 className="p-5 text-2xl font-bold">Trending Now</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {trendingDiv.map((setTrend) => (
            <div key={setTrend.trendName} className="text-center">
              <img
                src={setTrend.trendIMG}
                alt={setTrend.trendName}
                className="h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem] rounded-xl object-cover"
              />
              <h3 className="mt-2 font-medium">{setTrend.trendName}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-end justify-end text-end w-full p-4">
          <button className="px-4 py-2 border border-blue-400 rounded text-blue-600 hover:bg-blue-100 transition duration-200">
            Continue to Shop
          </button>
        </div>

        <div className="py-7 flex flex-col items-center">
          <h1 className="text-lg md:text-3xl font-bold mb-4">
            Mission Statement
          </h1>
          <div className="grid md:grid-cols-3 gap-3 md:gap-9 mt-4">
            {mission.map((inMission) => (
              <div
                key={inMission.missionText}
                className="border border-blue-300 rounded-lg p-5 shadow-md bg-white"
              >
                <h1 className="text-center">{inMission.missionText}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutusComp;
