import skillsImage from "../images/skills-section-image.png";
import { skillsData } from "../utils/skillsData";

const SkillsSection = () => {
  return (
    <>
      <section className="skills-section py-20">
        <div className="container mx-auto h-[100%] px-2">
          <h1 className="text-5xl text-slate-900 mb-[100px] font-bold text-center md:text-7xl">
            Skills
          </h1>
          <div className="skills-section-content flex flex-col md:flex-row">
            <div className="skills-section-cards relative flex flex-row flex-wrap md:w-1/2">
              {/* blur */}
              <div className="absolute flex md:hidden w-[300px] h-[300px] z-[-1] top-[25%] left-[-33px] blur-[250px] bg-maincolor"></div>
              {/* skills cars */}
              {skillsData?.map((skill, index) => (
                  <div key={index + 1} className="p-2 w-[100%] sm:w-1/2 lg:w-1/3">
                    <div className="bg-ofwhitecolor shadow-md rounded-md space-x-3 text-slate-800 font-semibold flex py-3 px-1 items-center transition-[.3s] hover:scale-[1.07]">
                      <div className="skills-section-cards-image">
                        <img
                          loading="lazy"
                          className="w-[70px] h-[70px]"
                          src={skill?.image}
                          alt={skill?.name}
                        />
                      </div>
                      <div className="skills-section-cards-name font-semibold">
                        {skill?.name}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
            <div className="skills-section-image relative flex justify-center cursor-circle md:w-1/2">
                <img
                  className="z-[99] sticky"
                  src={skillsImage}
                  alt="skills-img"
                />
              {/* blur */}
              <div className="absolute w-[300px] h-[300px] z-[9] top-[30%] left-[26%] opacity-[.6] blur-[250px] bg-maincolor"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
