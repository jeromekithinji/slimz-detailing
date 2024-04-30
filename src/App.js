import logo from "./logo.svg";
import "./App.css";
import ContactNav from "./components/contactNav/contactNav";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import ContactFooter from "./components/contactFooter/contactFooter";
import HomePage from "./pages/homePage/homePage";
import ServicesPage from "./pages/servicesPage/servicesPage";
import GalleryPage from "./pages/galleryPage/galleryPage";
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App__header">
                    <ContactNav />
                    <NavBar />
                </div>
                <div className="App__content">
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
                </div>
                <div className="App__footer">
                    <ContactFooter />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
