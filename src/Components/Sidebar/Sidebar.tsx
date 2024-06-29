import { NavLink } from "react-router-dom";
import { categories } from "../../Constants/Constants";

const Sidebar = () => {
  return (
    <div className="col-3 d-flex flex-column gap-2 pt-3">
      <NavLink to="/">Все цитаты</NavLink>
      {categories.map((category) => (
        <NavLink key={category.id} to={`/quotes/${category.id}`}>{category.title}</NavLink>
      ))}
    </div>
  );
};
export default Sidebar;
