import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { UserProvider } from "./Components/UserProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>
);
// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
