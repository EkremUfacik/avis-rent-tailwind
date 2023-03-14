import React, { useState } from "react";
import DatePick from "./DatePicker";

const MainModule = () => {
  const [select, setSelect] = useState("car");
  const handleSelect = (e) => {
    setSelect(e.target.value);
    console.log(select);
  };

  return (
    <div className=" main text-white h-screen flex pt-40 justify-center">
      {/* <div className="bg-gray-200 flex items-center justify-center flex-col text-white"> */}
      {/* <div className="flex h-36 "> */}

      <div className="flex flex-col bg-primary px-2 h-[150px] mt-10">
        <p className="flex flex-1 items-end pb-2">1.</p>
        <p className="flex flex-1 items-end pb-5">2.</p>
      </div>

      <div className="modal-container">
        <div className="w-fit bg-modalBlack">
          <label
            className={`py-2 px-4 inline-block transition-all ${
              select === "car" ? "bg-modalBg" : "cursor-pointer"
            }`}
            htmlFor="car"
          >
            <input
              type="radio"
              name="rentType"
              value="car"
              id="car"
              checked={select === "car"}
              onChange={handleSelect}
            />

            <span className="pl-2">Araç Kirala</span>
          </label>

          <label
            className={`py-2 px-4 inline-block ${
              select === "caravan" ? "bg-modalBg" : "cursor-pointer"
            }`}
            htmlFor="caravan"
          >
            <input
              type="radio"
              name="rentType"
              value="caravan"
              id="caravan"
              checked={select === "caravan"}
              onChange={handleSelect}
            />
            <span className="pl-2">Karavan Kirala</span>
          </label>

          {/* <button className="py-2 px-5">Araç Kirala</button> */}
          {/* <button className="py-2 px-5 bg-modalBlack">Karavan Kirala</button> */}
        </div>

        <div className="flex items-center bg-modalBg px-4 py-5 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <p
                className="w-10 text-xs border-l-2 border-primary pl-2"
                htmlFor="office1"
              >
                Teslim Alma Ofisi
              </p>
              <select
                name="office1"
                id="office1"
                className="p-3 w-52 ml-4 text-black"
              >
                <option disabled defaultValue="istanbul">
                  Alış Ofisi Seçiniz
                </option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="aydın">Aydın</option>
                <option value="bursa">Bursa</option>
              </select>
            </div>

            <div className="flex">
              <p
                htmlFor="office2"
                className="w-10 text-xs border-l-2 border-primary pl-2"
              >
                Teslim Etme Ofisi
              </p>
              <select
                name="office2"
                id="office2"
                className="p-3 w-52 ml-4 text-black"
              >
                <option disabled defaultValue="istanbul">
                  İade Ofisi Seçiniz
                </option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="aydın">Aydın</option>
                <option value="bursa">Bursa</option>
              </select>
            </div>
          </div>
          <div>
            <DatePick />
          </div>
        </div>
        <div className="w-full bg-modalBlack text-sm flex justify-between items-center p-4">
          <p className="text-xs">AVİS İNDİRİM KODU</p>
          <button className="bg-primary py-4 px-7 rounded-3xl text-xs">
            2 GÜN KİRALA
          </button>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default MainModule;
