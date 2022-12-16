import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  const routes =
    <Routes>
      <Route path="/" element={<Home header={<Header />} footer={<Footer />} />} />
      <Route path="/about-us" element={<AboutUs header={<Header />} footer={<Footer />} />} />
    </Routes>
  return (
    <>
      <Router>
        {routes}
      </Router>
    </>
  );
}

export default App;
