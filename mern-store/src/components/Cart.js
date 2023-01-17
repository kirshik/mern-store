import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import serverURL, { axiosConfig } from "../globals";
import swal from "sweetalert";
import orderDetails from "./OrderDetails";
import OrderDetails from "./OrderDetails";


function Cart(props) {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState(new Map());
  const [total, setTotal] = useState(0);
  const [shipmentDetails, setShipmentDetails] = useState(new Map());

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
      <td><a href={`/products/${product.id}`}> <img className="img img-fluid m-1 no-bg-img" src={product.images_urls} alt={product.name} style={{ height: "15vh", width: "auto" }} /></a></td>
      <td><a className="text-black text-decoration-none" href={`/products/${product.id}`}>{product.name}</a></td>
      <td>{product.price}$</td>
      <td align="center"><input type="number" name={product.id} className="form-control m-0  w-50 text-center" min={1}
        value={quantities.get(product.id) ? quantities.get(product.id) : 1}
        onChange={handleInputChange}
        placeholder={product.quantity} /></td>
      <td ><button className="btn btn-danger me-3 ms-3" name={product.id} onClick={handleDelete}>Delete</button></td>
    </tr>);
  });
  const emptyCart = <tr><td className="container mt-5 text-center"><p className="h1">Your cart is empty</p></td><td></td><td></td><td></td></tr>;

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
        {<OrderDetails shipmentDetails={shipmentDetails} setShipmentDetails={setShipmentDetails} quantities={quantities} setProducts={setProducts} total={total} />}
      </div>
      {props.footer}
    </>
  );
}
export default Cart;