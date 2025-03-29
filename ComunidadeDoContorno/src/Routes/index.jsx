import { Route, Routes } from "react-router-dom";
import Referencias from "../pages/Referencias";
import LinhaDoTempo from "../pages/LinhaDoTempo";
import Home from "../pages/Home";
import TimeLineDetails from "../pages/TimeLineDetails";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/LinhaDoTempo" element={<LinhaDoTempo />} />
        <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />
        <Route path="/linha-do-tempo/:id" element={<TimeLineDetails />} />  
      </Routes>
    </>
  );
}
