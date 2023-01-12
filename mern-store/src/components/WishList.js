import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import cartImg from "./images/cart.png";
import serverURL, { axiosConfig } from "../globals";
import AddToCartModal from "./AddToCartModal";



function WishList(props) {
  const [products, setProducts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(-1);


  useEffect(() => {
    const url = serverURL + "/api/wish-list";
    axios.get(url, axiosConfig).then((response) => {
      setProducts(response.data);
      setIsUpdated(false);

    });
  }, [isUpdated]);

  function handleButtonCart(e) {
    setCurrentProductId(Number(e.target.name));
    setShowAddToCartModal(true);

  }

  function handleDelete(e) {
    const url = serverURL + "/api/wish-list/delete";
    const id = Number(e.target.name);
    axios.delete(url, { data: { product_id: id }, ...axiosConfig }).then((response) => {
      setIsUpdated(true);
    });
  }

  function closeModal() {
    setShowAddToCartModal(false);
  }

  const cart = products.map((product) => {
    return (<tr key={nanoid()} className="fs-5 align-middle">
      <td >
        <a href={`/products/${product.id}`}>
          <img className="img img-fluid m-1 ms-3" src={product.images_urls} alt={product.name} style={{ height: "15vh", width: "auto" }} />
        </a>

      </td>
      <td>{product.name}</td>
      <td>{product.price}$</td>
      <td>
        <div className="d-flex m-3">
          <button name={product.id} className="btn col-6 btn-danger me-2 w-50" onClick={handleButtonCart}>
            <img src={cartImg} className="img-fluid" style={{ maxWidth: "10%" }} alt={product.name} />
          </button>
          <button name={product.id} onClick={handleDelete} className="btn col-6 btn-dark me-2">delete</button>
        </div>
      </td>
    </tr>);
  });
  const emptyCart = <tr><td className="container mt-5 text-center"><p className="h1">Your wish list is empty</p></td><td></td><td></td></tr>;
  return (
    <>
      <AddToCartModal show={showAddToCartModal} productId={currentProductId} handleClose={closeModal} handleDelete={handleDelete} />
      {props.header}
      <h1 className="mt-4 mb-2 ms-4">WishList</h1>
      <div className="container d-flex align-items-center" style={{ minHeight: "60vh" }}>
        <table className="table table-striped text-center mt-1 h-50">
          <tbody>
            {products.length === 0 ? emptyCart : cart}
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
      {props.footer}
    </>
  );
}
export default WishList;