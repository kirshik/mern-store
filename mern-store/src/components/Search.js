import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import serverURL, { axiosConfig } from "../globals";
import CategoryItem from "./CategoryItem";
import { nanoid } from "nanoid";
import Filter from "./Filter";

function Search(props) {
  const [searchValue, setSearchValue] = useState(useLocation().search.slice(1));
  const [searchResultProducts, setSearchResultProducts] = useState([]);
  const [searchResultVisible, setSearchResultVisible] = useState("");
  const [searchResultProductsElement, setSearchResultProductsElement] = useState(<></>);

  useEffect(() => {
    getData();
    handleSearch();
  }, []);

  async function getData() {
    const url = serverURL + `/api/search/${searchValue}`;
    await axios.get(url, axiosConfig).then((response) => {
      setSearchResultProducts(response.data.products);
    })
  }


  function handleSearchValue(e) {
    setSearchValue(e.target.value);
    e.target.value === "" ? setSearchResultVisible("hide") :
      setSearchResultVisible("show");
    getData()
  }
  const searchResultProductsElements = searchResultProducts.length > 0 ? searchResultProducts.map((product) => {
    const name = product.name.length > 100 ? product.name.slice(0, 100) + "..." : product.name;
    return (
      <li> <a className="dropdown-item" href={`/products/${product.id}`}>
        <img className="img-fluid me-2 no-bg-img" style={{ height: "4vh" }} src={product.images_urls} alt="product picture" />
        {name}
      </a></li >
    );
  }) : <li className="m-2">No such products</li>;

  function chunkArray(arr, chunkSize) {
    let tempArr = [...arr];
    let chunks = [];
    while (tempArr.length) {
      chunks.push(tempArr.splice(0, chunkSize));
    }
    return chunks;
  }

  function handleSearch(e) {
    if (e) e.preventDefault();
    const length = searchResultProducts.length;
    if (length === 0) return setSearchResultProductsElement(<div className="m-2">No such products</div>);
    const chunks = chunkArray(searchResultProducts, 4);
    const searchResultProductsComponent = chunks.map((chunk) => {
      const chunkComponent = chunk.map((product) => {
        const name = product.name.length > 100 ? product.name.slice(0, 100) + "..." : product.name;
        return (
          <CategoryItem addToWishList={props.addToWishList}
            id={product.id} name={product.name} title={product.description}
            key={nanoid()} image={product.images_urls} />
        );
      });
      return (
        <div key={nanoid()} className="row g-4 mb-4">
          {chunkComponent}
        </div>
      );
    });
    setSearchResultProductsElement(searchResultProductsComponent);

  }



  return (
    <>
      {props.header}
      <Filter />
      <div className="container mt-3 mb-3" style={{ minHeight: "57vh" }} >

        <h1 className="display-4 mb-2">Search</h1>
        <div onBlur={() => { setSearchResultVisible("hidden") }}>
          <form className="d-flex m-4 input-group-lg" role="search">
            <input className="form-control me-2 " type="search" onChange={handleSearchValue} value={searchValue} placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="button" onClick={handleSearch}>Search</button>

          </form>
          <div className="dropdown d-flex mt-2 ms-3"  >
            <ul className={`dropdown-menu ${searchResultVisible}`} style={{ overflowX: "hidden", maxHeight: "60vh" }}>
              {searchResultProductsElements}
            </ul>
          </div>
        </div>
        <div className="mt-3">
          {searchResultProductsElement}
        </div>
      </div>
      {props.footer}
    </>
  );
}
export default Search;