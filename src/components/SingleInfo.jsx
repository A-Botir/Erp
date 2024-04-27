import React, { useContext } from "react";
import { UseAllContext } from "../App";
import { FormControlLabel, Switch } from "@mui/material";

const SingleInfo = () => {
  const {  } = useContext(UseAllContext);
  return (
      <div className="px-6 pt-6">
        <div className="w-[60%] rounded-md bg-white">
          <div className="head px-3 py-2">
            <h3 className="font-semibold text-[#1A2024]">Общие сведения</h3>
          </div>
          <div className="flex justify-between gap-4 px-3 py-2">
            <div>
              <img
                src="https://34travel.me/media/upload/images/2017/april/libraries/stockholm.jpg"
                alt="img"
                className="mb-2 h-[120px] w-[120px] rounded-[50%]"
              />
              <button className="font-medium text-[#4094F7]">
                Изменить фото
              </button>
            </div>
            <form className="w-[75%]">
              <label className="mb-4 flex w-full items-center justify-between">
                <p className="font-semibold text-[#48535B]">Название</p>
                <input
                  type="text"
                  className="max-w-[325px] flex-grow rounded-lg border border-[#E5E9EB] px-3 py-2 outline-none"
                />
              </label>
              <label className="mb-4 flex w-full items-center justify-between">
                <p className="font-semibold text-[#48535B]">Начало акции</p>
                <input
                  type="date"
                  className="max-w-[325px] flex-grow rounded-lg border border-[#E5E9EB] px-3 py-2 outline-none"
                  value="10.06.2021"
                />
              </label>
              <label className="mb-4 flex w-full items-center justify-between">
                <p className="font-semibold text-[#48535B]">Конец акции</p>
                <input
                  type="date"
                  className="max-w-[325px] flex-grow rounded-lg border border-[#E5E9EB] px-3 py-2 outline-none"
                  value="01.09.2021"
                />
              </label>
              <label className="flex w-full items-center gap-4">
                <p className="font-semibold text-[#48535B]">Статус</p>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Активный"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
  );
};

export default SingleInfo;
