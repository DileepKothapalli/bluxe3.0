import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index.js";
import { useEffect, useState } from "react";
// import Preloader from "./components/Preloader";
function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  // setLoading(true);
  // setTimeout(() => {
  // setLoading(false);
  //   }, 4000);
  // }, []);

  return (
    <Router>
      {/* {loading ? (
        <Preloader />
      ) : (
        
      )} */}
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
