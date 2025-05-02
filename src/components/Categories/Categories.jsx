import React, { use } from "react";
import { NavLink } from "react-router";
const categoiesPromise = fetch("/demo-data/categories.json").then((res) =>
  res.json()
);
function Categories() {
  const categories = use(categoiesPromise);
  return (
    <div>
      <h2 className="text-primary font-semibold">
        All Categoies ({categories.length})
      </h2>

      <ul className="mt-5">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className="max-w-[200px] block mb-1 py-2 px-7 text-accent hover:bg-base-300"
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
