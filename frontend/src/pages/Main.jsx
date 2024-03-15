import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getRecipesParams } from "../redux/slice/RecipesSlice";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Main = () => {
  const [order, setOrder] = useState("");

  const recipes = useSelector((state) => state?.recipes?.data?.recipes);
  const error = useSelector((state) => state?.recipes?.error);
  const loading = useSelector((state) => state?.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (order) {
      dispatch(getRecipesParams(order));
    }
  }, [dispatch, order]);

  return (
    <div className="flex lg:w-[80%] md:w-[70%] w-[90%] ms-auto">
      <main className="flex-1">
        <section className="p-4">
          <Searchbar />
        </section>
        <section className="p-4 pt-0">
          {loading ? (
            <Loading />
          ) : error ? (
            <p>Hata</p>
          ) : recipes && recipes.length > 0 ? (
            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg text-gray-400">
                  Total {recipes.length} found recipe.
                </p>

                <form className="">
                  <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="asc">Asc</option>
                    <option value="desc">Dsc</option>
                  </select>
                </form>
              </div>
              {recipes.map((recipe) => (
                <Card key={recipe?.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center mb-6 text-lg text-gray-400">
                Üzgünüz, bulunamadı.
              </p>
              <Loading />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Main;
