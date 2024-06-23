import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeadDiv from "./components/headDiv";
import Store from "./components/Store";
import LLogin from "./components/LLogin";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <HeadDiv />
      {/* <LLogin /> */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<LLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
