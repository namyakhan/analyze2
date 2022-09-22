import { Headings, AppHeading } from "../pages/contextProvider";
import Vendor from "./Vendor";

const Layout = () => {
  return (
    <div className="container mx-auto">
      {/* Heading */}
      <div className="flex flex-row items-center justify-between px-5 pt-5 md:px-10 md:pt-10 ">
        <div>
          <h2>Welcome back, Jonas 👋</h2>
          <h3 className="text-black font-medium">
            a bird eye view on your portfolio{" "}
          </h3>
        </div>
        {/* Image */}
        <div className="md:flex md:flex-row md:items-center space-x-2 cursor-pointer hidden ">
          <img
            src="images/profile.jpg"
            alt="profile"
            loading="lazy"
            className="h-10  w-11 rounded-full"
          />
          <h2 className="text-[15px]">Jonas Smith</h2>
        </div>
      </div>

      <Vendor />
    </div>
  );
};

export default Layout;
