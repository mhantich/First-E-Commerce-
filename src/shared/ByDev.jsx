import React from 'react'

import { Stack } from "react-bootstrap";
function ByDev() {
    const currentYear = new Date().getFullYear();
  return (
    <div className="App">
    <Stack
      direction="horizontal"
      className="bg-dark mt-5 p-2"
      gap={1}
      style={{ justifyContent: "center", alignItems: "center" }}
    >

      <div className="text-white text-capitalize fs-7">
      <p className="mb-0">Copyright © {currentYear} by M.Mhantich</p>
      </div>
    </Stack>
  </div>
  )
}

export default ByDev