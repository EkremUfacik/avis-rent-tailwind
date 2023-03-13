import React from "react";

const AccountForm = () => {
  return (
    <form action="" className="flex flex-col px-5 ">
      <label htmlFor="email" className="text-sm">
        <p className="text-xs mb-2">E-Posta*</p>
        <input
          className="border w-full p-2 focus:ring-2"
          type="email"
          id="email"
        />
      </label>
      <label htmlFor="password" className="my-3 ">
        <div className="flex justify-between items-center">
          <p className="text-xs">Şifre*</p>
          <p className="text-xs hover:text-red-600 cursor-pointer">
            ŞİFREMİ UNUTTUM
          </p>
        </div>

        <input
          className="border w-full p-2 focus:ring-2 mt-2"
          type="password"
          id="password"
        />
      </label>
      <div className="flex justify-between items-center my-4">
        <label
          htmlFor="checkbox"
          className="text-xs flex items-center gap-2 cursor-pointer"
        >
          <input
            id="checkbox"
            type="checkbox"
            className="w-6 h-6 cursor-pointer hover:ring-2 transition-all "
          />
          BENİ HATIRLA
        </label>

        <button className="bg-primary text-white px-6 py-3 rounded-2xl text-xs">
          OTURUM AÇ
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
