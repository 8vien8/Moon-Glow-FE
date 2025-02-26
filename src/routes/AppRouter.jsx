import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import Product from "../pages/Product";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;