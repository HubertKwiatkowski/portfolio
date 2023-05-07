import React  from "react";
import { Footer, Navbar } from './components'
import { AboutMe, Projects } from './container'

import './App.css'

const App = () => (
  <div>
    <Navbar />
    <AboutMe />
    <Projects />
    <Footer />
  </div>
)

export default App