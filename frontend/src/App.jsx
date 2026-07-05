import { BrowserRouter } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
