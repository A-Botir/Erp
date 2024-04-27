import { NavLink, useLocation, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 py-16">
      <div className="flex flex-col items-center justify-center">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 512 512"
            className="mb-4 h-16 w-16"
          >
            <ellipse
              cx="405.143"
              cy="338.571"
              fill="#FA541C"
              rx="82.857"
              ry="82.857"
            ></ellipse>
            <path
              fill="currentColor"
              d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
            ></path>
          </svg>
        </NavLink>
        <p className="text-center text-[12px] text-[#637381]">
          © 2023. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
