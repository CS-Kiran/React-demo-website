import { useState } from "react";
import "./App.css";
 import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // state for alerts

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // setting timeout
    setTimeout(() => {
      setAlert(null, null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const tooglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="CUBE" mode={mode} toogleMode={tooglemode} />
      <Alert alert={alert} />
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextForm Heading="Enter Text to Analyze below" mode={mode}/>}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
      </div>

      {/* name here will be passed as props
         <Navbar title="CUBE" mode={mode} toogleMode={tooglemode} />
        <Alert alert={alert} />
        <br /> 

      <TextForm Heading="Enter Text to Analyze below" mode={mode}/> 
       <About /> */}
    </>
  );
}

export default App;
