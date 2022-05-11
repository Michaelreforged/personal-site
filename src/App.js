import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import GitHub from "./Pages/Github";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/github" element={<GitHub/>}/>
        <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
