import { useState } from "react";
import HeaderComponent from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import OpenSourceProjects from "./components/OpenSourceProjects";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Open Source",
      link: "#opensourceprojects",
    },
    {
      label: "Projects",
      link: "#projects",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <HeaderComponent links={data} />
      <Hero />
      <Projects />
      <OpenSourceProjects />
      <Contact />
    </>
  );
}

export default App;
