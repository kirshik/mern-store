import axios from "axios";
import { useEffect, useState } from "react";
import serverURL, { axiosConfig } from "../globals";
import Cookies from 'js-cookie';

function Profile(props) {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({ firstName: "s", lastName: "s", email: "s", phone: "s" });
  useEffect(() => {
    const url = serverURL + "/api/profile";
    const userURL = serverURL + "/api/user";
    axios.get(url, axiosConfig).then((response) => {
      setOrders(response.data);
    });
    axios.get(url, axiosConfig).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <>
      {props.header}
      <div className="container">
        <div className="row">
          <div className="col-5 profile-picture">
            <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid" alt="profile" />
          </div>
          <div className="col-7 profile-info">
            <h1>{user.firstName}</h1>
            <h2>{user.lastName}</h2>
            <h3>{user.email}</h3>
            <h4>{user.phone}</h4>


          </div>
        </div>
      </div>
      {props.footer}
    </>
  );
};
export default Profile;