import { Category, SearchNormal1, Text } from "iconsax-react";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { getRecipesQuery } from "../redux/slice/RecipesSlice";

const Searchbar = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const dispatch = useDispatch();
  const debounceTitle = useDebounce(title, 300);
  const debounceCategory = useDebounce(category, 300);
  const debounceIng = useDebounce(ingredients, 300);

  useEffect(() => {
    dispatch(
      getRecipesQuery({
        title: debounceTitle,
        category: debounceCategory,
        ingredients: debounceIng,
      })
    );
  }, [dispatch, debounceTitle, debounceCategory, debounceIng]);

  return (
    <form className="w-full mx-auto">
      <label
        htmlFor="default-search"
        className="text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="flex gap-3">
        <div className="relative  w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Text size="20" color="#000" />
          </div>
          <input
            type="search"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 shadow-lg rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Search by title..."
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Category size="20" color="#000" />
          </div>
          <input
            type="search"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 shadow-lg rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Search by category..."
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchNormal1 size="20" color="#000" />
          </div>
          <input
            type="search"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 shadow-lg rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Search by ingredients..."
          />
          {/* <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2 bg-amber-400 hover:bg-emerald-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 transition ease-in-out delay-150 duration-300"
            onClick={(e) => {
              e.preventDefault();
            }}>
            Search
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
