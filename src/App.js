import React  from "react";
import { Footer, Navbar } from './components'
import { AboutMe, Projects } from './container'

import './App.css'

const App = () => (
  <div className="app-wrapper">
    <Navbar />
    <div className="content-wrapper">
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  </div>
)

export default App