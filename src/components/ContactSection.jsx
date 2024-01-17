import { Link } from "react-router-dom";
import contactImage from "../images/contact-section-image.png";

const ContactSection = () => {
  return (
    <>
      <section className="contact-section py-20 min-h-[100vh]" id="contactSection">
        <div className="container relative mx-auto h-[100%] px-2">
          <h1 className="text-slate-900 text-5xl mb-[100px] font-bold text-center md:text-7xl">
            Contact Info
          </h1>
          <div className="contect-section-content flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-center">
            {/* contact section cards */}
            {/* github card */}
            <Link
              target="_blank"
              to="https://github.com/yousef1242"
              className="contact-section-content-cards upwork-icon shadow-md font-semibold bg-ofwhitecolor p-4 h-auto w-[100%] flex space-x-3 flex-row items-center transition-[.3s] hover:scale-[1.07] md:h-[100px] md:w-[300px] md:md:absolute left-0 md:top-[150px]"
            >
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://th.bing.com/th/id/R.9230943f4e960d4311f3c8b9c28d92ab?rik=SCK0sB8EXFwNkA&pid=ImgRaw&r=0"
                alt="upwork-img"
              />
              <div className="contact-section-content-cards-name">Github</div>
            </Link>
            {/* gmail card */}
            <Link
              target="_blank"
              to="mailto:yousefahmedelshahed@gmail.com"
              className="contact-section-content-cards upwork-icon shadow-md font-semibold bg-ofwhitecolor p-4 h-auto w-[100%] flex space-x-3 flex-row items-center transition-[.3s] hover:scale-[1.07] md:h-[100px] md:w-[300px] md:absolute md:left-[30px] md:top-[300px]"
            >
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://th.bing.com/th/id/R.4d6db56fe0851ae7635b0dfd1cd86a72?rik=lK4d8jxpm0EqAw&pid=ImgRaw&r=0"
                alt="upwork-img"
              />
              <div className="contact-section-content-cards-name">Gmail</div>
            </Link>
            {/* whatsapp card */}
            <Link
              target="_blank"
              to="https://wa.me/+01145667099"
              className="contact-section-content-cards upwork-icon shadow-md font-semibold bg-ofwhitecolor p-4 h-auto w-[100%] flex space-x-3 flex-row items-center transition-[.3s] hover:scale-[1.07] md:h-[100px] md:w-[300px] md:absolute md:left-[60px] md:top-[450px]"
            >
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://th.bing.com/th/id/R.35ffa6e353468280a59e5b4672b8aba0?rik=7hSGUWDIrp%2bhLg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWhatsApp-PNG-Picture.png&ehk=deet7YvWTlFf4Xe0LZBhIsS4NJ84GeEnFqKz44GkR%2bo%3d&risl=&pid=ImgRaw&r=0"
                alt="upwork-img"
              />
              <div className="contact-section-content-cards-name">Whatsapp</div>
            </Link>
            {/* facebook card */}
            <Link
              target="_blank"
              to="https://www.facebook.com/fluxe.tech/"
              className="contact-section-content-cards upwork-icon shadow-md font-semibold bg-ofwhitecolor p-4 h-auto w-[100%] flex space-x-3 flex-row items-center transition-[.3s] hover:scale-[1.07] md:h-[100px] md:w-[300px] md:absolute md:right-0 md:top-[150px]"
            >
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://th.bing.com/th/id/R.cda888975eb3a93283ba1608c5ea29d3?rik=B3P38l1Yw8O7uQ&pid=ImgRaw&r=0"
                alt="upwork-img"
              />
              <div className="contact-section-content-cards-name">Facebook</div>
            </Link>
            {/* instagram card */}
            <Link
              target="_blank"
              to="https://www.instagram.com/_yussef_jooo_/"
              className="contact-section-content-cards upwork-icon shadow-md font-semibold bg-ofwhitecolor p-4 h-auto w-[100%] flex space-x-3 flex-row items-center transition-[.3s] hover:scale-[1.07] md:h-[100px] md:w-[300px] md:absolute md:right-[30px] md:top-[300px]"
            >
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://th.bing.com/th/id/R.29f05337b26a44c64a23e61c6046e7fc?rik=amVBPMjR0aYLEQ&riu=http%3a%2f%2fwww.brandinglosangeles.com%2fwp-content%2fuploads%2fInstagram_logo_2016.svg.png&ehk=2l3yNN9vQJ%2fQ5coSsDXZrx%2fkdFNmyfF3TBS8nmiOr%2fM%3d&risl=&pid=ImgRaw&r=0"
                alt="upwork-img"
              />
              <div className="contact-section-content-cards-name">
                Instagram
              </div>
            </Link>
            {/* mostaql card */}
            <Link
              target="_blank"
              to="https://mostaql.com/u/yousef904"
              className="contact-section-content-cards upwork-icon shadow-md font-semibold bg-ofwhitecolor p-4 h-auto w-[100%] flex space-x-3 flex-row items-center transition-[.3s] hover:scale-[1.07] md:h-[100px] md:w-[300px] md:absolute md:right-[60px] md:top-[450px]"
            >
              <img
                className="w-[50px] h-[50px] object-cover"
                src="https://ieasoft.net/local/design-new/images/ieasoft/icons/mostaql.png"
                alt="upwork-img"
              />
              <div className="contact-section-content-cards-name">Mostaql</div>
            </Link>
            {/* contact section image */}
            <div className="contact-section-content-image hidden lg:flex">
              <img loading="lazy" src={contactImage} alt="contact-img" />
            </div>
            {/* blur */}
            <div className="absolute w-[300px] h-[300px] top-[105px] opacity-[.6] left-[0px] md:left-[500px] z-[-1] blur-[250px] bg-maincolor"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
