import React from "react";
import { useLocation } from "react-router-dom";

const ClientsHead = () => {
  const location = useLocation();
  return (
    <>
      <header className="fixed right-0 top-0 z-[10] w-[95%] bg-white shadow-head">
        <div className="flex items-center justify-between px-3">
          <h2 className="py-3 text-[20px] font-semibold leading-8 text-[#303940]">
            {location.pathname === "/clients" && <>Клиенты</>}
            {location.pathname === "/settings" && <>Настройки</>}
          </h2>
          <button className="flex items-center gap-1 p-3 shadow-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6555_796)">
                <path
                  d="M15 10.8334H10.8333V15.0001C10.8333 15.4584 10.4583 15.8334 9.99996 15.8334C9.54163 15.8334 9.16663 15.4584 9.16663 15.0001V10.8334H4.99996C4.54163 10.8334 4.16663 10.4584 4.16663 10.0001C4.16663 9.54175 4.54163 9.16675 4.99996 9.16675H9.16663V5.00008C9.16663 4.54175 9.54163 4.16675 9.99996 4.16675C10.4583 4.16675 10.8333 4.54175 10.8333 5.00008V9.16675H15C15.4583 9.16675 15.8333 9.54175 15.8333 10.0001C15.8333 10.4584 15.4583 10.8334 15 10.8334Z"
                  fill="#1AC19D"
                />
              </g>
              <defs>
                <clipPath id="clip0_6555_796">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="font-medium leading-6 text-[#1AC19D]">Добавить</p>
          </button>
        </div>
        <div className="flex items-center justify-between bg-[#F7F9FB] px-3 py-3 shadow-head">
          <div className="flex w-[40%] items-center gap-2 rounded-md border border-[#E5E9EB] bg-white px-2 py-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6555_805)">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="#B0BABF"
                />
              </g>
              <defs>
                <clipPath id="clip0_6555_805">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="search"
              className="flex-grow pl-1 leading-6 outline-0"
              placeholder="Поиск"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center rounded-md border border-[#E9EEF4] bg-white">
              <button className="border-r border-[#E9EEF4]  p-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6555_812)">
                    <path
                      d="M8.31003 1.49503C8.06503 1.25003 7.67003 1.25003 7.42503 1.49503L3.27003 5.65003C3.07503 5.84503 3.07503 6.16003 3.27003 6.35503L7.42503 10.51C7.67003 10.755 8.06503 10.755 8.31003 10.51C8.55503 10.265 8.55503 9.87003 8.31003 9.62503L4.69003 6.00003L8.31503 2.37503C8.55503 2.13503 8.55503 1.73503 8.31003 1.49503Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6555_812">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <select name="type" className=" bg-white leading-6 outline-none">
                <option value="1">Сегодня</option>
                <option value="2">За неделю</option>
                <option value="3">За месяц</option>
                <option value="4">За год</option>
              </select>
              <button className="border-l border-[#E9EEF4] p-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6555_818)">
                    <path
                      d="M3.69 10.5049C3.935 10.7499 4.33 10.7499 4.575 10.5049L8.73 6.3499C8.925 6.1549 8.925 5.8399 8.73 5.6449L4.575 1.4899C4.33 1.2449 3.935 1.2449 3.69 1.4899C3.445 1.7349 3.445 2.1299 3.69 2.3749L7.31 5.9999L3.685 9.6249C3.445 9.8649 3.445 10.2649 3.69 10.5049Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6555_818">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6555_827)">
                    <path
                      d="M8.33333 8.35L12.5 8.35V17.5H8.33333L8.33333 8.35ZM14.1667 17.5H16.6667C17.5833 17.5 18.3333 16.75 18.3333 15.8333V8.33333L14.1667 8.33333V17.5ZM16.6667 2.5L4.16667 2.5C3.25 2.5 2.5 3.25 2.5 4.16667L2.5 6.66667L18.3333 6.66667V4.16667C18.3333 3.25 17.5833 2.5 16.6667 2.5ZM2.5 15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H6.66667L6.66667 8.33333H2.5L2.5 15.8333Z"
                      fill="#303940"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6555_827">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-medium leading-6 text-[#303940]">Столбцы</p>
              </button>
              <button className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6555_832)">
                    <path
                      d="M3.54169 4.67492C5.47503 7.15825 8.33336 10.8333 8.33336 10.8333L8.33336 14.9999C8.33336 15.9166 9.08336 16.6666 10 16.6666C10.9167 16.6666 11.6667 15.9166 11.6667 14.9999V10.8333C11.6667 10.8333 14.525 7.15825 16.4584 4.67492C16.8834 4.12492 16.4917 3.33325 15.7917 3.33325L4.20003 3.33325C3.50836 3.33325 3.11669 4.12492 3.54169 4.67492Z"
                      fill="#303940"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6555_832">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-medium leading-6 text-[#303940]">Фильтр</p>
              </button>
              <button className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.16663 15.8333C4.16663 15.6122 4.25442 15.4003 4.4107 15.244C4.56698 15.0877 4.77895 14.9999 4.99996 14.9999L15 14.9999C15.221 14.9999 15.4329 15.0877 15.5892 15.244C15.7455 15.4003 15.8333 15.6122 15.8333 15.8333C15.8333 16.0543 15.7455 16.2662 15.5892 16.4225C15.4329 16.5788 15.221 16.6666 15 16.6666H4.99996C4.77895 16.6666 4.56698 16.5788 4.4107 16.4225C4.25442 16.2662 4.16663 16.0543 4.16663 15.8333ZM6.91079 9.41075C7.06707 9.25453 7.27899 9.16676 7.49996 9.16676C7.72093 9.16676 7.93285 9.25453 8.08913 9.41075L9.16663 10.4883V4.16659C9.16663 3.94557 9.25442 3.73361 9.4107 3.57733C9.56698 3.42105 9.77895 3.33325 9.99996 3.33325C10.221 3.33325 10.4329 3.42105 10.5892 3.57733C10.7455 3.73361 10.8333 3.94557 10.8333 4.16659V10.4883L11.9108 9.41075C11.9877 9.33116 12.0796 9.26767 12.1813 9.224C12.283 9.18033 12.3923 9.15734 12.503 9.15638C12.6136 9.15541 12.7233 9.1765 12.8258 9.2184C12.9282 9.2603 13.0212 9.32218 13.0995 9.40042C13.1777 9.47867 13.2396 9.57171 13.2815 9.67412C13.3234 9.77654 13.3445 9.88627 13.3435 9.99692C13.3425 10.1076 13.3196 10.2169 13.2759 10.3186C13.2322 10.4203 13.1687 10.5122 13.0891 10.5891L10.5891 13.0891C10.4329 13.2453 10.2209 13.3331 9.99996 13.3331C9.77899 13.3331 9.56707 13.2453 9.41079 13.0891L6.91079 10.5891C6.75457 10.4328 6.6668 10.2209 6.6668 9.99992C6.6668 9.77895 6.75457 9.56702 6.91079 9.41075Z"
                    fill="#303940"
                  />
                </svg>
                <p className="font-medium leading-6 text-[#303940]">Скачать</p>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[114px] w-[95%]"></div>
    </>
  );
};

export default ClientsHead;
