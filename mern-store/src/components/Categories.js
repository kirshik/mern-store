import Category from "./Category";
import Filter from "./Filter";
import { nanoid } from 'nanoid';


function Categories(props) {
  const categories = props.categories ? props.categories.map(category => {
    return <Category key={nanoid()} addToWishList={props.addToWishList} name={category.name} id={category.id} />;
  }) : <></>;
  const body = props.categoryId ? <Category addToWishList={props.addToWishList} name={props.name} id={props.categoryId} noLimit /> : categories;

  return (
    <>
      {props.header}
      <Filter name={props.name} categories={props.categories} />
      {body}
      {props.footer}
    </>
  );
};
export default Categories;