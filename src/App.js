import "./App.css";
import Navbar from "./components/Navbar";
import Browse from "./components/Browse";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" Component={Browse}></Route>
        <Route path="/Cart" Component={Cart}></Route>
      </Routes>
    </div>
  );
}

export default App;
