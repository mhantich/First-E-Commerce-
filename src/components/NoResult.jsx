import React from "react";
import { LuSearchX } from "react-icons/lu";

function NoResult() {
  return (
    <div
      style={{ height: "60vh" }}
      className="w-100 py-5 text-center d-flex flex-column gap-5 justify-content-center align-items-center "
    >
      <h1 className="hero-title text-capitalize">no reslut found</h1>
      <LuSearchX className="fs-1  text-danger" />
    </div>
  );
}

export default NoResult;
