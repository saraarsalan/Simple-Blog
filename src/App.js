import "./App.css";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Single from "./screens/Single";
import Navs from "./components/nav";
import Footer from "./components/footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Blog/:slug" element={<Single />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
