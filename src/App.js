import logo from './logo.svg';
import './App.css';
// import Calculator1 from './components/Calculator1';
// import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import AllRouter from './components/AllRouter';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
     {/* <Calculator1  /> */}
     {/* <Calculator  /> */}
     {/* <Contacts /> */}
     <Navbar />
    <AllRouter />
    <Footer />
    </div>
  );
}

export default App;
