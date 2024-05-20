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
                        <Route index path="/slimz-detailing" element={<HomePage />} />
                        <Route path="/slimz-detailing/services" element={<ServicesPage />} />
                        <Route path="/slimz-detailing/gallery" element={<GalleryPage />} />
                        <Route path="/slimz-detailing/contact" element={<ContactPage />} />
                        <Route path="/slimz-detailing/review" element={<ReviewPage />} />
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
