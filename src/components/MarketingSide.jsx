import React, { useContext } from "react";
import { UseAllContext } from "../App";
import { NavLink, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MarketingSide = () => {
  const location = useLocation();
  const { openside, handleOpenside } = useContext(UseAllContext);
  return (
    <>
      <div
        className={`fixed top-0 h-screen w-full  bg-white shadow-side ${openside ? "max-w-[205px]" : "max-w-[55px]"}`}
      >
        <div className={`flex justify-between  px-3 py-4 `}>
          <svg
            className={`${openside ? "block" : "hidden"}`}
            width="120"
            height="16"
            viewBox="0 0 120 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.70417 0C7.66845 0.014128 8.47083 0.12715 9.11134 0.339069C10.2023 0.699332 11.0856 1.3598 11.7613 2.32051C12.3033 3.09754 12.6728 3.93814 12.8699 4.84233C13.067 5.74652 13.1655 6.60831 13.1655 7.42774C13.1655 9.50455 12.7502 11.2635 11.9197 12.7045C10.7935 14.6471 9.05504 15.6184 6.70417 15.6184H0V0H6.70417ZM3.1569 2.71237V12.9056H6.1553C7.6897 12.9056 8.75954 12.1463 9.36486 10.6275C9.69567 9.79397 9.86107 8.8015 9.86107 7.65007C9.86107 6.06067 9.61297 4.84039 9.11675 3.98918C8.62053 3.13797 7.63339 2.71237 6.1553 2.71237H3.1569ZM17.7508 6.90851C18.1344 6.47054 18.6746 6.25156 19.3714 6.25156C20.0119 6.25156 20.5486 6.45818 20.9815 6.87142C21.4144 7.28467 21.6554 7.89039 21.7047 8.68862H17.0276C17.1261 7.93984 17.3672 7.34648 17.7508 6.90851ZM19.3712 3.76172C20.3285 3.76172 21.1907 3.94185 21.9579 4.30211C22.7251 4.66237 23.3585 5.23102 23.8583 6.00805C24.3087 6.69326 24.6008 7.48794 24.7346 8.39213C24.812 8.92193 24.8437 9.68483 24.8296 10.6809H16.9535C16.9957 11.8393 17.3582 12.6517 18.041 13.1179C18.4562 13.4075 18.956 13.5523 19.5402 13.5523C20.1595 13.5523 20.6628 13.3757 21.0499 13.0225C21.2611 12.8318 21.4476 12.5669 21.6095 12.2279H24.6818C24.6044 12.9131 24.2489 13.6089 23.6154 14.3152C22.6301 15.4384 21.2505 16 19.4768 16C18.0128 16 16.7212 15.5267 15.6021 14.5801C14.483 13.6336 13.9234 12.0936 13.9234 9.96033C13.9234 7.96122 14.4284 6.42836 15.4385 5.3617C16.4485 4.29504 17.7594 3.76172 19.3712 3.76172ZM26.3796 15.6184H29.3885V0H26.3796V15.6184ZM36.3227 6.25156C35.6259 6.25156 35.0857 6.47054 34.7021 6.90851C34.3185 7.34648 34.0774 7.93984 33.9789 8.68862H38.656C38.6067 7.89039 38.3657 7.28467 37.9328 6.87142C37.4999 6.45818 36.9632 6.25156 36.3227 6.25156ZM38.9097 4.30211C38.1425 3.94185 37.2803 3.76172 36.3231 3.76172C34.7112 3.76172 33.4003 4.29504 32.3903 5.3617C31.3803 6.42836 30.8753 7.96122 30.8753 9.96033C30.8753 12.0936 31.4348 13.6336 32.5539 14.5801C33.6731 15.5267 34.9646 16 36.4286 16C38.2023 16 39.5819 15.4384 40.5673 14.3152C41.2007 13.6089 41.5562 12.9131 41.6336 12.2279H38.5613C38.3994 12.5669 38.2129 12.8318 38.0017 13.0225C37.6146 13.3757 37.1114 13.5523 36.492 13.5523C35.9078 13.5523 35.4081 13.4075 34.9928 13.1179C34.31 12.6517 33.9476 11.8393 33.9053 10.6809H41.7814C41.7955 9.68483 41.7638 8.92193 41.6864 8.39213C41.5527 7.48794 41.2606 6.69326 40.8101 6.00805C40.3104 5.23102 39.6769 4.66237 38.9097 4.30211ZM50.3633 4.06901H53.594L49.4448 15.6186H46.2669L42.1388 4.06901H45.5173L47.9139 12.5881L50.3633 4.06901ZM57.6718 6.90851C58.0554 6.47054 58.5956 6.25156 59.2924 6.25156C59.9329 6.25156 60.4696 6.45818 60.9024 6.87142C61.3353 7.28467 61.5764 7.89039 61.6256 8.68862H56.9486C57.0471 7.93984 57.2882 7.34648 57.6718 6.90851ZM59.2925 3.76172C60.2497 3.76172 61.1119 3.94185 61.8791 4.30211C62.6463 4.66237 63.2798 5.23102 63.7795 6.00805C64.23 6.69326 64.5221 7.48794 64.6558 8.39213C64.7332 8.92193 64.7649 9.68483 64.7508 10.6809H56.8747C56.917 11.8393 57.2794 12.6517 57.9622 13.1179C58.3775 13.4075 58.8772 13.5523 59.4614 13.5523C60.0808 13.5523 60.584 13.3757 60.9711 13.0225C61.1823 12.8318 61.3688 12.5669 61.5307 12.2279H64.603C64.5256 12.9131 64.1701 13.6089 63.5367 14.3152C62.5513 15.4384 61.1717 16 59.398 16C57.934 16 56.6425 15.5267 55.5233 14.5801C54.4042 13.6336 53.8447 12.0936 53.8447 9.96033C53.8447 7.96122 54.3497 6.42836 55.3597 5.3617C56.3697 4.29504 57.6806 3.76172 59.2925 3.76172ZM72.6293 3.79866C72.5906 3.79513 72.5431 3.79336 72.4868 3.79336C71.5859 3.79336 70.8539 4.03 70.2908 4.50329C69.9459 4.78584 69.5412 5.3121 69.0767 6.08208V4.06885H66.2049V15.6184H69.235V10.0979C69.235 9.17255 69.3512 8.48735 69.5834 8.04232C69.9987 7.25116 70.8116 6.85558 72.0223 6.85558C72.1138 6.85558 72.2334 6.85911 72.3812 6.86618C72.529 6.87324 72.698 6.88737 72.888 6.90856V3.81455C72.7543 3.80749 72.6681 3.80219 72.6293 3.79866Z"
              fill="url(#paint0_linear_481_198)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_481_198"
                x1="2.71529e-07"
                y1="8"
                x2="73.1429"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0974E9" />
                <stop offset="1" stop-color="#3593F9" />
              </linearGradient>
            </defs>
          </svg>
          <button onClick={handleOpenside} className="outline-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_481_212)">
                <path
                  d="M3.33333 15H12.5C12.9583 15 13.3333 14.625 13.3333 14.1667C13.3333 13.7083 12.9583 13.3333 12.5 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15ZM3.33333 10.8333H10C10.4583 10.8333 10.8333 10.4583 10.8333 10C10.8333 9.54167 10.4583 9.16667 10 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333ZM2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H12.5C12.9583 6.66667 13.3333 6.29167 13.3333 5.83333C13.3333 5.375 12.9583 5 12.5 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM16.9167 12.4L14.5167 10L16.9167 7.6C17.2417 7.275 17.2417 6.75 16.9167 6.425C16.5917 6.1 16.0667 6.1 15.7417 6.425L12.75 9.41667C12.425 9.74167 12.425 10.2667 12.75 10.5917L15.7417 13.5833C16.0667 13.9083 16.5917 13.9083 16.9167 13.5833C17.2333 13.2583 17.2417 12.725 16.9167 12.4Z"
                  fill="#5B77A0"
                />
              </g>
              <defs>
                <clipPath id="clip0_481_212">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <nav className={`px-4 py-1 ${openside === true ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/marketing/stock">
                <p
                  className={`rounded-md px-3 py-2 ${location.pathname === "/marketing/stock" ? "bg-[#4094F7] font-medium text-white" : "text-[#252C32]"}`}
                >
                  Акции
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/marketing/banner">
                <p
                  className={`rounded-md px-3 py-2 ${location.pathname === "/marketing/banner" ? "bg-[#4094F7] font-medium text-white" : "text-[#252C32]"}`}
                >
                  Баннеры
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/marketing/review">
                <p
                  className={`rounded-md px-3 py-2 ${location.pathname === "/marketing/review" ? "bg-[#4094F7] font-medium text-white" : "text-[#252C32]"}`}
                >
                  Отзывы
                </p>
              </NavLink>
            </li>
            <li>
              <Accordion defaultExpanded={false} sx={{ boxShadow: "none" }}>
                <AccordionSummary
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    color: "#252C32",
                    paddingX: "12px",
                    "&:hover": {
                      color: "#FFF",
                    },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  Рассылка
                </AccordionSummary>
                <nav aria-label="secondary mailbox folders">
                  <List
                    sx={{
                      backgroundColor: "#6E8BB71A",
                      paddingY: "0px",
                      borderRadius: "6px",
                    }}
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "&:hover": {
                          backgroundColor: "#4094F7",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary="Телеграмм" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      sx={{
                        "&:hover": {
                          backgroundColor: "#4094F7",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary="СМС" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      sx={{
                        "&:hover": {
                          backgroundColor: "#4094F7",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary="Пуш" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Accordion>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`h-screen w-[205px] ${openside ? "max-w-[205px]" : "max-w-[55px]"}`}
      ></div>
    </>
  );
};

export default MarketingSide;
