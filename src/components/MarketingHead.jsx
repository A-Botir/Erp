import { useContext } from "react";
import { UseAllContext } from "../App";

const MarketingHead = () => {
  const { openside } = useContext(UseAllContext);
  return (
    <>
      <header
        className={`fixed right-0 top-0 z-20  bg-white shadow-head ${openside ? "w-[80%]" : "w-[91%]"}`}
      >
        <div className="flex items-center justify-between px-3">
          <h2 className="py-3 text-[20px] font-semibold leading-8 text-[#303940]">
            Список акций
          </h2>
          <ul className="flex items-center justify-center">
            <li className="shadow-btn">
              <button className="flex items-center gap-1 p-3 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_427_649)">
                    <path
                      d="M14.7083 5.29182C13.35 3.93349 11.425 3.15016 9.30831 3.36682C6.24998 3.67516 3.73331 6.15849 3.39164 9.21682C2.93331 13.2585 6.05831 16.6668 9.99998 16.6668C12.6583 16.6668 14.9416 15.1085 16.0083 12.8668C16.275 12.3085 15.875 11.6668 15.2583 11.6668C14.95 11.6668 14.6583 11.8335 14.525 12.1085C13.5833 14.1335 11.325 15.4168 8.85831 14.8668C7.00831 14.4585 5.51664 12.9502 5.12498 11.1002C4.42498 7.86682 6.88331 5.00016 9.99998 5.00016C11.3833 5.00016 12.6166 5.57516 13.5166 6.48349L12.2583 7.74182C11.7333 8.26682 12.1 9.16682 12.8416 9.16682H15.8333C16.2916 9.16682 16.6666 8.79182 16.6666 8.33349V5.34182C16.6666 4.60016 15.7666 4.22516 15.2416 4.75016L14.7083 5.29182Z"
                      fill="#4094F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_427_649">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-medium leading-6 text-[#4094F7]">
                  Обновить Телеграмм
                </p>
              </button>
            </li>
            <li className="shadow-btn">
              <button className="flex items-center gap-1 p-3 ">
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
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between bg-[#F7F9FB] px-3 py-3 shadow-head">
          <label className="flex w-[40%] items-center gap-2 rounded-md border border-[#E5E9EB] bg-white px-2 py-1">
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
          </label>
          <div className="flex items-center gap-6">
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
      </header>
      <div className="h-[114px] w-full"></div>
    </>
  );
};

export default MarketingHead;
