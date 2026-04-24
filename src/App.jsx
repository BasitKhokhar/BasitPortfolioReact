import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProjects from "./components/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import Background3D from "./components/Background3D";
import colors from "./themes/colors";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <Background3D />
        <Navbar />

        <main className="relative z-10">
          <Routes>
            {/* Home - Shows all sections with scroll */}
            <Route path="/" element={<Home />} />

            {/* All Projects Screen */}
            <Route path="/project/all" element={<AllProjects />} />

            {/* Project Detail Screen */}
            <Route path="/project/:type/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
