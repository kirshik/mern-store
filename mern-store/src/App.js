import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Categories from './components/Categories';

function App() {
  const routes =
    <Routes>
      <Route path="/" element={<Home header={<Header />} footer={<Footer />} />} />
      <Route path="/categories" element={<Categories header={<Header />} footer={<Footer />} />} />
      <Route path="/categories/:category" element={<Categories header={<Header />} footer={<Footer />} name="boot " />} />
      <Route path="/about-us" element={<AboutUs header={<Header />} footer={<Footer />} />} />
      <Route path="/product" element={<Product header={<Header />} footer={<Footer />} />} />
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
