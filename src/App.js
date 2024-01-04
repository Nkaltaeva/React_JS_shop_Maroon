import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import CatalogProduct from "./components/pages/Catalog/CatalogProduct";
import MyCompany from "./components/pages/MyTitleCompany";
import Contacts from "./components/HomePage/Elements/Contacts";
import Product from "./components/pages/Product/Product";
import Authorization from "./components/pages/Authorization";
import Registration from "./components/pages/Registration";
import Error from "./components/pages/Error";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <div className="content-sheet">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/catalog" element={<CatalogProduct />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="/company" element={<MyCompany />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/сart" element={<Cart />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
