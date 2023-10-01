import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokedexIdPage from "./pages/PokedexIdPage";
import { Route, Routes } from "react-router-dom";
import PokedexPage from "./pages/PokedexPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:id" element={<PokedexIdPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;