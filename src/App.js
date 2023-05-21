import React, { useState } from "react";
import { Cv, Footer, Navbar } from "./components";
import { AboutMe, Projects } from "./container";

import "./App.css";

const App = () => {
  const [showCv, changeShowCv] = useState(false);

  const toggleShowCv = () => {
    changeShowCv(!showCv);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-wrapper">
      {!showCv && <Navbar onChangeShow={toggleShowCv} />}
      {showCv && (
        <div className="btn-wrapper">
          <button className="btn close-modal" onClick={() => {}}>
            PDF
          </button>
          <button className="btn close-modal" onClick={toggleShowCv}>
            Close
          </button>
        </div>
      )}

      {!showCv && (
        <div>
          <div className="content-wrapper">
            <AboutMe />
            <Projects />
            <Footer />
          </div>
        </div>
      )}
      {showCv && <Cv />}
    </div>
  );
};

export default App;
