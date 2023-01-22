import { useState } from "react";

function CategoryItem(props) {
  const [spinnerState, setSpinnerState] = useState(false)
  const [opacity, setOpacity] = useState("opacity-25")

  function handleImageLoaded(e) {
    setSpinnerState(true);
    setOpacity("");
  }

  function handleCart(e) {
    props.setProductId(props.id);
    props.addToCart();
  }

  return (

    <div className={`card  ms-3 col ${props.col} m-2 p-2 text-dark text-decoration-none`} >
      <div className="d-flex position-absolute top-50 start-50 " >
        <div className="spinner-border text-dark" hidden={spinnerState} role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
      <div className={opacity + "card border-0"} style={{ minHeight: "fit-content" }}>
        <a href={`/products/${props.id}`} className="img card-img-top m-2 rounded mx-auto d-block h-50">

          <img src={props.image} className="img card-img-top m-2 rounded mx-auto d-block " onLoad={handleImageLoaded} style={{ height: "30vh" }} alt={props.name} />
        </a >
        <div className="card-body pb-0">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.title.slice(1, 70) + "..."}</p>

          <div className="d-flex justify-content-center mb-2">
            <button className="btn col-6 btn-danger me-2" onClick={handleCart}>cart</button>
            <button className="btn  btn-dark" name={props.id} onClick={props.addToWishList}>wish list</button>
          </div>
        </div>
      </div>

    </div >
  );
};
export default CategoryItem;