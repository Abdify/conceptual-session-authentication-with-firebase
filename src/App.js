import { Route, Routes } from "react-router-dom";
import "./App.css";
import Generator from "./components/Generator/Generator";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/generator" element={<Generator />} />
            </Routes>
        </div>
    );
}

export default App;
