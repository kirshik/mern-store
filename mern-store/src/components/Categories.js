import Category from "./Category";
import Filter from "./Filter";
import { nanoid } from 'nanoid';


function Categories(props) {
  const categories = props.categories ? props.categories.map(category => {
    return <Category key={nanoid()} addToWishList={props.addToWishList} name={category.name} id={category.id} addToCart={props.addToCart} setProductId={props.setProductId} />;
  }) : <></>;
  const body = props.categoryId ? <Category addToWishList={props.addToWishList} name={props.name} id={props.categoryId} noLimit addToCart={props.addToCart} setProductId={props.setProductId} /> : categories;

  return (
    <>
      {props.header}
      <div className="bg-light p-3 d-flex justify-content-center ">
        <div className="text-center">
          <h1>Looking for something else?</h1>
          <a className="btn btn-outline-dark" href="/search">Go and search!</a>
        </div>
      </div>
      {body}
      {props.footer}
    </>
  );
};
export default Categories;