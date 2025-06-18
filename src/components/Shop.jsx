import React from "react";
import Header from "./Header";
import trendIMG1 from "../assets/pic1.jpg";
import trendIMG2 from "../assets/pic2.jpg";
import trendIMG3 from "../assets/pic3.jpg";
import trendIMG4 from "../assets/pic4.jpg";
import trendIMG5 from "../assets/pic5.jpg";
import trendIMG6 from "../assets/pic6.jpg";
import designerIMG1 from "../assets/designers1.jpg";
import designerIMG2 from "../assets/designers2.jpg";
import designerIMG3 from "../assets/designers3.jpg";
import designerIMG4 from "../assets/designers4.jpg";

import categories1 from "../assets/categories1.jpg";
import categories2 from "../assets/categories2.jpg";
import categories3 from "../assets/categories3.jpg";
import categories4 from "../assets/categories4.jpg";
import Footer from "./Footer";

const Shop = () => {
  const shopNow = [
    {
      shopNowIMG: trendIMG1,
      shopNowTag: "Desolate By Ola",
    },
    {
      shopNowIMG: trendIMG2,
      shopNowTag: "Demi's Puffi",
    },
    {
      shopNowIMG: trendIMG3,
      shopNowTag: "Anu takes street",
    },
    {
      shopNowIMG: trendIMG4,
      shopNowTag: "Racks by T",
    },
    {
      shopNowIMG: trendIMG5,
      shopNowTag: "Chi Eleganz",
    },
    {
      shopNowIMG: trendIMG6,
      shopNowTag: "Meenah's Heaven",
    },
  ];

  const categoriesSet = [
    {
      categoriesIMG: categories1,
      categoriesTag: "WOMEN'S FASHION",
    },
    {
      categoriesIMG: categories2,
      categoriesTag: "JEWELRY",
    },
    {
      categoriesIMG: categories3,
      categoriesTag: "BAGS",
    },
    {
      categoriesIMG: categories4,
      categoriesTag: "MEN'S FASHION",
    },
  ];

  const deisgnersSet = [
    {
      designerIMG: designerIMG1,
      designertag: "T.ADE",
      designerDescip: "Creative mastermind with a flair for the extra-ordinary",
    },
    {
      designerIMG: designerIMG2,
      designertag: "CHIOMA OKAFOR",
      designerDescip:
        "A born fashionista, an an expert in making the best men’s wear.",
    },
    {
      designerIMG: designerIMG3,
      designertag: "OLA AINA",
      designerDescip: "Worldclass creative, rated among the best of the best.",
    },
    {
      designerIMG: designerIMG4,
      designertag: "MEENAH BELLO",
      designerDescip:
        "She’s an exceptional designer known for her bold choice of colors and daring designs",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex flex-col items-center overflow-hidden">
        <h1 className="text-sm md:text-2xl font-bold">Shop Now</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-5 p-5 md:p-10">
          {shopNow.map((mapShop, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={mapShop.shopNowIMG}
                alt=""
                className="w-[10rem] h-[10rem] md:w-[20rem] md:h-[15rem]"
              />
              <h3 className="text-sm md:text-2xl">{mapShop.shopNowTag}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-sm md:text-2xl font-bold">Categories</h1>

          <div className="overflow-hidden flex flex-row gap-4 md:gap-10 py-2 px-3 md:px-10 animate-scroll w-max">
            {[...categoriesSet, ...categoriesSet, ...categoriesSet].map(
              (onCategories, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 md:gap-4 items-center "
                >
                  <img
                    src={onCategories.categoriesIMG}
                    alt=""
                    className="w-[10rem] h-[10rem] rounded-lg md:w-[15rem] md:h-[15rem]"
                  />
                  <h1 className="text-sm md:text-2xl text-center">
                    {onCategories.categoriesTag}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col  my-10 md:text-3xl items-center">
          <h1 className="font-bold">OUR TOP DESIGNERS.</h1>
          <div className="grid md:grid-cols-2 p-10 gap-5">
            {deisgnersSet.map((newDesign, index) => (
              <div key={index} className="grid grid-cols-2 gap-5 ">
                <img
                  src={newDesign.designerIMG}
                  alt=""
                  className="rounded h-[8rem] w-[15rem] md:h-[10rem] md:w-[15rem] "
                />
                <div className="flex flex-col text-center text-sm gap-2">
                  <h1>{newDesign.designertag}</h1>
                  <p>{newDesign.designerDescip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
