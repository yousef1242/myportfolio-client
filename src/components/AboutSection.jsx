import aboutImage from "../images/about-section-image.png";

const AboutSection = () => {
  return (
    <>
      <section className="aboutme-section py-20" id="aboutmeSection">
        <div className="container mx-auto h-[100%] px-2">
          <h1 className="text-slate-900 text-5xl mb-[100px] font-bold text-center md:text-7xl">
            Who I'm
          </h1>
          <div className="aboutme-section-content flex flex-col-reverse md:flex-row">
            <div className="about-section-content-image relative cursor-circle md:w-1/2 flex justify-center md:justify-start">
              <img className="z-[99] sticky" src={aboutImage} alt="about-img" loading="lazy" />
              <div className="absolute w-[300px] h-[300px] top-[105px] opacity-[.6] left-[0] blur-[250px] bg-maincolor"></div>
            </div>
            <div className="about-section-content-about md:pt-[80px] md:w-1/2">
              <h3 className="text-maincolor text-3xl font-bold mb-7">
                Let's know who I'm
              </h3>
              <p className="text-slate-800 mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                cupiditate laboriosam illo nemo aliquam a rerum quas
                accusantium, quaerat placeat exercitationem corrupti nesciunt
                praesentium recusandae distinctio at fugit omnis molestiae.
              </p>
              <div className="aboutme-section-service flex items-baseline">
                <div className="aboutme-section-service-num">
                  <div className="text-white mb-6 relative">
                    <div className="bg-maincolor h-[40px] w-[40px] flex items-center justify-center rounded-full">
                      1
                    </div>
                    <div className="aboutme-section-service-num-line absolute h-[40px] w-[3px] bg-maincolor top-[33px] left-[18px]"></div>
                  </div>
                  <div className="text-white mb-6 relative">
                    <div className="bg-maincolor h-[40px] w-[40px] flex items-center justify-center rounded-full">
                      2
                    </div>
                    <div className="aboutme-section-service-num-line absolute h-[40px] w-[3px] bg-maincolor top-[33px] left-[18px]"></div>
                  </div>
                  <div className="text-white mb-6 relative">
                    <div className="bg-maincolor h-[40px] w-[40px] flex items-center justify-center rounded-full">
                      3
                    </div>
                    <div className="aboutme-section-service-num-line absolute h-[40px] w-[3px] bg-maincolor top-[33px] left-[18px]"></div>
                  </div>
                  <div className="text-white mb-6 relative">
                    <div className="bg-maincolor h-[40px] w-[40px] flex items-center justify-center rounded-full">
                      4
                    </div>
                  </div>
                </div>
                <div className="aboutme-section-service-sentences ms-4 text-slate-900 font-semibold">
                  <div className="mb-6 h-[40px]">
                    <div className="text-[18px]">
                      I can build your business website
                    </div>
                  </div>
                  <div className="mb-6 h-[40px]">
                    <div className="text-[18px]">
                      I can build your web aplication
                    </div>
                  </div>
                  <div className="mb-6 h-[40px]">
                    <div className="text-[18px]">
                      I can build your ecommerce website
                    </div>
                  </div>
                  <div className="mb-6 h-[40px]">
                    <div className="text-[18px]">
                      I can build your personal website
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
