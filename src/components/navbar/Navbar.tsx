import { NavbarItem } from "./components/NavbarItem";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};
