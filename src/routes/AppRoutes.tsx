import { Route, Routes } from "react-router";
import { Home } from "../pages/Home.tsx";
import { About } from "@/pages/About.tsx";
import { Projects } from "@/pages/Projects.tsx";

const AppRoutes: React.FC= ()=>{
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  )
}
export default AppRoutes
