import "./App.css";
import Navbar from "./components/layout/Navbar";
import Header from "../src/components/layout/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/layout/Footer";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Cartpage from "./pages/Cartpage";
import Checkoutpage from "./pages/Checkoutpage";
import OrderSuccess from "./pages/OrderSuccess";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ShopPage" element={<ShopPage />} />

          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/CartPage" element={<Cartpage />} />
          <Route path="/CheckoutPage" element={<Checkoutpage />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
