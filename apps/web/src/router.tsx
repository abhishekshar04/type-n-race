import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Practice from "./pages/Practice";
import Compete from "./pages/Compete";
import Room from "./pages/Room";

export const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/practice", element: <Practice /> },
  { path: "/compete", element: <Compete /> },
  { path: "/room/:roomId", element: <Room /> }
]);
