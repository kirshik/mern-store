import CategoryItem from "./CategoryItem";
import "./Category.css";
import { nanoid } from 'nanoid';
import axios from "axios";
import serverURL from "../globals";
import { useEffect, useState } from "react";

function Category(props) {
  const [topProducts, setTopProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = serverURL + `/api/top-products/${props.id}`;
    axios.get(url).then((response) => { setTopProducts(response.data) })
  }, [topProducts]);



  const exampleTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ."
  const seeMoreBtn = <a className="btn btn-outline-dark btn-sm ms-2 col-1 fs-5 d-flex justify-content-center" href={`categories/${props.name}`}>
    <span className="align-self-center">{">"}</span></a>;
  const category = props.noLimit ? <>
    <div className="row justify-content-between m-2">
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
    </div>
    <div className="row justify-content-between m-2">
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
    </div>
    <div className="row justify-content-between m-2">
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
      <CategoryItem name="boots" title={exampleTitle} />
    </div>
  </> : <>
    <div className="row justify-content-between m-2">
      {topProducts.map(product => {
        return <CategoryItem name={product.name} title={product.description} key={nanoid()} image={product.images_urls} />
      })}
      {seeMoreBtn}
    </div>
  </>;
  return (
    <div className="container m-4">
      <a className="h3 mb-3 font-monospace text-black" href={`categories/${props.name}`}>{props.name}</a>
      {category}
    </div>
  );
};
export default Category;