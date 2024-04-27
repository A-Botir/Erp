import React from "react";
import Cards from "../components/Cards";
import Diagramma from "../components/Diagramma";
import GridTable from "../components/GridTable";

const Overview = () => {
  const clearActiveLogin = () => {
    localStorage.setItem("activelogin", JSON.stringify({}));
  };
  return (
    <>
      <header className="fixed right-0 top-0 z-[10] flex w-[95%] justify-between bg-white px-4 py-3 shadow-head">
        <h2 className="text-[24px] font-semibold leading-8">Cabinet</h2>
        <button
          className="rounded-md bg-lime-300 px-3 py-2"
          onClick={clearActiveLogin}
        >
          Delete
        </button>
      </header>
      <div className="h-12 w-full"></div>
      <section className="pl-6 pr-12 pt-6">
        <Cards />
        <Diagramma />
        <GridTable />
      </section>
    </>
  );
};

export default Overview;
