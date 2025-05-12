import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import layouts
import MainLayout from "../layouts/MainLayout";

// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Events from "../pages/Events";
import Login from "../components/form/Login";
import AdminLayout from "../layouts/AdminLayout";

// Import components
import ProductDetails from "../components/product/details/ProductDetail";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/product/:id" element={<ProductDetails />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/events" element={<Events />} />
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin/dashboard" element={<AdminLayout />}>

                </Route>

            </Routes>
        </Router>
    )
}

export default AppRouter;