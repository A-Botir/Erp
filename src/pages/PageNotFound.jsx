import { NavLink } from "react-router-dom";
import notFound from "../assets/Images/photos/404.svg";

const PageNotFound = () => {
  return (
    <div className=" bg-white">
      <div className="container">
        <div className="mx-auto flex h-screen w-full items-center justify-center gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-[160px] font-semibold leading-[160px] text-[#4094F7]">
              404
            </h2>
            <h4 className="text-[48px] font-bold leading-[64px] text-[#303940]">
              Page Not Found
            </h4>
            <p className="text-[24px] leading-6 text-[#252C32]">
              Sorry, the page you visited does not exist.
            </p>
            <NavLink to="/">
              <button className="rounded-md bg-[#1890FF] px-6 py-3 text-[16px] font-semibold leading-6 text-[#F6F8F9]">
                Вернутся в главную
              </button>
            </NavLink>
          </div>
          <div>
            <img src={notFound} alt="error page img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
