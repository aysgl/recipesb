import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRecipes, getRecipesId } from "../redux/slice/RecipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Timer1 } from "iconsax-react";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const recipe = useSelector((state) => state?.recipes?.data?.recipe);
  const loading = useSelector((state) => state?.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecipesId(id));
  }, [dispatch, id]);

  return (
    <div className="p-4 lg:w-[80%] md:w-[70%] w-[90%] ms-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className="group flex flex-col items-center bg-white rounded-lg shadow-lg mb-4">
          {recipe && (
            <img
              className="object-cover w-full rounded-t-lg object-center"
              src={recipe?.image ?? ""}
              alt=""
            />
          )}
          <div className="md:-translate-y-1/2 bg-white relative flex flex-col justify-between leading-normal w-full p-6">
            <h2 className="mb-2 text-6xl font-light tracking-tight text-gray-900 mb-7">
              {recipe?.title} | {recipe?.category}
            </h2>
            <div className="absolute flex items-center right-0 top-7 me-8 -translate-y-16 text-sm bg-white p-3">
              <Timer1
                size="20"
                className="text-amber-400 group-hover:animate-bounce me-2"
              />
              {recipe?.time}
            </div>
            <p className="mb-4">
              {recipe?.ingredients?.map((instruction, index) => (
                <span
                  className="me-2 inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-400/10"
                  key={index}>
                  {instruction}
                </span>
              ))}
            </p>
            <div className="mb-3 font-normal text-gray-700 text-lg leading-10 text-[100]">
              {recipe?.instructions?.map((inst, index) => (
                <div key={index}>{inst}</div>
              ))}
            </div>
            <button
              onClick={() => {
                dispatch(deleteRecipes(id));
                navigate("/");
              }}
              className="me-auto text-red-400">
              Delete {recipe?.title}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
