import LeftItems from "./left-items";
import Logo from "./logo";
import RightItems from "./right-items";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 right-0 h-20 flex items-center justify-center bg-transparent z-10 px-44 gap-x-16">
      <RightItems />
      <Logo />
      <LeftItems />
    </div>
  );
};

export default Navbar;
