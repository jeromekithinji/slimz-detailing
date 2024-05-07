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
import ContactPage from "./pages/contactPage/contactPage";
import ReviewPage from "./pages/reviewPage/reviewPage";
import ReviewButton from "./components/reviewButton/reviewButton";


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
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/review" element={<ReviewPage />} />
                    </Routes>
                    <ReviewButton />
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
