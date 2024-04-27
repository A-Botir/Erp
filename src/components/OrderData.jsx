import React, { useEffect, useState } from "react";
import { Tab, Tabs, Pagination } from "@mui/material";
import axios from "axios";

const OrderData = () => {
  const [category, setCategory] = React.useState("2");
  const [datagrid, setDatagrid] = useState([]);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/datagrid");
        setDatagrid(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterDataByCategory = (row) => {
    switch (category) {
      case "1":
        return row.category === "courier";
      case "2":
        return row.category === "new";
      case "3":
        return row.category === "operator";
      case "4":
        return row.category === "workpiece";
      case "5":
        return row.category === "completed";
      case "6":
        return row.category === "all";
      default:
        return false;
    }
  };

  return (
    <div className="rounded-md bg-white p-6">
      <div className="shadow-head">
        <Tabs
          value={category}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
            },
          }}
          aria-label="success tabs example"
        >
          <Tab value="1" label="Курьер в пути" />
          <Tab value="2" label="Новый" />
          <Tab value="3" label="Оператор принял" />
          <Tab value="4" label="Загатовка" />
          <Tab value="5" label="Завершен" />
          <Tab value="6" label="Все заказы" />
        </Tabs>
      </div>
      <div className="mt-5">
        <table className="w-full rounded-md border border-[#E5E9EB] py-2 ">
          <thead>
            <tr className="relative border-b border-[#E5E9EB]">
              <th className="px-2 pt-1">
                <input type="checkbox" />
              </th>
              <th className="p font-semibold">№</th>
              <th className="px-2 py-1 text-left font-semibold">Client</th>
              <th className="py-1 font-semibold">Id заказа</th>
              <th className="font-semibold">Таймер</th>
              <th className="px-2 py-1 font-semibold">Курьер</th>
              <th className="px-2 py-1 text-left font-semibold">Филиал</th>
              <th className="py-1 font-semibold">Тип Доставки</th>
              <th className="py-1 font-semibold">Цена Заказа</th>
              <th className="px-2 py-1 font-semibold">Адрес Клиента</th>
              <th className="absolute right-0"></th>
            </tr>
          </thead>
          <tbody>
            {datagrid.filter(filterDataByCategory).map((filteredRow) => (
              <tr
                key={filteredRow.id}
                className="relative border-b border-[#E5E9EB]"
              >
                <td className="flex justify-center py-4">
                  <input type="checkbox" />
                </td>
                <td className="py-2 text-center">{filteredRow.id}</td>
                <td className="px-2 py-2">
                  <p className="mb-1 leading-5">{filteredRow.client}</p>
                  <p className="font-medium leading-3 text-[#4094F7]">
                    {filteredRow.tell_number}
                  </p>
                </td>
                <td className="py-2 pr-2 text-center">
                  {filteredRow.order_id}
                </td>
                <td className="pl-2">
                  <p className="rounded-md bg-[#38D9B933] py-1 text-center font-medium text-[#1AC19D]">
                    {filteredRow.timer}
                  </p>
                </td>
                <td className="px-2 py-2 text-center">-</td>
                <td className="px-2 py-2">
                  <p className="mb-1 leading-5">{filteredRow.branch}</p>
                  <p className="font-medium leading-3 text-[#4094F7]">
                    {filteredRow.branch_tell}
                  </p>
                </td>
                <td className="w-[150px]">
                  <p className="rounded-md bg-[#F8DD4E4D] py-1 text-center font-medium text-[#D29404]">
                    {filteredRow.deliviry_type}
                  </p>
                </td>
                <td className="px-2 py-2 text-center">${filteredRow.price}</td>
                <td className="px-2 py-2">{filteredRow.adress}</td>
                <td className="shadow-td absolute right-[2px]  flex justify-center bg-white px-2 py-[13px]">
                  <button className="border">
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
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex justify-end py-2">
          <Pagination
            count={10}
            // page={currentPage}
            // onChange={pageChange}
            color="primary"
            shape="rounded"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderData;
