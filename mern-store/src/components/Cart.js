import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import serverURL, { axiosConfig } from "../globals";
import swal from "sweetalert";


function Cart(props) {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState(new Map());
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const url = serverURL + "/api/cart";
    axios.get(url, axiosConfig).then((response) => {
      const data = response.data.cart;
      setQuantities(new Map(data.map((detail) => [detail.id, detail.quantity])));
      setProducts(data);
      setTotal(response.data.total);
    });
  }, []);

  function handleInputChange(e) {
    const id = e.target.name;
    const quantity = e.target.value;
    const newQuantities = new Map(quantities);
    newQuantities.set(Number(id), Number(quantity));
    setQuantities(newQuantities);
    console.log(quantities)
  }

  function handleDelete(e) {
    const id = e.target.name;
    const url = serverURL + "/api/cart/delete";
    axios.delete(url, { data: { product_id: id }, ...axiosConfig }).then((response) => {
      console.log(response);
      const newProducts = products.filter((product) => product.id !== Number(id));
      setProducts(newProducts);
    }).catch((error) => {
      console.log(error);
      swal({ icon: "error", text: error.response.data });
    });
  }

  const cart = products.map((product) => {
    return (<tr key={nanoid()} className="fs-5 align-middle">
      <td><img className="img img-fluid m-1" src={product.images_urls} alt={product.name} style={{ height: "15vh", width: "auto" }} /></td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td align="center"><input type="number" name={product.id} className="form-control m-0  w-25" min={1}
        value={quantities.get(product.id) ? quantities.get(product.id) : 1}
        onChange={handleInputChange}
        placeholder={product.quantity} /></td>
      <td ><button className="btn btn-danger me-3 ms-3" name={product.id} onClick={handleDelete}>Delete</button></td>
    </tr>);
  });
  const emptyCart = <tr><td className="container mt-5 text-center"><p className="h1">Your cart is empty</p></td><td></td><td></td><td></td></tr>;
  const orderDetails = <div>
    <div className="container " style={{ minWidth: "20%" }}>
      <p className="h2">CART TOTALS</p>
      <div className="d-flex">
        <p>subtotal</p>
        <p className="ms-5">{total}$</p>
      </div>

    </div>
  </div>;
  return (
    <>
      {props.header}
      <h1 className="mt-4 mb-2 ms-4">Cart</h1>
      <div className="container d-flex" style={{ minHeight: "60vh" }}>
        <table className="table table-striped text-center">
          <thead className="">
            <tr >
              <th></th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? emptyCart : cart}
          </tbody>
          <tfoot>
          </tfoot>
        </table>
        {orderDetails}
      </div>
      {props.footer}
    </>
  );
}
export default Cart;