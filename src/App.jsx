import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/home/Home";
import { Habilities } from "./components/hability/Habilities";
import { Testimony } from "./components/testimony/Testimony";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/habilidades" element={ <Habilities/> } ></Route>
        <Route path="/testimonios" element={ <Testimony/> } ></Route>
        <Route path="/contacto" element={ <Contact/> } ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
