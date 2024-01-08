import "./App.css";
import Navbardata from "./Components/Navbar";
import HomeData from "./Components/Home";
import AboutMe from "./Components/About";
import Education from "./Components/Education";
import SkillsComponent from "./Components/Skills";
import Expertise from "./Components/Expertise";
import Project from "./Components/Projects";

import ContactForm from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbardata />
      <HomeData />
      <br />
      <AboutMe />
      <br />
      <Education />
      <br />
      <SkillsComponent />
      <br />
      <Expertise />
      <br />
      <Project />
      <br />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
