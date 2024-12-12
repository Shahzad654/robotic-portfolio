import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import FreelanceProjects from "./pages/FreelanceProjects";
import OutletProjects from "./pages/OutletProjects";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ThemeButton from "./components/ThemeButton";
import Entrepreneurship from "./pages/Entrepreneurship";
import Freelance from "./components/Projects/Freelance";
import Experience from "./components/Experience/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Outlets from "./components/Projects/Outlets";
import ProjectNotFound from "./pages/ProjectNotFound";
import ExperienceNotFound from "./pages/ExperienceNotFound";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);


  return (
    <>
      <ThemeButton isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
     
      <BrowserRouter>
      <ScrollToTop>
        <Routes> 
          <Route path="/" element={<MainPage />} />
          <Route path="/freelance-projects" element={<FreelanceProjects />} />
          <Route path="/outlet-projects" element={<OutletProjects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship/> } />
          <Route path="/projects/:slug" element={<Freelance />} />
          <Route path="/outlet-projects/:slug" element={<Outlets/> } />
          <Route path="/experience/:slug" element={<Experience/> } />
          <Route path="/project-not-found" element={<ProjectNotFound/>} />
          <Route path="/experience-not-found" element={<ExperienceNotFound/> } />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>

    </>
  );
}

export default App;

