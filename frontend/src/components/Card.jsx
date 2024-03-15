import { Timer1 } from "iconsax-react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="group overflow-hidden flex flex-col items-center bg-white rounded-lg shadow-lg lg:flex-row mb-4 lg:gap-6 w-full">
      <div className=" bg-amber-400 group-hover:bg-white transform transition duration-500 rounded-t-lg lg:rounded-none lg:rounded-s-lg ">
        <img
          className="mix-blend-multiply object-cover lg:w-[400px] w-full min-h-[300px] rounded-t-lg lg:rounded-none lg:rounded-s-lg  transform transition duration-500 group-hover:scale-110"
          src={recipe?.image}
          alt=""
        />
      </div>
      <div className="relative flex flex-col justify-between leading-normal w-full p-6 lg:p-0">
        <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
          {recipe?.title} | {recipe?.category}
        </h5>
        <div className="absolute flex items-center right-0 top-0 me-4 mt-2 text-sm">
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
        <div className="mb-3 font-normal text-gray-700">
          {recipe?.instructions?.map((inst, index) => (
            <div key={index}>{inst}</div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
