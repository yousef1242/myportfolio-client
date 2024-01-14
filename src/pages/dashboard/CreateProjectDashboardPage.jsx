import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import request from "../../utils/request";
import Loading from "../../components/Loading";

export default function CreateProjectDashboardPage() {
  const [field, setField] = useState({
    title: "",
    sitelink: "",
    repolink: "",
    description: "",
    image: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setIsLoading] = useState("");
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

  // create project form handler
  const createProjectFormHandler = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (
      field.title.trim() === "" ||
      field.sitelink.trim() === "" ||
      field.repolink.trim() === "" ||
      field.description.trim() === "" ||
      field.image === null
    ) {
      return setErrorMessage("Fields can't be empty");
    }
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("title", field.title);
      formData.append("sitelink", field.sitelink);
      formData.append("repolink", field.repolink);
      formData.append("image", field.image);
      formData.append("description", field.description);
      const { data } = await request.post("/api/v2/projects/create", formData);
      if (data.ok) {
        console.log(data);
        setIsLoading(false);
        navigate("/dashboard/projects");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      if (error?.response?.data?.message) {
        setErrorMessage(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <div className="create-project-page m-h-[100vh] bg-ofwhitecolor">
        <div className="container mx-auto px-2 py-20 w-full md:w-[50%]">
          <div className="header mb-[100px]">
            <h2 className="text-slate-900 font-bold mb-[20px] text-5xl md:text-7xl">
              Create project
            </h2>
            <div className="flex items-center gap-x-3 font-semibold">
              <Link className="text-slate-600" to={`/dashboard/projects`}>
                Projects
              </Link>
              <span className="text-slate-800">{"/"}</span>
              <span className="text-slate-800">Create project</span>
            </div>
          </div>
          <section className="create-project-form">
            {errorMessage && (
              <div className="px-2 py-3 bg-red-300 text-red-800 rounded-lg mb-10">
                {errorMessage}
              </div>
            )}
            <form onSubmit={createProjectFormHandler}>
              <div className="form-group mb-[15px]">
                <label
                  className="block mb-[10px] text-slate-800 font-bold"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="block w-full rounded-sm py-2 px-1 outline-none"
                  name="title"
                  id="title"
                  placeholder="Ecommerce"
                  onChange={(e) =>
                    setField({
                      ...field,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mb-[15px]">
                <label
                  className="block mb-[10px] text-slate-800 font-bold"
                  htmlFor="sitelink"
                >
                  Site link
                </label>
                <input
                  type="text"
                  className="block w-full rounded-sm py-2 px-1 outline-none"
                  name="sitelink"
                  id="sitelink"
                  placeholder="https://mern-stack-taager-clone-admin.vercel.app/"
                  onChange={(e) =>
                    setField({
                      ...field,
                      sitelink: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mb-[15px]">
                <label
                  className="block mb-[10px] text-slate-800 font-bold"
                  htmlFor="repolink"
                >
                  Repo link
                </label>
                <input
                  type="text"
                  className="block w-full rounded-sm py-2 px-1 outline-none"
                  name="repolink"
                  id="repolink"
                  placeholder="https://github.com/yousef1242/mern-stack-taager-clone-client"
                  onChange={(e) =>
                    setField({
                      ...field,
                      repolink: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mb-[15px]">
                <label
                  className="block mb-[10px] text-slate-800 font-bold"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  className="block w-full rounded-sm py-2 px-1 outline-none bg-white"
                  name="image"
                  id="image"
                  placeholder="Image"
                  onChange={(e) =>
                    setField({
                      ...field,
                      image: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="form-group mb-[15px]">
                <label
                  className="block mb-[10px] text-slate-800 font-bold"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  type="file"
                  className="block w-full rounded-sm py-2 px-1 outline-none bg-white"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={(e) =>
                    setField({
                      ...field,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <button
                disabled={isloading}
                className="w-full py-2 text-center text-white bg-maincolor mt-[20px] font-semibold"
              >
                {isloading ? <Loading /> : "Create"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
