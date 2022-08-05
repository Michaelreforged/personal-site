import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Demo from "./Pages/Demo";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/demos" element={<Demo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NoMatch/>}/>
        </Route>
      </Routes>
      </>
  );
}

export default App;
