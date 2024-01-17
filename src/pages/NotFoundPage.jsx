import React from "react";
import notFoundImage from "../images/404 error with person looking for-bro.svg";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page min-h-[100vh] bg-ofwhitecolor">
      <div className="container px-2 mx-auto h-full py-20 pb-10">
        <div className="not-found-page-content">
          <div className="not-found-page-content-image mb-[25px] flex justify-center">
            <img className="w-[700px]" src={notFoundImage} loading="lazy" alt="404-img" />
          </div>
          <div className="not-found-page-content-body">
            <p className="font-bold mb-[20px] text-center text-2xl">
              The page you are looking for might be in another castle.
            </p>
            <div className="flex justify-center">
              <Link to={`/`} className="bg-maincolor py-2 px-4 text-white block">Return to home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
