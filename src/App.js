import logo from './logo.svg';
import './App.css';
import ContactNav from './components/contactNav/contactNav';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import ContactFooter from './components/contactFooter/contactFooter';

function App() {
  return (
    <div className="App">
        <div className="App__header">
            <ContactNav />
            <NavBar />
        </div>
        <div className="App__content">

        </div>
        <div className="App__footer">
            <ContactFooter />
            <Footer />
        </div>
    </div>
  );
}

export default App;
