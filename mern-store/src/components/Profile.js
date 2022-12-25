import axios from "axios";
import { useEffect, useState } from "react";
import serverURL, { axiosConfig } from "../globals";

function Profile(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = serverURL + "/api/profile";
    axios.get(url, axiosConfig).then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      {props.header}
      {props.footer}
    </>
  );
};
export default Profile;