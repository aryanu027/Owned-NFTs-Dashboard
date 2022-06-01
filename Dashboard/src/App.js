import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Default from "./components/Default";
import Detailedpage from "./components/Detailedpage";
import Moneypage from "./components/Moneypage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="*" element={<Default />} />
        <Route path="/Detailedpage" element={<Detailedpage />} />
        <Route path="/Moneypage" element={<Moneypage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
