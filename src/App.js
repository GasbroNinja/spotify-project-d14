import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./components/Album";
import HomeSearch from "./components/HomeSearch";
import Artist from "./components/Artist";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSearch />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
