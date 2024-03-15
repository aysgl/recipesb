import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { postRecipe } from "../redux/slice/RecipesSlice";

const Create = () => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let newData = Object.fromEntries([...data.entries()]);
    const image = data.get("image");
    newData = { ...newData, instructions, ingredients, image };

    dispatch(postRecipe(newData));
    navigate("/");
  };

  return (
    <div className="p-4 lg:w-[80%] md:w-[70%] w-[90%] ms-auto flex justify-center h-screen items-center">
      <div className="p-10 group flex flex-col items-center bg-white rounded-lg shadow-lg mb-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="mt-10 grid grid-cols-9 gap-6">
              <div className="col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-400">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:text-black focus:ring-amber-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-400">
                  Category
                </label>
                <div className="mt-2">
                  <select
                    name="category"
                    className="block w-full rounded-md border-0 py-1.5 text-amber-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 h-[38px] text-sm">
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Mexican</option>
                    <option>Mediterranean</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>American</option>
                    <option>Dessert</option>
                  </select>
                </div>
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-400">
                  Time
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="time"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-400">
                  ingredients
                </label>
                <CreatableSelect
                  onChange={(options) => {
                    const refined = options.map((opt) => opt.label);
                    setIngredients(refined);
                  }}
                  isMulti
                  required
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-400">
                  instructions
                </label>
                <CreatableSelect
                  onChange={(options) => {
                    const refined = options.map((opt) => opt.label);
                    setInstructions(refined);
                  }}
                  isMulti
                  required
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-400">
                  Cover photo
                </label>
                <div className="bg-white mt-2 flex justify-center rounded-lg border border-dashed border-amber-400 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label className="relative cursor-pointer rounded-md bg-white font-semibold text-amber-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-400 focus-within:ring-offset-2 hover:text-amber-500">
                        <span>Upload a file</span>
                        <input
                          name="image"
                          type="file"
                          className="sr-only"
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center justify-end gap-x-6">
            <Link
              to="/"
              type="button"
              className="text-sm font-semibold leading-6 text-gray-400">
              Cancel
            </Link>
            <button
              type="submit"
              className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
