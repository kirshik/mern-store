
function CategoryItem(props) {
  return (
    <a href={`/products/${props.id}`} className={`card  ms-3 col ${props.col} m-2 text-dark text-decoration-none`} >
      <img src={props.image} className="card-img-top m-2 rounded mx-auto d-block h-50" alt={props.name} />
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.title.slice(1, 70) + "..."}</p>

        <div className="d-flex justify-content-center mb-2">
          <button className="btn col-6 btn-danger me-2">cart</button>
          <button className="btn  btn-dark">wishlist</button>
        </div>
      </div>
    </a>
  );
};
export default CategoryItem;