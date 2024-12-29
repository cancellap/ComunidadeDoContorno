import { Route, Routes } from "react-router-dom";
import Referencias from "../pages/Referencias";
import LinhaDoTempo from "../pages/LinhaDoTempo";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/LinhaDoTempo" element={<LinhaDoTempo />} />
      </Routes>
    </>
  );
}
