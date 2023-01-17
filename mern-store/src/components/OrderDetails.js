import axios from "axios";
import swal from "sweetalert";
import serverURL, { axiosConfig } from "../globals";


function OrderDetails(props) {

  function handleShipmentDetailsInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    const newShipmentDetails = new Map(props.shipmentDetails);
    newShipmentDetails.set(key, value);
    props.setShipmentDetails(newShipmentDetails);
  }
  function handleOrder(e) {
    e.preventDefault();
    const url = serverURL + "/api/order";
    const data = {
      shipment_details: Object.fromEntries(props.shipmentDetails),
      cart: Object.fromEntries(props.quantities),
      total: props.total
    };
    console.log("data", data);
    axios.post(url, data, axiosConfig).then((response) => {
      console.log(response);
      swal({ icon: "success", text: response.data });
      props.setProducts([]);
    }).catch((error) => {
      console.log(error);
      console.log(data);
      swal({ icon: "error", text: "order failed" });
    });
  };
  return (
    <div>
      <div className="container border rounded-5 m-3 mt-0 text-center" style={{ minWidth: "250px" }}>
        <p className="h2 mt-3">CART TOTALS</p>

        <div>
          <form className="form" autoComplete="off" id="formLogin" noValidate="" method="POST">

            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="country" name='country' onChange={handleShipmentDetailsInputChange} placeholder="Country" />
                <label htmlFor="country">Country</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="city" name='city' onChange={handleShipmentDetailsInputChange} placeholder="City" />
                <label htmlFor="city">City</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="street" name='street' onChange={handleShipmentDetailsInputChange} placeholder="Street" />
                <label htmlFor="street">Street</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="appartment" name='appartment' onChange={handleShipmentDetailsInputChange} placeholder="Appartment" />
                <label htmlFor="appartment">appartment</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="number" className="form-control" id="zip" name='zip-code' onChange={handleShipmentDetailsInputChange} placeholder="Zip" />
                <label htmlFor="zip">Zip</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="phone" className="form-control" id="phone" name='phone' onChange={handleShipmentDetailsInputChange} placeholder="Phone" />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="form-group ">
              <div className="d-flex justify-content-center align-items-center">
                <p>subtotal: </p>
                <p className="ms-2 text-center fw-bold">{props.total}$</p>
                <button className='btn btn-success m-3 mt-1 btn-lg' style={{ cursor: "pointer " }} onClick={handleOrder}>
                  Order
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
export default OrderDetails;