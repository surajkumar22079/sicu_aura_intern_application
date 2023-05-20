import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home_page from "./Components/Home_page";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home_page/>
      <Footer/>
    </div>
  );
}

export default App;
