import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";




function AppRoutes() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;