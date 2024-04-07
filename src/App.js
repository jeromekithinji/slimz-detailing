import logo from './logo.svg';
import './App.css';
import ContactNav from './components/contactNav/contactNav';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import ContactFooter from './components/contactFooter/contactFooter';
import HomePage from './pages/homePage/homePage';
import ServicesPage from './pages/servicesPage/servicesPage';
import GalleryPage from './pages/galleryPage/galleryPage';

function App() {
  return (
    <div className="App">
        <div className="App__header">
            <ContactNav />
            <NavBar />
        </div>
        <div className="App__content">
            {/* <HomePage /> */}
            {/* <ServicesPage /> */}
            <GalleryPage />
        </div>
        <div className="App__footer">
            <ContactFooter />
            <Footer />
        </div>
    </div>
  );
}

export default App;
