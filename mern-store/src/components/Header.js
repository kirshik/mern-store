import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import serverURL, { axiosConfig } from "../globals";
import "./Header.css"
function Header(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResultProducts, setSearchResultProducts] = useState([]);
  const [searchResultCategories, setSearchResultCategories] = useState([]);
  const [searchResultVisible, setSearchResultVisible] = useState("");
  const navigation = useNavigate();

  function handleUnregestred(e) {
    props.handleUnregestred(e);
  }
  function handleSearchValue(e) {
    setSearchValue(e.target.value);
    e.target.value === "" ? setSearchResultVisible("hide") :
      setSearchResultVisible("show");
    const url = serverURL + `/api/search/${e.target.value}`;
    axios.get(url, axiosConfig).then((response) => {
      setSearchResultProducts(response.data.products); setSearchResultCategories(response.data.categories)
    })

  }

  function handleSearch(e) {
    e.preventDefault();
    navigation(`/search?${searchValue}`);
  }
  const searchResultProductsElements = searchResultProducts.map((product) => {
    const name = product.name.length > 20 ? product.name.slice(0, 20) + "..." : product.name;
    return (
      <li><a className="dropdown-item" href={`/products/${product.id}`}>
        <img className="img-fluid me-2 no-bg-img" style={{ height: "4vh" }} src={product.images_urls} alt="product picture" />
        {name}
      </a></li>
    );
  });
  const searchResultCategoriesElements = searchResultCategories.map((category) => {
    return (
      <li><a className="dropdown-item" href={`/categories/${category.name}`}>{category.name}</a></li>
    );
  });
  const divider = function () {
    if (searchResultProducts.length > 0 && searchResultCategories.length > 0) {
      return <div class="dropdown-divider"></div>
    } else if (searchResultProducts.length > 0 || searchResultCategories.length > 0) {
      return <></>;
    } else {
      return <li className="m-2">No such products or category</li>;
    }
  }();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Electro</a>
          <div className="nav-element-container">
            <form className="d-flex me-3 ms-3" role="search">

              <div className="dropdown d-flex" onBlur={() => { setSearchResultVisible("hidden") }} >
                <input className="form-control me-2 " type="search" onChange={handleSearchValue} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" onClick={handleSearch}>Search</button>
                <ul className={`dropdown-menu ${searchResultVisible} pe-1 `}
                  role="menu"
                  style={{ marginTop: "14%", overflowX: "hidden", maxHeight: "60vh" }}>
                  {searchResultProductsElements}
                  {divider}
                  {searchResultCategoriesElements}

                </ul>
              </div>
            </form>


            <a className="picture-link" href="/wishlist" onClick={handleUnregestred}><img alt="wishlist" src={require("./images/wishlist.png")} /></a>
            <a className="picture-link" href="/cart" onClick={handleUnregestred}><img alt="cart" src={require("./images/cart.png")} /></a>
            <a className="picture-link me-3" href="/profile" onClick={handleUnregestred}><img alt="profile" src={require("./images/profile.png")} /></a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;