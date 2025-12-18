import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProjects from "./components/AllProjects";
import colors from "./themes/colors";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: colors.background }}>
        <Navbar />

        <main>
          <Routes>
            {/* Home - Shows all sections with scroll */}
            <Route path="/" element={<Home />} />

            {/* All Projects Screen */}
            <Route path="/project/all" element={<AllProjects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
