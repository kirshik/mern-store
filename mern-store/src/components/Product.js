import axios from "axios";
import { useEffect, useState } from "react";
import serverURL from "../globals";
import star_unfilled from "./images/star.svg";
import star_fill from "./images/star_fill.svg";
import { nanoid } from "nanoid";


function Product(props) {

  const [number, setNumber] = useState(1);
  const [product, setProduct] = useState({});

  const handleNumberChange = (e) => { setNumber(e.target.value) };
  useEffect(() => {
    const url = serverURL + `/api/products/${props.id}`;
    axios.get(url).then((response) => { setProduct(response.data); })
  }, []);

  const stars = <div className="d-flex">
    {[...Array(5).keys()].map((star) => {
      const src = (star < product.rating) ? star_fill : star_unfilled;
      return <img key={nanoid()} src={src} alt={product.name}></img>
    })}
  </div>;
  return (
    <>
      {props.header}
      <div className="container mt-5 mb-5">
        <div className="row d-flex">
          <div className="col-4">
            <img src={product.images_urls} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-7 ms-5">
            <p className="h3 fs-2">{product.name}</p>
            {stars}
            <p className="fs-2 fw-bold font-monospace m-1 mt-3">{`$${product.price}`}</p>
            <p className="p fs-5">{product.description}</p>
            <div className="">
              <p className="h5">SKU: <span className="fw-bold">{product.id}</span></p>
              <p className="h5">Category: <span className="fw-bold">{props.getCategory(product.category_id)}</span></p>
            </div>
            <div className="m-3 w-100 text-dark border-top border-2 border-dark"></div>
            <div className="d-flex justify-content-end m-4">
              <div className="input-group me-3 w-50">
                <div className="input-group-prepend ">
                  <span className="input-group-text h-100">Number</span>
                </div>
                <input type="number"
                  value={number}
                  disabled={product.is_in_storage ? false : true} min={0} max={100}
                  className="form-control "
                  aria-label="Dollar amount (with dot and two decimal places)"
                  onChange={handleNumberChange}
                />
              </div>
              <button className="btn btn-danger me-2">Add to Cart</button>
              <button className="btn  btn-dark">Add to Wishlist</button>
            </div>
          </div>
        </div>


      </div>
      {props.footer}
    </>
  );
};
export default Product;