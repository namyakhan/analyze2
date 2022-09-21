import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import {
  PersonalInformation,
  Preferences,
  Employment,
} from "../pages/contextProvider";

const SideNavbar = () => {
  return (
    <div className="flex flex-row">
      <div className=" py-10 pl-12 px-16 bg-purple w- h-screen  relative hidden lg:block">
        {/* Logo */}
        <div className="flex flex-row items-center space-x-2">
          <img
            src="/images/navbar.png"
            alt="logo"
            loading="lazy"
            className="h-10"
          />
          <h1>Analyze.</h1>
        </div>

        {/* Personal Info */}
        <div className="mt-12 space-y-2">
          <h3>PERSONAL INFORMATION</h3>
          {PersonalInformation.map((info) => (
            <div
              key={info.id}
              className="flex flex-row justify-between border-b border-grey"
            >
              <h4>{info.title}</h4>
              <h5>{info.desc}</h5>
            </div>
          ))}
        </div>

        {/* Preferences*/}
        <div className="mt-10 space-y-2">
          <h3>PREFERENCES</h3>
          {Preferences.map((preference) => (
            <div
              key={preference.id}
              className="flex flex-row justify-between border-b border-grey"
            >
              <h4>{preference.title}</h4>
              <h5>{preference.desc}</h5>
            </div>
          ))}
        </div>

        {/*Employment */}
        <div className="mt-10 space-y-2">
          <h3>EMPLOYMENT HISTORY</h3>
          {Employment.map((employ) => (
            <div
              key={employ.id}
              className="flex flex-row justify-between border-b border-grey"
            >
              <h4>{employ.title}</h4>
              <h5>{employ.desc}</h5>
            </div>
          ))}
        </div>

        <div className="space-y-5 absolute bottom-5 left-12 ">
          <div className="text-grey flex flex-row items-center space-x-2 ">
            <ArrowRightOnRectangleIcon className="h-4" />
            <h6 className="text-[15px] ">Log out</h6>
          </div>
          <h6>© 2022, All Rights Reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
