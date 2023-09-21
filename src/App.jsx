import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import AddPages from "./pages/AddPages";
import "./App.css";
import data from "./Data/data.json";
import { useState } from "react";

function App() {
  // const [data, setData] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/completed" element={<MainPages />} />
        <Route path="/uncompleted" element={<MainPages />} />
        <Route path="/add-pages" element={<AddPages />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
