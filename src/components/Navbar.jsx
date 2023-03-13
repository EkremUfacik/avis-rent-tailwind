import React, { useRef, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import AccountForm from "./AccountForm";

const navList = [
  {
    li: "Rezervasyon",
    subLi: ["Rezervasyon İptal/Güncelleme", "Nasıl Rezervasyon Yaparsın"],
  },
  {
    li: "Araçlar",
    subLi: ["Tüm Kiralık Araçlar", "Ekonomik Araçlar", "Konfor Araçlar"],
  },
  {
    li: "Kampanyalar",
    subLi: ["Avis Kampanyaları", "Kurumsal Kampanyalar"],
  },
  {
    li: "Ofisler",
    subLi: ["Şehir Ofisleri", "Havalimanı Ofisleri"],
  },
  {
    li: "Hizmetler",
    subLi: ["Uzun Dönem Filo Kiralama", "Kurumsal Kiralama"],
  },
  {
    li: "Filo Kiralama",
    subLi: [],
  },
];

const Navbar = () => {
  const ref = useRef();
  const [clickSign, setClickSign] = useState(false);
  // const handleSign = (e) => {
  //   ref.current.classList.toggle("hidden");
  //   e.target.classList.toggle("text-red-600");
  //   e.target.classList.toggle("bg-white");
  // };

  return (
    <>
      {/* <div className="h-20  " /> */}
      <nav className="fixed inset-0 h-20 bg-primary flex justify-between items-center px-8">
        <div className="">
          <h1 className="text-5xl text-white font-bold">AVIS</h1>
        </div>

        <div className="list-container flex h-full ">
          {navList?.map((item, index) => (
            <div className=" relative h-full group  hover:bg-white transition-all">
              <div className=" h-full text-white flex items-center px-3 transition-all cursor-pointer  group-hover:text-red-600 shadow font-medium text-sm ">
                {item.li}
              </div>
              {item.subLi.length > 0 && (
                <ul
                  className={`absolute hidden  group-hover:block transition-all bg-white w-60 px-1 divide-y ${
                    index >= navList.length / 2 ? "right-0" : ""
                  } `}
                >
                  {item?.subLi?.map((sub, index) => (
                    <li className="py-2 pl-1 text-sm font-medium hover:text-primary hover:pl-2 cursor-pointer transition-all ">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="relative">
            <div
              className={`h-full text-white flex items-center gap-2 justify-center px-3 transition-all cursor-pointer hover:text-red-600 shadow font-medium text-sm hover:bg-white ${
                clickSign ? "bg-white !text-red-700" : ""
              } `}
              onClick={() => setClickSign((prev) => !prev)}
            >
              Üye Girişi
              <FiLogIn
                size={20}
                className={`pointer-events-none ${
                  clickSign ? "bg-white text-red-600" : ""
                } `}
              />
            </div>

            <div
              ref={ref}
              className={`bg-white absolute right-0 w-80 ${
                clickSign ? "" : "hidden"
              } `}
            >
              <div className="flex justify-center py-4">
                <button className="py-2 px-10 bg-black text-white">
                  Bireysel
                </button>
                <button className="py-2 px-10  text-white bg-primary">
                  Kurumsal
                </button>
              </div>
              <AccountForm />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
