
function CategoryItem(props) {

  return (
    <div className={`card  ms-3 col ${props.col} m-2 p-2 text-dark text-decoration-none`} >
      <a href={`/products/${props.id}`} className="img card-img-top m-2 rounded mx-auto d-block h-50">
        <img src={props.image} className="img card-img-top m-2 rounded mx-auto d-block " style={{ height: "30vh" }} alt={props.name} />
      </a>
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.title.slice(1, 70) + "..."}</p>

        <div className="d-flex justify-content-center mb-2">
          <button className="btn col-6 btn-danger me-2">cart</button>
          <button className="btn  btn-dark" name={props.id} onClick={props.addToWishList}>wish list</button>
        </div>
      </div>
    </div>
  );
};
export default CategoryItem;