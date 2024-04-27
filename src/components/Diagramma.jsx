import React from "react";
import Img1 from "../assets/Images/photos/progress1.svg";
import Img2 from "../assets/Images/photos/progress2.svg";
import { LineChart, lineElementClasses } from "@mui/x-charts";
import { Tab, Tabs } from "@mui/material";

const staticData = [200, 450, 100, 550, 180, 700, 900];

const xLabels = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскрессенье",
];

const Diagramma = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="my-5 grid grid-cols-4 gap-5">
      <div className="col-span-1 flex flex-col gap-y-5">
        <div className="rounded-md bg-white p-6">
          <p className="mb-2 leading-6 text-[#6E8BB7]">
            Total orders this month
          </p>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-[24px] font-bold leading-10">1,850</h4>
            <div className="flex items-center gap-2 rounded-xl bg-[#F2271C1A] py-2 pl-3 pr-2">
              <p className="font-semibold leading-6 text-[#F2271C]">-5%</p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="24.5883"
                  y="24"
                  width="24"
                  height="24"
                  rx="12"
                  transform="rotate(180 24.5883 24)"
                  fill="#F2271C"
                  fill-opacity="0.15"
                />
                <path
                  d="M10.0016 10.1933L12.5883 12.78L15.1749 10.1933C15.4349 9.93329 15.8549 9.93329 16.1149 10.1933C16.3749 10.4533 16.3749 10.8733 16.1149 11.1333L13.0549 14.1933C12.7949 14.4533 12.3749 14.4533 12.1149 14.1933L9.05492 11.1333C8.79492 10.8733 8.79492 10.4533 9.05492 10.1933C9.31492 9.93996 9.74159 9.93329 10.0016 10.1933Z"
                  fill="#F2271C"
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              width="241"
              height="92"
              viewBox="0 0 232 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 82.6324C1 82.6324 10.0809 62.0335 19.6664 62.0335C29.2518 62.0335 28.9995 72.5872 35.4319 72.5872C41.8642 72.5872 43.3777 41.8162 54.2244 41.8162C65.071 41.8162 62.2963 52.2427 68.9809 52.2427C75.6655 52.2427 77.179 21.726 89.413 21.726C101.647 21.726 99.7552 41.8162 105.557 41.8162C111.359 41.8162 109.214 31.3896 115.647 31.3896C124.349 31.3896 128.511 61.3978 138.349 61.3978C148.187 61.3978 143.52 41.8162 153.736 41.8162C163.952 41.8162 160.673 72.5872 174.547 72.5872C187.159 72.5872 186.402 21.726 199.141 21.726C210.114 21.726 205.699 41.8162 215.663 41.8162C225.627 41.8162 220.078 1 231.176 1"
                stroke="#F8C51B"
                stroke-width="2"
              />
              <path
                d="M19.6664 61.6667C10.0809 61.6667 1 82.1417 1 82.1417V92H231.176V1C220.078 1 225.627 41.5708 215.663 41.5708C205.699 41.5708 210.114 21.6014 199.141 21.6014C186.402 21.6014 187.159 72.157 174.547 72.157C160.673 72.157 163.952 41.5708 153.736 41.5708C143.52 41.5708 148.187 61.0347 138.349 61.0347C128.511 61.0347 124.349 31.2069 115.647 31.2069C109.214 31.2069 111.359 41.5708 105.557 41.5708C99.7552 41.5708 101.647 21.6014 89.413 21.6014C77.179 21.6014 75.6655 51.9347 68.9809 51.9347C62.2963 51.9347 65.071 41.5708 54.2244 41.5708C43.3777 41.5708 41.8642 72.157 35.4319 72.157C28.9995 72.157 29.2518 61.6667 19.6664 61.6667Z"
                fill="url(#paint0_linear_88_5064)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_88_5064"
                  x1="116.088"
                  y1="1"
                  x2="116.088"
                  y2="92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F8C51B" stop-opacity="0.8" />
                  <stop offset="1" stop-color="#F8DD4E" stop-opacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="rounded-md bg-white p-6">
          <p className="mb-2 leading-6 text-[#6E8BB7]">Earning this month</p>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-[24px] font-bold leading-10">$6250</h4>
            <div className="flex items-center gap-2 rounded-xl bg-[#1AC19D26] py-2 pl-3 pr-2">
              <p className="font-semibold leading-6 text-[#1AC19D]">+25%</p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.588257"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#1AC19D"
                  fill-opacity="0.2"
                />
                <path
                  d="M15.1749 13.8067L12.5883 11.22L10.0016 13.8067C9.74159 14.0667 9.32159 14.0667 9.06159 13.8067C8.80159 13.5467 8.80159 13.1267 9.06159 12.8667L12.1216 9.80671C12.3816 9.54671 12.8016 9.54671 13.0616 9.80671L16.1216 12.8667C16.3816 13.1267 16.3816 13.5467 16.1216 13.8067C15.8616 14.06 15.4349 14.0667 15.1749 13.8067Z"
                  fill="#1AC19D"
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              width="241"
              height="92"
              viewBox="0 0 232 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 82.6324C1 82.6324 10.0809 62.0335 19.6664 62.0335C29.2518 62.0335 28.9995 72.5872 35.4319 72.5872C41.8642 72.5872 43.3777 41.8162 54.2244 41.8162C65.071 41.8162 62.2963 52.2427 68.9809 52.2427C75.6655 52.2427 77.179 21.726 89.413 21.726C101.647 21.726 99.7552 41.8162 105.557 41.8162C111.359 41.8162 109.214 31.3896 115.647 31.3896C124.349 31.3896 128.511 61.3978 138.349 61.3978C148.187 61.3978 143.52 41.8162 153.736 41.8162C163.952 41.8162 160.673 72.5872 174.547 72.5872C187.159 72.5872 186.402 21.726 199.141 21.726C210.114 21.726 205.699 41.8162 215.663 41.8162C225.627 41.8162 220.078 1 231.176 1"
                stroke="#A23FEE"
                stroke-width="2"
              />
              <path
                d="M19.6664 61.6667C10.0809 61.6667 1 82.1417 1 82.1417V92H231.176V1C220.078 1 225.627 41.5708 215.663 41.5708C205.699 41.5708 210.114 21.6014 199.141 21.6014C186.402 21.6014 187.159 72.157 174.547 72.157C160.673 72.157 163.952 41.5708 153.736 41.5708C143.52 41.5708 148.187 61.0347 138.349 61.0347C128.511 61.0347 124.349 31.2069 115.647 31.2069C109.214 31.2069 111.359 41.5708 105.557 41.5708C99.7552 41.5708 101.647 21.6014 89.413 21.6014C77.179 21.6014 75.6655 51.9347 68.9809 51.9347C62.2963 51.9347 65.071 41.5708 54.2244 41.5708C43.3777 41.5708 41.8642 72.157 35.4319 72.157C28.9995 72.157 29.2518 61.6667 19.6664 61.6667Z"
                fill="url(#paint0_linear_88_5038)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_88_5038"
                  x1="116.088"
                  y1="1"
                  x2="116.088"
                  y2="92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A23FEE" stop-opacity="0.8" />
                  <stop offset="1" stop-color="#A23FEE" stop-opacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="rounded-md bg-white p-6">
          <p className="mb-2 leading-6 text-[#6E8BB7]">
            Total orders this month
          </p>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-[24px] font-bold leading-10">$12750</h4>
            <div className="flex items-center gap-2 rounded-xl bg-[#1AC19D26] py-2 pl-3 pr-2">
              <p className="font-semibold leading-6 text-[#1AC19D]">+12%</p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.588257"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#1AC19D"
                  fill-opacity="0.2"
                />
                <path
                  d="M15.1749 13.8067L12.5883 11.22L10.0016 13.8067C9.74159 14.0667 9.32159 14.0667 9.06159 13.8067C8.80159 13.5467 8.80159 13.1267 9.06159 12.8667L12.1216 9.80671C12.3816 9.54671 12.8016 9.54671 13.0616 9.80671L16.1216 12.8667C16.3816 13.1267 16.3816 13.5467 16.1216 13.8067C15.8616 14.06 15.4349 14.0667 15.1749 13.8067Z"
                  fill="#1AC19D"
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              width="241"
              height="92"
              viewBox="0 0 232 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 82.6324C1 82.6324 10.0809 62.0335 19.6664 62.0335C29.2518 62.0335 28.9995 72.5872 35.4319 72.5872C41.8642 72.5872 43.3777 41.8162 54.2244 41.8162C65.071 41.8162 62.2963 52.2427 68.9809 52.2427C75.6655 52.2427 77.179 21.726 89.413 21.726C101.647 21.726 99.7552 41.8162 105.557 41.8162C111.359 41.8162 109.214 31.3896 115.647 31.3896C124.349 31.3896 128.511 61.3978 138.349 61.3978C148.187 61.3978 143.52 41.8162 153.736 41.8162C163.952 41.8162 160.673 72.5872 174.547 72.5872C187.159 72.5872 186.402 21.726 199.141 21.726C210.114 21.726 205.699 41.8162 215.663 41.8162C225.627 41.8162 220.078 1 231.176 1"
                stroke="#F2271C"
                stroke-width="2"
              />
              <path
                d="M19.6664 61.6667C10.0809 61.6667 1 82.1417 1 82.1417V92H231.176V1C220.078 1 225.627 41.5708 215.663 41.5708C205.699 41.5708 210.114 21.6014 199.141 21.6014C186.402 21.6014 187.159 72.157 174.547 72.157C160.673 72.157 163.952 41.5708 153.736 41.5708C143.52 41.5708 148.187 61.0347 138.349 61.0347C128.511 61.0347 124.349 31.2069 115.647 31.2069C109.214 31.2069 111.359 41.5708 105.557 41.5708C99.7552 41.5708 101.647 21.6014 89.413 21.6014C77.179 21.6014 75.6655 51.9347 68.9809 51.9347C62.2963 51.9347 65.071 41.5708 54.2244 41.5708C43.3777 41.5708 41.8642 72.157 35.4319 72.157C28.9995 72.157 29.2518 61.6667 19.6664 61.6667Z"
                fill="url(#paint0_linear_88_5051)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_88_5051"
                  x1="116.088"
                  y1="1"
                  x2="116.088"
                  y2="92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F2271C" stop-opacity="0.8" />
                  <stop offset="1" stop-color="#F2271C" stop-opacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="mb-5 grid grid-cols-2 gap-5">
          <div className="col-span-1 flex items-center gap-10 rounded-md bg-white p-6">
            <img src={Img1} alt="img progrees bar1" />
            <div>
              <p className="mb-2 leading-6 text-[#6E8BB7]">Top Order</p>
              <h4 className="text-[40px] font-bold leading-10 text-[#1AC19D]">
                75%
              </h4>
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-10 rounded-md bg-white p-6">
            <img src={Img2} alt="img progrees bar1" />
            <div>
              <p className="mb-2 leading-6 text-[#6E8BB7]">Average order</p>
              <h4 className="text-[40px] font-bold leading-10 text-[#A23FEE]">
                40%
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md bg-white p-6">
          <div className="mb-8 flex items-center justify-between">
            <h4 className="text-[18px] font-semibold leading-6 text-[#5B6871]">
              Ежемесячная статистика
            </h4>
            <select
              name="first"
              className="w-32 rounded-md border border-[#E5E9EB] bg-white px-2 py-1 leading-6 text-[#303940] outline-0"
            >
              <option value="1">Июнь</option>
              <option value="2">Июль</option>
              <option value="3">Август</option>
            </select>
          </div>
          <LineChart
            height={300}
            series={[
              {
                data: staticData,
                label: "static",
                area: true,
                showMark: false,
              },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                display: "none",
              },
              width: "100%",
            }}
          />
          <div className="mt-9 flex justify-center">
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                },
                "& .Mui-selected": {
                  fontWeight: 700,
                },
              }}
              aria-label="success tabs example"
            >
              <Tab value="one" label="Неделя" />
              <Tab value="two" label="Месяц" />
              <Tab value="three" label="Год" />
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagramma;
