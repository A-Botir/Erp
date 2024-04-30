import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import Logo from "../assets/Images/icons/Logo.svg";

const Sidebar = () => {
  const location = useLocation();

  const TargetLink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );

  const pathstyle = () => {
    location.pathname === "/marketing" ||
      location.pathname === "/marketing/stock" ||
      location.pathname === "/marketing/banner" ||
      location.pathname === "/marketing/review";
  };
  return (
    <>
      <div className="fixed top-0 h-screen w-[5%] bg-white shadow-side">
        <div className="mb-3 px-3 py-2">
          <NavLink to="/">
            <img src={Logo} alt="logo icon" width={40} height={40} />
          </NavLink>
        </div>
        <nav className="mx-auto flex h-[85%] flex-col items-center justify-between">
          <div className="rounded-md">
            <NavLink to="/orders">
              <div
                className={`border-r-2 py-3 pl-5 pr-[18px] ${
                  location.pathname === "/orders"
                    ? "border-[#4094F7]"
                    : "border-[white]"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6375_2307)">
                    <path
                      d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 3C1 3.55 1.45 4 2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.55 17 19 16.55 19 16C19 15.45 18.55 15 18 15H7L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.54 2.57C4.38 2.22 4.02 2 3.64 2H2C1.45 2 1 2.45 1 3ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                      fill={`${location.pathname === "/orders" ? "#4094F7" : "#6E8BB7"}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6375_2307">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </NavLink>
            <NavLink to="/customers">
              <div
                className={`border-r-2 py-3 pl-5 pr-[18px] ${
                  location.pathname === "/customers"
                    ? "border-[#4094F7]"
                    : "border-[white]"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8ZM19 8C19 8.39397 18.9224 8.78407 18.7716 9.14805C18.6209 9.51203 18.3999 9.84274 18.1213 10.1213C17.8427 10.3999 17.512 10.6209 17.1481 10.7716C16.7841 10.9224 16.394 11 16 11C15.606 11 15.2159 10.9224 14.8519 10.7716C14.488 10.6209 14.1573 10.3999 13.8787 10.1213C13.6001 9.84274 13.3791 9.51203 13.2284 9.14805C13.0776 8.78407 13 8.39397 13 8C13 7.20435 13.3161 6.44129 13.8787 5.87868C14.4413 5.31607 15.2044 5 16 5C16.7956 5 17.5587 5.31607 18.1213 5.87868C18.6839 6.44129 19 7.20435 19 8ZM14.93 19C14.976 18.673 15 18.34 15 18C15.0023 16.4289 14.4737 14.903 13.5 13.67C14.2601 13.2312 15.1223 13.0001 16 13.0001C16.8776 13.0001 17.7399 13.2311 18.4999 13.67C19.26 14.1088 19.8912 14.74 20.3301 15.5C20.7689 16.2601 21 17.1223 21 18V19H14.93ZM8 13C9.32608 13 10.5979 13.5268 11.5355 14.4645C12.4732 15.4021 13 16.6739 13 18V19H3V18C3 16.6739 3.52678 15.4021 4.46447 14.4645C5.40215 13.5268 6.67392 13 8 13Z"
                    fill={`${location.pathname === "/customers" ? "#4094F7" : "#6E8BB7"}`}
                  />
                </svg>
              </div>
            </NavLink>
            <NavLink to="/marketing/stock">
              <div
                className={`border-r-2 py-3 pl-5 pr-[18px] ${
                  location.pathname === "/marketing" ||
                  location.pathname === "/marketing/stock" ||
                  location.pathname === "/marketing/banner" ||
                  location.pathname === "/marketing/review"
                    ? "border-[#4094F7]"
                    : "border-[white]"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_475_3152)">
                    <path
                      d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                      fill={`${
                        (location.pathname === location.pathname) ===
                          "/marketing" ||
                        location.pathname === "/marketing/stock" ||
                        location.pathname === "/marketing/banner" ||
                        location.pathname === "/marketing/review"
                          ? "#4094F7"
                          : "#6E8BB7"
                      }`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_475_3152">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/settings">
              <div
                className={`border-r-2 py-3 pl-5 pr-[18px] ${
                  location.pathname === "/settings"
                    ? "border-[#4094F7]"
                    : "border-[white]"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_195_1779)">
                    <path
                      d="M16.1917 10.8166C16.225 10.55 16.25 10.2833 16.25 9.99996C16.25 9.71663 16.225 9.44996 16.1917 9.18329L17.95 7.80829C18.1083 7.68329 18.15 7.45829 18.05 7.27496L16.3833 4.39163C16.2833 4.20829 16.0583 4.14163 15.875 4.20829L13.8 5.04163C13.3667 4.70829 12.9 4.43329 12.3917 4.22496L12.075 2.01663C12.05 1.81663 11.875 1.66663 11.6667 1.66663H8.33332C8.12499 1.66663 7.94999 1.81663 7.92499 2.01663L7.60832 4.22496C7.09999 4.43329 6.63332 4.71663 6.19999 5.04163L4.12499 4.20829C3.93332 4.13329 3.71666 4.20829 3.61666 4.39163L1.94999 7.27496C1.84165 7.45829 1.89165 7.68329 2.04999 7.80829L3.80832 9.18329C3.77499 9.44996 3.74999 9.72496 3.74999 9.99996C3.74999 10.275 3.77499 10.55 3.80832 10.8166L2.04999 12.1916C1.89165 12.3166 1.84999 12.5416 1.94999 12.725L3.61666 15.6083C3.71666 15.7916 3.94165 15.8583 4.12499 15.7916L6.19999 14.9583C6.63332 15.2916 7.09999 15.5666 7.60832 15.775L7.92499 17.9833C7.94999 18.1833 8.12499 18.3333 8.33332 18.3333H11.6667C11.875 18.3333 12.05 18.1833 12.075 17.9833L12.3917 15.775C12.9 15.5666 13.3667 15.2833 13.8 14.9583L15.875 15.7916C16.0667 15.8666 16.2833 15.7916 16.3833 15.6083L18.05 12.725C18.15 12.5416 18.1083 12.3166 17.95 12.1916L16.1917 10.8166ZM9.99999 12.9166C8.39165 12.9166 7.08332 11.6083 7.08332 9.99996C7.08332 8.39163 8.39165 7.08329 9.99999 7.08329C11.6083 7.08329 12.9167 8.39163 12.9167 9.99996C12.9167 11.6083 11.6083 12.9166 9.99999 12.9166Z"
                      fill={`${location.pathname === "/settings" ? "#4094F7" : "#6E8BB7"}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_1779">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </NavLink>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                width: "40px",
                height: "40px",
                marginX: "auto",
                marginTop: "12px",
              }}
            />
          </div>
        </nav>
      </div>
      <div className="w-[5%]"></div>
    </>
  );
};

export default Sidebar;
