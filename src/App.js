import React, { useState, useRef } from "react";
import { Cv, Footer, Navbar } from "./components";
import { AboutMe, Projects } from "./container";
import { useReactToPrint } from "react-to-print";

import "./App.css";

const App = () => {
  const [showCv, changeShowCv] = useState(false);

  const toggleShowCv = () => {
    changeShowCv(!showCv);
    window.scrollTo(0, 0);
  };

  const componentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "HubertKwiatkowskiCV",
  });

  return (
    <div className="app-wrapper">
      {!showCv && (
        <div className="portfolio">
          <Navbar onChangeShow={toggleShowCv} />
          <div className="content-wrapper">
            <AboutMe />
            <Projects />
            <Footer />
          </div>
        </div>
      )}
      {showCv && (
        <div className="show-cv-wrapper">
          <div
            ref={componentPDF}
            style={{
              width: "100%",
            }}
          >
            <Cv />
          </div>

          <div className="btn-wrapper">
            <button className="btn" onClick={generatePDF}>
              PDF
            </button>
            <button className="btn close-modal" onClick={toggleShowCv}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
