import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import nestedRouter from "./nestedRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CustomRouter /> */}
    <RouterProvider router={nestedRouter} />
  </StrictMode>
);
