import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import "./styles/FilterCategory.css";

const FilterCategory = () => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
  const baseUrl = BASE_URL;
  const [categories, getAllCategories] = useFetch(baseUrl);
  const dispatach = useDispatch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleFilterCategory = (id) => {
    if (id) {
      const url = `${baseUrl}/products?categoryId=${id}`;
      dispatach(getAllProductsThunk(url));
    } else {
      dispatach(getAllProductsThunk());
    }
  };

  return (
    <article className="filterCategory">
      <h3>Category</h3>
      <ul className="filterCategory_items">
        <li
          className="filterCategory_item"
          onClick={() => handleFilterCategory()}
        >
          All categories
        </li>
        {categories?.map((category) => (
          <li
            className="filterCategory_item"
            onClick={() => handleFilterCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
