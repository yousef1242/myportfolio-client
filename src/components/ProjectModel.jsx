import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

export default function ProjectModel({ singleProject, setProjectModel }) {
  return (
    <div className="project-model fixed bg-[#00000038] top-0 left-0 z-[999999] h-[100vh] w-full py-[50px] overflow-scroll">
      <div className="flex items-center justify-center px-2">
        <div className="project-model-card h-auto w-[600px] bg-white shadow-md rounded-md overflow-hidden">
          <div className="project-model-card-image relative">
            <img
              className="h-auto w-full"
              src={singleProject?.image?.url}
              loading="lazy"
              alt={`${singleProject?.image?.url}-img`}
            />
            <span
              className="close-project-model-icon absolute right-5 top-5 bg-white shadow-md text-black rounded-full p-2 cursor-pointer text-2xl"
              onClick={() => setProjectModel(false)}
            >
              <IoCloseSharp />
            </span>
          </div>
          <div className="project-model-card-content py-4 ps-2">
            <div className="mb-3">
              <span className="font-semibold">Title: </span>
              <span>{singleProject?.title}</span>
            </div>
            <div className="mb-3">
              <span className="font-semibold">Date: </span>
              <span>
                {singleProject?.createdAt &&
                  new Date(singleProject.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="mb-3">
              <span className="font-semibold">Website: </span>
              <Link
                className="underline"
                to={singleProject?.sitelink}
                target="_blank"
              >
                View
              </Link>
            </div>
            <div className="mb-3">
              <span className="font-semibold">Repository: </span>
              <Link
                className="underline"
                to={singleProject?.repolink}
                target="_blank"
              >
                View
              </Link>
            </div>
            <div className="mb-3">
              <span className="font-semibold">Description: </span>
              <p>{singleProject?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
