import HeroSection from "./components/layout/HeroSection"
import SkillsSection from "./components/layout/SkillsSection"
import HobbiesSection from "./components/layout/HobbiesSection"
// import ContactSection from "./components/layout/ContactSection"

import "./styles/App.css"

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <main className="container">
          <HeroSection />
          <SkillsSection />
          <HobbiesSection />
        </main>
      </div>
    </div>
  )
}

export default App

