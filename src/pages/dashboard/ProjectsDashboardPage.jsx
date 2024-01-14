import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectsCards from "../../components/ProjectsCards";

export default function ProjectsDahboardPage() {
  const navigate = useNavigate();
  const successLogin = localStorage.getItem("successLogin")
    ? JSON.parse(localStorage.getItem("successLogin"))
    : null;

  // if success login exist
  useEffect(() => {
    if (!successLogin) {
      navigate("/dashboard/auth");
    }
  }, []);

  return (
    <div className="projects-dahboard-page h-[100vh] bg-ofwhitecolor">
      <div className="container px-2 mx-auto h-full py-20">
        <div className="header flex items-center justify-between mb-[20px]">
          <h2 className="text-slate-900 text-5xl md:text-7xl font-bold mb-[20px]">
            Projects
          </h2>
          <div>
            <Link
              className="bg-maincolor py-2 px-3 rounded-md text-white"
              to={`/dashboard/projects/create`}
            >
              Create project
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-3 font-semibold mb-[100px]">
          <Link className="text-slate-600" to={`/`}>
            Home
          </Link>
          <span className="text-slate-800">{"/"}</span>
          <span className="text-slate-800">projects</span>
        </div>
        <div className="projects-cards">
          <ProjectsCards />
        </div>
      </div>
    </div>
  );
}
