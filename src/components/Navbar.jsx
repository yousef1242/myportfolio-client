import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

// links
const navigation = [
  { name: "Home", to_id: "heroSection" },
  { name: "Team", to_id: "aboutmeSection" },
  { name: "Skills", to_id: "skillsSection" },
  { name: "Projects", to_id: "projectsSection" },
  { name: "Calendar", to_id: "contactSection" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              {navigation?.map((item) => (
                <span
                  onClick={() => scrollToSection(item?.to_id)}
                  className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]"
                >
                  {item?.name}
                </span>
              ))}
            </div>
            {/* bar icon */}
            <div className="flex md:hidden">
              <span className="font-semibold text-2xl text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]">
                {open ? (
                  <IoCloseSharp onClick={() => setOpen(false)} />
                ) : (
                  <FaBarsStaggered onClick={() => setOpen(true)} />
                )}
              </span>
            </div>
            {/* navbar sm devices */}
            <div
              className={`navbar-small-devices py-2 fixed top-[66px] left-0 w-full space-y-5 bg-white h-auto z-[999] ${
                open ? "flex flex-col" : "hidden"
              }`}
            >
              {navigation?.map((item) => (
                <span
                  onClick={() => scrollToSection(item?.to_id)}
                  className="font-semibold text-maincolor px-[7px] py-[5px] transition-[.3s] cursor-pointer rounded-lg hover:bg-[#f0f4ff]"
                >
                  {item?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
