import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/tai.png";
import yellow from "./assets/10001.jpeg";
import black from "./assets/10002.jpeg";
import red from "./assets/10004.jpeg";
import truck from "./assets/truck.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import plane from "./assets/plane.jpg";
import ship from "./assets/ship.jpg";
import ship2 from "./assets/ship2.jpg";
import air from "./assets/air.jpg";
import trucks from "./assets/trucks.jpg";
import Nav from "./components/Navbar/Nav";
import customs from "./assets/customs.jpg";
import warehouse from "./assets/warehouse.jpg";
import pack from "./assets/package.jpg";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {
  const slide = [
    {
      text: "Welcome to Blue Channel Logistics ",
      pic: air,
    },
    {
      text: "Welcome to Blue Channel Logistics",
      pic: trucks,
    },

    {
      text: "Welcome to Blue Channel Logistics ",
      pic: ship2,
    },
  ];

  return (
    <>
      {/* carousell */}
      <div className="relative   ">
        <Carousel
          animationHandler="fade"
          swipeable={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          className="   "
        >
          {slide.map((item) => {
            return (
              <>
                <div className="lg:mt-24      ">
                  <img
                    src={item.pic}
                    className="lg:h-[100vh] h-[50vh] brightness-50  -z-40   object-cover object-bottom    

                      "
                    alt=""
                  />

                  <div className="lg:w-1/2 absolute top-[5rem] left-[2rem]   lg:top-[15rem] flex flex-col items-center  lg:left-[3rem] space-y-8   ">
                    <h2 className="text-white text-2xl lg:text-5xl   max-w-xs lg:max-w-sm font-semibold font-roboto">
                      {item.text}
                    </h2>
                    <div className="font-semibold font-roboto space-y-6 lg:ml-[2rem] text-white  ">
                      <p className="text-normal font-roboto lg:max-w-sm max-w-xs text-center">
                        Connecting Continents, Fast-tracking Success
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
        <div className="flex flex-col  lg:flex-row space-y-4 lg:space-y-0   justify-center lg:space-x-4 absolute top-[15rem] lg:top-[30rem] left-[8rem] lg:left-[16rem]  z-50">
          <button className="py-2 px-8 font-roboto text-white border-white border hover:bg-blue-300 transition-colors rounded-sm   ">
            About us
          </button>
          <button className="py-2 px-8   font-roboto text-white border-white border hover:bg-blue-300 transition-colors duration-300 rounded-sm">
            Get a quote
          </button>
        </div>
      </div>

      {/* About us */}

      <div className="  flex justify-center items-center flex-col  bg-[#F3F5F5] space-y-6 lg:space-y-0 mt-[-2.5rem] ">
        <h2 className="text-center text-[#3A3A3A] flex justify-center lg:max-w-xl  text-2xl font-semibold mb-10 mt-12 ">
          Blue Channel logistics efficiently connecting businesses worldwide
        </h2>
        <div className="flex lg:flex-row flex-col lg:items-center px-[2rem]  lg:space-x-[5rem] lg:container lg:mx-auto">
          <div className="lg:w-[50vw] md:w-[80vw]  lg:p-[5rem]   lg:space-y-4  ">
            <img src={truck} className="rounded-lg" alt="" />
            <p className="font-semibold text-[#3A3A3A] lg:text-left md:text-right text-center py-4 lg:py-0">
              We make almost anything{" "}
            </p>
          </div>
          <div className="space-y-3 flex-col flex items-start ">
            <h3 className="text-[#3A3A3A] font-bold ">MAKE ALMOST ANYTHING</h3>
            <div className="flex flex-col items-start">
              <h2 className="text-3xl text-[#03396C] font-semibold font-roboto ">
                Who We are
              </h2>
              <p className=" lg:max-w-md max-w-xl md:text-left font-roboto  ">
                FabLab Rwanda was established in May 12th, 2016, by ICT Chamber
                in partnership with Rwanda Development Board (RDB), Japan
                International Cooperation Agency (JICA), Ministry of Education,
                SolidWorks Corporation MIT-CBA, and Gasabo3D who followed
                through taking lessons learnt from efforts of supporting
                Software Innovators (at KLAB) to execute on His Excellency’s
                recommendation to put in place a Fabrication Laboratory (FABLAB)
                to support Hardware Innovators in Rwanda.
              </p>
            </div>
            <div className="mt-10 lg:pb-10 md:pb-20 pb-6">
              <button className="px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full ">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*freight forwarding   */}
      <h1 className="font-roboto text-center text-4xl text-blue-900  font-bold my-[5rem]">
        Our services
      </h1>
      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between  lg:px-24 font-roboto">
        <div className="lg:w-1/3 text-center space-y-4 flex flex-col items-center">
          <img src={truck} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Road freight forwarding</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={ship} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Ocean freight forwarding</h2>
          <p className="max-w-xs ">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={plane} className="bg-cover brightness-75 " alt="" />
          <h2 className="font-semibold text-lg">Air Freight forwarding</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
      </div>

      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between font-roboto mb-[10rem] mt-[2rem]  lg:px-24">
        <div className="lg:w-1/3 text-center space-y-4 flex flex-col items-center">
          <img src={customs} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Customs clearance</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={warehouse} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Warehousing</h2>
          <p className="max-w-xs ">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={pack} className="bg-cover brightness-75 " alt="" />
          <h2 className="text-lg font-semibold">Product packaging</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
      </div>

      {/* contact form  */}
      <Form />
    </>
  );
}

export default App;
