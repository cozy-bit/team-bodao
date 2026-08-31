import Logo from "../../assets/images/logo-bodao.png";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full bg-black text-justify px-5">
      <section className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[10px] justify-around text-white py-[20px]  lg:px-0 w-full lg:w-[80vw]">
        
        <div className="w-full lg:w-[30vw] flex-1">
          <div>
            <img src={Logo} alt="Logo" className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px]" />
          </div>
          <div className="text-sm lg:text-base mt-3">
            Как уже неоднократно упомянуто, реплицированные с зарубежных
            источников, современные исследования представлены в исключительно
            положительном свете. Как принято считать, активно развивающиеся.
          </div>
          <div className="flex gap-[20px] mt-[20px] text-[20px] h-[25px]">
            <FaInstagram className="hover:text-blue-500 transition-colors hover:scale-110 duration-300 hover:cursor-pointer" />
            <FaFacebookF className="hover:text-blue-500 transition-colors hover:scale-110 duration-300 hover:cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 transition-colors hover:scale-110 duration-300 hover:cursor-pointer" />
            <FaXTwitter className="hover:text-blue-500 transition-colors hover:scale-110 duration-300 hover:cursor-pointer" />
          </div>
          <p className="mt-4 text-sm">Политика конфиденциальности</p>
        </div>

        <div className="w-full sm:w-auto flex-1 text-left lg:text-center">
          <h3 className="text-[16px] font-bold mb-6 lg:mb-12">
            Разделы сайта
          </h3>

          <div className="flex flex-col gap-4 lg:gap-6 text-[14px]">
            <a href="#" className="hover:text-gray-400 transition">
              О школе
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Тренеры
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Направления
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Расписание занятий
            </a>
          </div>
        </div>

        <div className="w-full sm:w-auto flex-1 text-left lg:text-center">
          <h3 className="text-[16px] font-bold mb-6 lg:mb-12">
            Контакты
          </h3>

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[#f5b900] text-[10px] font-bold uppercase mb-2">
                Номер телефона; What's App
              </p>
              
                <a href="tel:+79099330059"
                className="text-[14px] font-bold hover:text-gray-400 transition"
              >
                +7(909)933-00-59
              </a>
            </div>

            <div>
              <p className="text-[#f5b900] text-[10px] font-bold uppercase mb-2">
                Эл.почта
              </p>
              
                <a href="mailto:nestya@inbox.ru"
                className="text-[14px] font-bold hover:text-gray-400 transition break-all"
              >
                nestya@inbox.ru
              </a>
            </div>

            <div>
              <p className="text-[#f5b900] text-[10px] font-bold uppercase mb-2">
                Адреса залов
              </p>
              <p className="text-[14px] font-bold leading-6">
                Москва, 1-ый Партийный пер., 1, стр. 57, к. 3.
              </p>
              <p className="text-[14px] font-bold leading-6 mt-4">
                Мытищи, Летная 40к1 домофон 1.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}