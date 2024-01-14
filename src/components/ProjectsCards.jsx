import React, { useEffect, useState } from "react";
import fetchProjects from "../utils/fetchProjects";
import Loading from "./Loading";
import swal from "sweetalert";
import request from "../utils/request";

export default function ProjectsCards() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const successlogin = localStorage.getItem("successLogin")
    ? JSON.parse(localStorage.getItem("successLogin"))
    : null;

  // fetch projects
  useEffect(() => {
    const fetchProjectsData = async () => {
      const data = await fetchProjects();
      if (data?.ok) {
        setProjects(data.projects);
      }
    };
    fetchProjectsData();
  }, []);

  // delete project handler
  const deleteProjectHandler = async (projectId) => {
    if (!projectId) {
      return swal("Somthing went wrong", "Project id doesn't exist!", "error");
    }
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          setLoading(true);
          const { data } = await request.delete(
            `/api/v2/projects/delete/${projectId}`
          );
          if (data?.ok) {
            setLoading(false);
            swal(data.message, {
              icon: "success",
            });
            const filterProjects = projects.filter(
              (project) => project._id !== projectId
            );
            setProjects(filterProjects);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
          if (error?.response?.data?.message) {
            swal(
              "Somthing went wrong",
              error?.response?.data?.message,
              "error"
            );
          }
        }
      } else {
        swal("Please try again");
      }
    });
  };

  return (
    <>
      {projects?.length > 0 ? (
        <div className="flex flex-col sm:flex-row flex-wrap">
          {projects?.map((project, index) => (
            <div key={index + 1} className="p-2 w-full mb-3 sm:w-1/2 md:w-1/3">
              <div className="card rounded-md shadow-md bg-white">
                <div className="card-header-image">
                  <img
                    src={project?.image?.url}
                    loading="lazy"
                    alt={`project-img-${project?.title}`}
                    className="h-[200px] w-full"
                  />
                </div>
                <div className="card-body px-2 py-5">
                  <h3 className="text-slate-800 font-bold text-3xl mb-[40px]">
                    {project?.title}
                  </h3>
                  <div className="flex items-center">
                    <button className="bg-maincolor text-white font-semibold py-2 px-3 w-1/2 rounded-sm">
                      View
                    </button>
                    <div className="card-date text-slate-700 w-1/2 font-semibold ms-4">
                      <span>
                        {project?.createdAt &&
                          new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  {successlogin && (
                    <div className="mt-[40px]">
                      <button
                        onClick={() => deleteProjectHandler(project._id)}
                        className="bg-slate-800 text-white py-3 text-center w-full hover:opacity-[.8]"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading flex flex-col items-center justify-center text-maincolor">
          <div className="mt-10 text-center text-4xl font-semibold">
            No projects exist
          </div>
        </div>
      )}
      {loading && (
        <div className="delete-loading-action fixed h-[100vh] w-full top-0 left-0 bg-[#ffffff82] flex items-center justify-center text-maincolor">
          <div className="">
            <Loading />
          </div>
        </div>
      )}
    </>
  );
}
