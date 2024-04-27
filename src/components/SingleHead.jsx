import { useContext } from "react";
import { UseAllContext } from "../App";
import { NavLink } from "react-router-dom";

const SingleHead = () => {
  const { openside } = useContext(UseAllContext);

  return (
    <>
      <header
        className={`fixed right-0 top-0 z-20  bg-white shadow-head ${openside ? "w-[80%]" : "w-[91%]"}`}
      >
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <NavLink to="/marketing/stock">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_427_1462)">
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                    <path
                      d="M12.6667 7.33348H5.22007L8.4734 4.08014C8.7334 3.82014 8.7334 3.39348 8.4734 3.13348C8.2134 2.87348 7.7934 2.87348 7.5334 3.13348L3.14007 7.52681C2.88007 7.78681 2.88007 8.20681 3.14007 8.46681L7.5334 12.8601C7.7934 13.1201 8.2134 13.1201 8.4734 12.8601C8.7334 12.6001 8.7334 12.1801 8.4734 11.9201L5.22007 8.66681H12.6667C13.0334 8.66681 13.3334 8.36681 13.3334 8.00014C13.3334 7.63348 13.0334 7.33348 12.6667 7.33348Z"
                      fill="#B0BABF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_427_1462">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H11L13 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8Z"
                    fill="#D5DADD"
                  />
                </svg>
                <p className="text-[#6E7C87]">Список акций</p>
              </div>
            </NavLink>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 3.5L8.5 8L4 12.5" stroke="#B0BABF" />
            </svg>
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H11L13 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8Z"
                  fill="#4094F7"
                />
              </svg>
              <p>Vulputate velit lacus, enim viverra quis</p>
            </div>
          </div>
          <ul className="flex items-center justify-center">
            <li className="shadow-btn">
              <button className="flex items-center gap-1 p-4 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_427_1488)">
                    <path
                      d="M10.0001 1.6665C5.39175 1.6665 1.66675 5.3915 1.66675 9.99984C1.66675 14.6082 5.39175 18.3332 10.0001 18.3332C14.6084 18.3332 18.3334 14.6082 18.3334 9.99984C18.3334 5.3915 14.6084 1.6665 10.0001 1.6665ZM13.5834 13.5832C13.2584 13.9082 12.7334 13.9082 12.4084 13.5832L10.0001 11.1748L7.59175 13.5832C7.26675 13.9082 6.74175 13.9082 6.41675 13.5832C6.09175 13.2582 6.09175 12.7332 6.41675 12.4082L8.82508 9.99984L6.41675 7.5915C6.09175 7.2665 6.09175 6.7415 6.41675 6.4165C6.74175 6.0915 7.26675 6.0915 7.59175 6.4165L10.0001 8.82484L12.4084 6.4165C12.7334 6.0915 13.2584 6.0915 13.5834 6.4165C13.9084 6.7415 13.9084 7.2665 13.5834 7.5915L11.1751 9.99984L13.5834 12.4082C13.9001 12.7248 13.9001 13.2582 13.5834 13.5832Z"
                      fill="#F76659"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_427_1488">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-medium leading-6 text-[#F76659]">Отменить</p>
              </button>
            </li>
            <li className="shadow-btn">
              <button className="flex items-center gap-1 p-4 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_427_1491)">
                    <path
                      d="M14.6583 2.99167C14.3417 2.675 13.9167 2.5 13.475 2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V6.525C17.5 6.08333 17.325 5.65833 17.0083 5.35L14.6583 2.99167ZM10 15.8333C8.61667 15.8333 7.5 14.7167 7.5 13.3333C7.5 11.95 8.61667 10.8333 10 10.8333C11.3833 10.8333 12.5 11.95 12.5 13.3333C12.5 14.7167 11.3833 15.8333 10 15.8333ZM10.8333 7.5H5.83333C4.91667 7.5 4.16667 6.75 4.16667 5.83333C4.16667 4.91667 4.91667 4.16667 5.83333 4.16667H10.8333C11.75 4.16667 12.5 4.91667 12.5 5.83333C12.5 6.75 11.75 7.5 10.8333 7.5Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_427_1491">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-medium leading-6 text-[#4094F7]">
                  Сохранить
                </p>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="h-[56px] w-full"></div>
    </>
  );
};

export default SingleHead;
