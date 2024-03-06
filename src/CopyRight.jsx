import React from "react";
import { Stack } from "react-bootstrap";

function CopyRight() {
    const currentYear = new Date().getFullYear();
  return (
    <div className="App">
      <Stack
        direction="horizontal"
        className="bg-dark mb-2 p-2"
        gap={1}
        style={{ justifyContent: "center", alignItems: "center" }}
      >

        <p className="text-white text-capitalize fs-7">
        <p className="mb-0">Copyright © {currentYear} by M.Mhantich</p>
        </p>
      </Stack>
    </div>
  );
}

export default CopyRight;
