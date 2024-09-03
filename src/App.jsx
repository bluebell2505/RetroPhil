import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer2 from "./components/Footer2/Footer2";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Card/Cards";
import About from './components/About/About';
import Companies from "./components/Companies/Companies";
import Signup from './pages/Signup/Signup'; 
import Login from './pages/Login/Login';
import ProductPage from './pages/OnStampClick/click'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductPage />} />

          {/* Add other routes here */}
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
              <Companies />
              <About />

            </>
          } />
        </Routes>
        <Footer2 />
      </div>
    </Router>
  );
}

export default App;
