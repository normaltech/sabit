import React from "react";
import "bulma/css/bulma.min.css";
import Navbar from "component/navbar/Navbar";
import Menu from "component/menu/Menu";
import Main from "component/main/Main";

import "./app.css";
import Footer from "component/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="middle">
        <Menu />
        <Main />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
