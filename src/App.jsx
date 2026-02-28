import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import PhotoResult from "./pages/PhotoResult";
import ChartPage from "./pages/ChartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<List />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/photo" element={<PhotoResult />} />
      <Route path="/chart" element={<ChartPage />} />
    </Routes>
  );
}

export default App;