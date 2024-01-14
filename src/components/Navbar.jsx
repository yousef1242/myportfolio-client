import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
     <nav className="bg-[#f0f4ff] bg-opacity-40 backdrop-blur-md left-0 h-auto w-full fixed top-0 z-[999]">
        <div className="container mx-auto p-4 text-white">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="logo">
              <h1 className="text-black font-bold text-2xl">Yousef Ahmed</h1>
            </div>
            {/* links */}
            <div className="links hidden md:flex space-x-5">
              <span className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                Home
              </span>
              <span className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                About Me
              </span>
              <span className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                Skills
              </span>
              <span className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                Projects
              </span>
              <span className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                Contact
              </span>
            </div>
            {/* bar icon */}
            <div className="flex md:hidden">
              <span className="font-semibold text-2xl text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                <FaBarsStaggered/>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
