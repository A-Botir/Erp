import React from "react";

const Review = () => {
  return (
    <div className="rounded-md bg-white p-6">
      <table className="w-full rounded-md border border-[#E5E9EB] py-2 ">
        <thead>
          <tr className="border-b border-[#E5E9EB]">
            <th className="px-2 py-1 text-left font-semibold">Название</th>
            <th className="text-center font-semibold">Тип</th>
            <th className="py-2 font-semibold">Статус</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {/* {datagrid.filter(filterDataByCategory).map((filteredRow) => ( */}
          <tr className="border-b border-[#E5E9EB]">
            <td className="px-2 ">😉 Курьер молодец</td>
            <td className="flex justify-center">
              <svg
                width="200"
                height="48"
                viewBox="0 0 200 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="200" height="48" fill="white" />
                <path
                  d="M108.346 24.4838C108.721 23.9883 108.929 23.3812 108.929 22.7495C108.929 21.7472 108.369 20.7986 107.467 20.2695C107.235 20.1334 106.97 20.0617 106.701 20.062H101.349L101.482 17.3187C101.514 16.6557 101.279 16.0262 100.824 15.5463C100.601 15.3098 100.331 15.1216 100.032 14.9934C99.7328 14.8651 99.4106 14.7996 99.0852 14.8008C97.9245 14.8008 96.8977 15.582 96.5896 16.7004L94.6722 23.6423H94.6655V33.1959H105.208C105.413 33.1959 105.614 33.1557 105.799 33.0753C106.862 32.6222 107.547 31.5843 107.547 30.4325C107.547 30.1512 107.507 29.8745 107.427 29.6066C107.802 29.1111 108.009 28.5039 108.009 27.8722C108.009 27.591 107.969 27.3142 107.889 27.0463C108.264 26.5508 108.471 25.9437 108.471 25.312C108.467 25.0307 108.427 24.7517 108.346 24.4838ZM91.0718 24.3566V32.4816C91.0718 32.8767 91.391 33.1959 91.7861 33.1959H93.237V23.6423H91.7861C91.391 23.6423 91.0718 23.9615 91.0718 24.3566Z"
                  fill="#38D9B9"
                />
              </svg>
            </td>
            <td>
              <p className="mx-2 rounded-md bg-[#4094F726] py-1 text-center font-medium text-[#4094F7]">
                Активный
              </p>
            </td>
            <td className="flex justify-end">
              <button className="px-2 py-5 shadow-tdbtn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                    fill="#4094F7"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b border-[#E5E9EB]">
            <td className="px-2 ">🐌 Долгая доставка </td>
            <td className="flex justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_483_92)">
                  <path
                    d="M1.65367 9.51617C1.27867 10.0117 1.07108 10.6188 1.07108 11.2505C1.07108 12.2528 1.63135 13.2014 2.53313 13.7305C2.76529 13.8666 3.02961 13.9383 3.29876 13.938L8.65144 13.938L8.51751 16.6813C8.48626 17.3443 8.72063 17.9738 9.17599 18.4537C9.39946 18.6902 9.66906 18.8784 9.96814 19.0066C10.2672 19.1349 10.5894 19.2004 10.9148 19.1992C12.0755 19.1992 13.1023 18.418 13.4104 17.2996L15.3278 10.3577L15.3345 10.3577L15.3345 0.804115L4.79206 0.804114C4.58671 0.804114 4.38581 0.844292 4.20055 0.924649C3.13805 1.37777 2.45278 2.41572 2.45278 3.56751C2.45278 3.84876 2.49296 4.12554 2.57331 4.3934C2.19831 4.88893 1.99073 5.49608 1.99073 6.12777C1.99073 6.40902 2.0309 6.68581 2.11126 6.95367C1.73626 7.4492 1.52867 8.05634 1.52867 8.68804C1.53314 8.96929 1.57331 9.24831 1.65367 9.51617ZM18.9282 9.6434L18.9282 1.5184C18.9282 1.12331 18.609 0.804115 18.2139 0.804115L16.763 0.804115L16.763 10.3577L18.2139 10.3577C18.609 10.3577 18.9282 10.0385 18.9282 9.6434Z"
                    fill="#F76659"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_483_92">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(20 20) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </td>
            <td>
              <p className="mx-2 rounded-md bg-[#F7665926] py-1 text-center font-medium text-[#F76659]">
                Не активный
              </p>
            </td>
            <td className="flex justify-end">
              <button className="px-2 py-5 shadow-tdbtn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                    fill="#4094F7"
                  />
                </svg>
              </button>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Review;