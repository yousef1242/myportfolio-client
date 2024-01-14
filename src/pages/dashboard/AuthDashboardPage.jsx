import React, { useState } from "react";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export default function AuthDashboardPage() {
  const [error, setError] = useState({
    emailError: "",
    passordError: "",
  });
  const [field, setField] = useState({
    email: "",
    passord: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // email and password from .env file
  const dashboardEmail = process.env.REACT_APP_DASHBOARD_EMAIL;
  const dashboardPassword = process.env.REACT_APP_DASHBOARD_PASSWORD;

  // loading form handler
  const loginFormHandler = (e) => {
    e.preventDefault();

    // Reset errors
    setError({
      emailError: "",
      passordError: "",
    });

    // Email validation
    if (field.email.trim() === "") {
      return setError((prevErrors) => ({
        ...prevErrors,
        emailError: "Email can't be empty",
      }));
    }

    if (field.email !== dashboardEmail) {
      return setError((prevErrors) => ({
        ...prevErrors,
        emailError: "Email doesn't exist",
      }));
    }

    // Password validation
    if (field.passord.trim() === "") {
      return setError((prevErrors) => ({
        ...prevErrors,
        passordError: "Password can't be empty",
      }));
    }

    if (field.passord !== dashboardPassword) {
      return setError((prevErrors) => ({
        ...prevErrors,
        passordError: "Password doesn't match",
      }));
    }

    // Successful login
    setLoading(true);
    setTimeout(() => {
      // back loading false
      setLoading(false);
      // set success login field in localStorage
      localStorage.setItem("successLogin", JSON.stringify(true));
      // navigate to dahsboard/projects
      navigate("/dashboard/projects");
    }, 3000);
  };

  return (
    <div className="auth-dashboard-page h-[100vh] flex items-center bg-ofwhitecolor">
      <div className="container mx-auto px-2 w-full md:w-[50%]">
        <form onSubmit={loginFormHandler}>
          <div className="form-group mb-[15px]">
            <label
              className="block mb-[10px] text-slate-800 font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setField((prevField) => ({
                  ...prevField,
                  email: e.target.value,
                }))
              }
              type="email"
              className="block w-full rounded-sm py-2 px-1 outline-none"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            {error.emailError && (
              <div className="mt-3 text-red-800">{error.emailError}</div>
            )}
          </div>
          <div className="form-group mb-[15px]">
            <label
              className="block mb-[10px] text-slate-800 font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setField((prevField) => ({
                  ...prevField,
                  passord: e.target.value,
                }))
              }
              type="password"
              className="block w-full rounded-sm py-2 px-1 outline-none"
              name="password"
              id="password"
              placeholder="....................."
            />
            {error.passordError && (
              <div className="mt-3 text-red-800">{error.passordError}</div>
            )}
          </div>
          <button
            disabled={loading}
            className="font-semibold mt-[20px] text-white bg-maincolor py-[7px] rounded-md text-center w-full"
          >
            {loading ? <Loading /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
