import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Categories from './components/Categories';
import { useEffect, useState } from 'react';
import serverURL from './globals';

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = serverURL + '/api/categories';
    axios.get(url).then((response) => setCategories(response.data))
  }, []);


  const routes =
    <Routes>
      <Route path="/" element={<Home header={<Header />} footer={<Footer />} />} />
      <Route path="/categories" element={<Categories header={<Header />} footer={<Footer />} categories={categories} />} />
      {categories.map(category => {
        return <Route key={nanoid()} path={`/categories/${category.name}`}
          element={<Categories header={<Header />} footer={<Footer />} name={category.name} />} />
      })}
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
