import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/" element={<Home />} /> {/* Ruta por defecto */}
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
