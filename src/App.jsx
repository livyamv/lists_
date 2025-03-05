import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEvents from "./pages/listEvents";
import Login from "./pages/login"
import Cadastro from "./pages/cadastro";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/events" element={<ListEvents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
