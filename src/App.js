import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Demo from "./Pages/Demo";
import Projects from "./Pages/Projects";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/demos" element={<Demo/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/*" element={<NoMatch/>}/>
        </Route>
      </Routes>
      </>
  );
}

export default App;
