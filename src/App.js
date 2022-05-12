import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
