import HeroBanner from "./components/HeroBanner/HeroBanner";
import Informacion from "./components/Informacion/Informacion";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import Footer from "./components/Footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeroBanner />
        <NavBar />

        <Routes>
          <Route
            path="/" element={<>
                <PromoBanner />
                <ItemListContainer />
              </>
            }
          />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          <Route path="/informacion" element={<Informacion/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
