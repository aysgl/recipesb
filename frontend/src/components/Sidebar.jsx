import {
  AddSquare,
  Category,
  Discover,
  Heart,
  Home,
  Profile,
  Setting3,
} from "iconsax-react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="fixed lg:w-[20%] md:w-[30%] w-[10%] p-4 flex flex-col h-screen justify-between xs:items-center mx-md:p-2 rounded-r-lg bg-white shadow-lg">
        <Link to="/">
          <Category size="32" className="my-3 text-amber-400" />
        </Link>
        <div className="flex flex-col gap-10">
          <NavLink to="/" className="flex gap-4 items-center text-sm ">
            <Home size="32" className="text-amber-400" />
            <span className="max-md:hidden">Home</span>
          </NavLink>
          <NavLink to="/create" className="flex gap-4 items-center text-sm  ">
            <AddSquare size="32" className="text-amber-400" />
            <span className="max-md:hidden">Create</span>
          </NavLink>
          <NavLink to="/discover" className="flex gap-4 items-center text-sm  ">
            <Discover size="32" className="text-amber-400" />
            <span className="max-md:hidden">Discover</span>
          </NavLink>
          <NavLink to="/favorite" className="flex gap-4 items-center text-sm  ">
            <Heart size="32" className="text-amber-400" />
            <span className="max-md:hidden">Favorite</span>
          </NavLink>
          <NavLink to="/help" className="flex gap-4 items-center text-sm">
            <Setting3 size="32" className="text-amber-400" />
            <span className="max-md:hidden">Help</span>
          </NavLink>
        </div>
        <NavLink to="/profile">
          <Profile size="32" className="text-amber-400" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
