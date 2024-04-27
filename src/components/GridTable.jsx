import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Число", width: 220 },
  {
    field: "Customer",
    headerName: "Доставка",
    width: 220,
    editable: false,
  },
  {
    field: "date",
    headerName: "Доставка",
    width: 220,
    editable: false,
  },
  {
    field: "Status",
    headerName: "Самовывоз",
    width: 220,
    editable: false,
  },
  {
    field: "Agragator",
    headerName: "Агрегаторы",
    width: 220,
    editable: false,
  },
];

const rows = [
  {
    id: "5560",
    Customer: "4600",
    Status: "6065",
    date: "1577",
    Agragator: "1374",
  },
  {
    id: "5045",
    Customer: "3536",
    Status: "8829",
    date: "8811",
    Agragator: "8861",
  },
  {
    id: "9151",
    Customer: "9462",
    Status: "6025",
    date: "3933",
    Agragator: "7791",
  },
  {
    id: "1148",
    Customer: "2798",
    Status: "5626",
    date: "5028",
    Agragator: "4349",
  },
  {
    id: "9359",
    Customer: "6690",
    Status: "1439",
    date: "9374",
    Agragator: "1784",
  },
  {
    id: "4152",
    Customer: "9261",
    Status: "8013",
    date: "4846",
    Agragator: "5984",
  },
];

const GridTable = () => {
  return (
    <section className="my-5 w-full">
      <div className="rounded-md bg-white">
        <div className="shadow-heading p-4">
          <h3 className="text-[18px] font-semibold leading-6 text-[#5B6871]">
            Общий счёт
          </h3>
        </div>
        <div className="mx-auto w-[94%] p-4">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[6]}
            disableRowSelectionOnClick
            hideFooter
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GridTable;
