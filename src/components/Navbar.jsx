import React, { useRef } from "react";
import { FiLogIn } from "react-icons/fi";

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
  const handleSign = (e) => {
    ref.current.classList.toggle("hidden");
    e.target.classList.toggle("bg-white");
    e.target.classList.toggle("text-red-600");
  };

  return (
    <nav className="w-100 h-20 bg-primary flex justify-between items-center px-8">
      <div className="">
        <h1 className="text-5xl text-white font-bold">AVIS</h1>
      </div>

      <div className="flex h-full">
        {navList?.map((item, index) => (
          <div className="relative h-full group hover:bg-white transition-all ">
            <div className=" h-full text-white flex items-center px-3 transition-all cursor-pointer  group-hover:text-red-600 shadow font-medium text-sm ">
              {item.li}
            </div>
            {item.subLi.length > 0 && (
              <ul
                className={`absolute hidden  group-hover:block transition-all bg-white w-60 px-1 divide-y z-10 ${
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
            className="h-full text-white flex items-center gap-2 justify-center px-3 transition-all cursor-pointer hover:text-red-600 shadow font-medium text-sm hover:bg-white"
            onClick={handleSign}
          >
            Üye Girişi
            <FiLogIn size={20} className="pointer-events-none" />
          </div>

          <div ref={ref} className="bg-white absolute right-0 w-80 hidden">
            <div className="flex justify-center py-4">
              <button className="py-2 px-10 bg-black text-white">
                Bireysel
              </button>
              <button className="py-2 px-10  text-white bg-primary">
                Kurumsal
              </button>
            </div>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
