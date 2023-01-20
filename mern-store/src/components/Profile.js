import axios from "axios";
import { useEffect, useState } from "react";
import serverURL, { axiosConfig } from "../globals";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Profile(props) {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({ firstName: "s", lastName: "s", email: "s", phone: "s" });
  const navigation = useNavigate();

  useEffect(() => {
    const url = serverURL + "/api/profile";
    const userURL = serverURL + "/api/user/";
    axios.get(url, axiosConfig).then((response) => {
      setOrders(response.data);
    });
    axios.get(userURL, axiosConfig).then((response) => {
      console.log(response.data)
      setUser(response.data);
    });
  }, []);

  function logOut(e) {
    e.preventDefault();
    const url = serverURL + "/api/sign-out";
    axios.get(url, axiosConfig).then((response) => {
      Cookies.remove("userID");
      navigation("/");
    }).catch(e => {
      swal({ icon: "error", text: "something went wrong" });
    });

  }

  function capitalizeFirstLetter(string) {
    return string ? string[0].toUpperCase() + string.slice(1) : "";
  }

  const ordersContent = orders.length > 0 ? orders.map((order) => {
    return (
      <tr>
        <td>{order.id}</td>
        <td>{order.date}</td>
        <td>{order.total}</td>
        <td>{order.status}</td>
        <td><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderDetailsModal" data-bs-id={order.id}>Details</button></td>
      </tr>
    )
  }) : <tr><td colSpan="5">No orders</td></tr>;



  return (
    <>
      {props.header}
      <div className="container mt-3">
        <div className="row ">
          <div className="col-3 profile-picture border rounded-3 ">
            <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid p-4" alt="profile" />
          </div>
          <div className="col-8 profile-info border rounded-3 ms-3 d-flex justify-content-center" style={{ flexDirection: "column" }}>
            <form className="form">
              <input className="form-control mb-3" value={capitalizeFirstLetter(user.first_name)} />
              <input className="form-control mb-3" value={capitalizeFirstLetter(user.last_name)} />
              <input className="form-control mb-3" value={user.email} />
              <input className="form-control mb-3" value={user.phone} />
              <button className="btn btn-success">Save</button>
              <button className="btn btn-secondary ms-2" onClick={logOut}>Log out</button>
            </form>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-11 border rounded-3">
            <h3>Orders</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersContent}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {props.footer}
    </>
  );
};
export default Profile;