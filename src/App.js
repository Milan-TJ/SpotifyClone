import "./App.css";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Notfound from "./components/Notfound";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/404" element={<Notfound />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
