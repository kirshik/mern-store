import Category from "./Category";
import Filter from "./Filter";
import { nanoid } from 'nanoid';


function Categories(props) {
  const categories = props.categories ? props.categories.map(category => {

    return <Category key={nanoid()} name={category.name} id={category.id} />;
  }) : <></>;
  const example = props.name ? <Category name={props.name} noLimit /> : categories;

  return (
    <>
      {props.header}
      <Filter name={props.name} categories={props.categories} />
      {example}
      {props.footer}
    </>
  );
};
export default Categories;