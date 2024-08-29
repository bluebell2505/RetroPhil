import Cards from "./components/Card/Cards";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Signup from './pages/Signup/Signup'; 

function App() {
  return (
    <div className="App">
      <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes here */}
      </Routes>
    </Router>

    <Hero />
    </div>
    
    <Cards />
    <Companies />
    <Footer />
    </div>
    
    
  );
}

export default App;
