import boots from "./images/product-1-big.jpg";
function CategoryItem(props) {
  return (
    <div className="card  ms-3 col" >
      <img src={boots} className="card-img-top " alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.title}</p>
        <div className="d-flex justify-content-center">

          <button className="btn col-6 btn-danger me-2">cart</button>

          <button className="btn  btn-dark">wishlist</button>

        </div>

      </div>
    </div>
  );
};
export default CategoryItem;