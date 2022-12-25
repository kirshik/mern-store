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
import Cookies from 'js-cookie';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import Cart from './components/Cart';
import Profile from './components/Profile';
import WishList from './components/WishList';

function App() {
  const [categories, setCategories] = useState([]);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [ids, setIds] = useState([]);

  const handleShowSignInModalClose = () => setShowSignInModal(false);
  const handleShowSignInModalShow = () => setShowSignInModal(true);

  const handleShowSignUpModalClose = () => setShowSignUpModal(false);
  const handleShowSignUpModalShow = () => setShowSignUpModal(true);

  function handleUnregestredHeader(e) {
    if (Cookies.get("userID")) {
      setIsSignIn(true);
    } else {
      e.preventDefault();
      setShowSignInModal(true);

    }
  }

  function getProductCategory(id) {
    const category = categories.find(category => category.id === id);
    return category ? category.name : "No category";
  }


  useEffect(() => {
    const url = serverURL + '/api/categories';
    axios.get(url).then((response) => setCategories(response.data));
  }, []);
  useEffect(() => {
    const url = serverURL + '/api/categories';
    axios.get(url).then((response) => setCategories(response.data));
  }, []);
  useEffect(() => {
    const url = serverURL + '/api/products-ids';
    axios.get(url).then((response) => setIds(response.data));
  }, []);

  const header = <Header handleUnregestred={handleUnregestredHeader} />;
  const footer = <Footer />;

  const routes =
    <Routes>
      <Route path="/" element={<Home header={header} footer={footer} categories={categories} />} />
      <Route path="/categories" element={<Categories header={header} footer={footer} categories={categories} />} />
      <Route path="/about-us" element={<AboutUs header={header} footer={footer} />} />

      <Route path="/cart" element={<Cart header={header} footer={footer} />} />
      <Route path="/wishlist" element={<WishList header={header} footer={footer} />} />
      <Route path="/profile" element={<Profile header={header} footer={footer} />} />


      {categories.map(category => {
        return <Route key={nanoid()} path={`/categories/${category.name}`}
          element={<Categories header={header} footer={footer} name={category.name} categoryId={category.id} />} />
      })}
      {ids.map(id => {
        return <Route key={nanoid()} path={`/products/${id}`}
          element={<Product header={header} id={id} getCategory={getProductCategory} footer={footer} />} />
      })}

    </Routes>
  return (
    <>
      <SignInModal show={showSignInModal} handleClose={handleShowSignInModalClose} handleShow={handleShowSignInModalShow} handleChange={handleShowSignUpModalShow} />
      <SignUpModal show={showSignUpModal} handleClose={handleShowSignUpModalClose} handleShow={handleShowSignUpModalShow} handleChange={handleShowSignInModalShow} />
      <Router>
        {routes}
      </Router>
    </>
  );
}

export default App;
