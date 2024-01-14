import { IoPlayOutline } from "react-icons/io5";
import heroSectionImage from "../images/hero-section-image.svg";
import rightArrow from "../images/right-arrow_2252540.png";
import { FaCertificate } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section h-auto md:h-[100vh]">
        <div className="container flex flex-col md:flex-row px-2 relative1 pt-[220px] mx-auto">
          <div className="absolute w-[300px] h-[300px] z-[9] top-[-153px] left-[-80px] blur-[250px] opacity-[.6] bg-maincolor"></div>
          <div className="right-arrow-icon absolute hidden lg:block lg:left-[490px] lg:top-[310px]">
            <div className="relative">
              <img
                src={rightArrow}
                alt="right-arrow-icon"
                className="h-[200px] w-[200px] sticky z-[99]"
              />
              <span className="absolute text-4xl text-maincolor z-[9] lg:left-[160px] lg:top-[82px]">
                <FaCertificate />
              </span>
            </div>
          </div>
          <div className=" hero-section-content mb-3 md:mb-0 md:w-1/2">
            <div className="flex items-center font-semibold mb-[10px] text-black text-[20px]">
              <span>{"__________"}</span>
              <span className="ms-[10px] mt-[17px] text-maincolor">
                Hello 👋 I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-[40px] text-slate-900">
              Yousef Ahmed
            </h1>
            <p className="mb-[55px] text-slate-800 text-2xl font-semibold">
              I'm a mern stack developer
            </p>
            <div className="flex space-x-5">
              <a
                href="/"
                className="font-semibold flex items-center justify-center md:text-[18px] text-white bg-maincolor w-[120px] h-[50px] md:w-[150px] md:h-[50px] rounded-lg"
              >
                Get in touch
              </a>
              <div className="flex items-center justify-center font-semibold">
                <span
                  href="#"
                  className="bg-black shadow text-[30px] ps-[3px] text-white w-[50px] flex items-center justify-center cursor-pointer h-[50px] text-center rounded-[50%]"
                >
                  <IoPlayOutline />
                </span>
                <span className="ms-[10px]">Watch Video</span>
              </div>
            </div>
          </div>
          <div className="her-section-image cursor-circle flex justify-center relative md:w-1/2">
            <div className="absolute w-[300px] h-[300px] z-[9] top-[20%] left-[26%] blur-[250px] opacity-[.6] bg-maincolor"></div>
            <img
              className="h-[400px] w-[400px] z-[99]"
              src={heroSectionImage}
              alt="development-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
