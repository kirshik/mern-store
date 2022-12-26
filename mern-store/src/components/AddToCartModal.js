import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import serverURL, { axiosConfig } from '../globals';
import cartImg from './images/cart.png';


function AddToCartModal(props) {

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  function handleInputChange(e) {
    setQuantity(e.target.value);
  }
  function handleChange(e) { }

  useEffect(() => {
    const url = serverURL + `/api/products/${props.productId}`
    axios.get(url).then((response) => {
      let newItem = response.data;
      if (newItem.description && newItem.description.length > 300) {
        newItem.description = newItem.description.slice(0, 300) + "...";
      }
      setProduct(newItem);
    });
  }, [props.productId]);

  function handleAdd(e) {
    const urlPOST = serverURL + "/api/cart";
    const data = {
      product_id: product.id,
      price: product.price,
      quantity: quantity
    };

    axios.post(urlPOST, data, axiosConfig).then((response) => {
      console.log(response);
      props.handleDelete(e);
      props.handleClose();
    });

  }

  return (
    <>
      <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header">
              {product.name}
            </div>
            <div className="card-body ">
              <div className='row g-0'>
                <div className='col-4'>
                  <img className='img-fluid w-50 rounded-start' src={product.images_urls} alt={product.name}></img>
                </div>
                <div className='col-8'>
                  <p className="card-text">{product.description}</p>
                  <div className='d-flex align-items-center'>
                    <div className="input-group ">
                      <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInputGroup1" min={0}
                          name='quantity' onChange={handleInputChange}
                          value={quantity}
                          required placeholder="Amount" />
                        <label htmlFor="floatingInputGroup1">Amount</label>
                      </div>
                    </div>
                    <button onClick={handleAdd} name={product.id} className="btn btn-danger ms-2 col-6" >
                      <img src={cartImg} className="img-fluid p-1 m-1" style={{ maxWidth: "15%" }} alt={product.name} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <form className="form" autoComplete="off" id="formLogin" noValidate="" method="POST">
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="number" className="form-control" id="floatingInputGroup1" name='quantity' onChange={handleInputChange} required placeholder="Amount" />
                <label htmlFor="floatingInputGroup1">Amount</label>
              </div>
            </div>
            <div className="form-group ">
              <button type="submit" className="btn btn-outline-danger float-right" id="btnLogin">Add to cart</button>
            </div>
          </form> */}
        </Modal.Body>
      </Modal>
    </>
  );

}
export default AddToCartModal;