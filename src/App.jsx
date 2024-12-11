import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <ScrollToTop />
        <Routes> 
          <Route path="/" element={<MainPage />} />
          <Route path="/freelance-projects" element={<FreelanceProjects />} />
          <Route path="/outlet-projects" element={<OutletProjects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship/> } />
          {/* <Route path="/projects" element={<Freelance/> } /> */}
          <Route path="/projects/:title" element={<Freelance />} />
          <Route path="/experience/:title" element={<Experience/> } />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

