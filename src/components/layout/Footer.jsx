import Logo from "../../assets/images/logo-bodao.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full bg-black text-left px-5 py-12 sm:py-16">
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 text-white text-left w-full max-w-[1240px]">
        {/* Левая колонка: Логотип, описание и соцсети */}
        <div className="w-full lg:w-[320px] flex-1 text-left">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px]"
            />
          </div>
          <div className="text-sm leading-relaxed mt-4 text-[#B3B3B3] text-left">
            Как уже неоднократно упомянуто, реплицированные с зарубежных
            источников, современные исследования представлены в исключительно
            положительном свете. Как принято считать, активно развивающиеся.
          </div>
          <div className="flex items-center gap-5 mt-6 text-lg">
            <FaFacebookF className="hover:text-white/80 transition-colors hover:scale-110 duration-200 cursor-pointer text-white" />
            <FaXTwitter className="hover:text-white/80 transition-colors hover:scale-110 duration-200 cursor-pointer text-white" />
            <FaLinkedin className="hover:text-white/80 transition-colors hover:scale-110 duration-200 cursor-pointer text-white" />
            <FaInstagram className="hover:text-white/80 transition-colors hover:scale-110 duration-200 cursor-pointer text-white" />
          </div>
          <p className="mt-6 text-sm text-[#B3B3B3] hover:text-white transition cursor-pointer text-left">
            Политика конфиденциальности
          </p>
        </div>

        {/* Средняя колонка: Разделы сайта */}
        <div className="w-full sm:w-auto flex-1 text-left lg:pt-3.5">
          <h3 className="text-base font-bold mb-6 text-white text-left">
            Разделы сайта
          </h3>

          <div className="flex flex-col gap-4 text-sm text-[#B3B3B3] text-left">
            <a href="#" className="hover:text-white transition">
              О школе
            </a>
            <a href="#" className="hover:text-white transition">
              Тренеры
            </a>
            <a href="#" className="hover:text-white transition">
              Направления
            </a>
            <a href="#" className="hover:text-white transition">
              Расписание занятий
            </a>
          </div>
        </div>

        {/* Правая колонка: Контакты */}
        <div className="w-full sm:w-auto flex-1 text-left lg:pt-3.5">
          <h3 className="text-base font-bold mb-6 text-white text-left">
            Контакты
          </h3>

          <div className="flex flex-col gap-4 text-left">
            <div className="text-left">
              <p className="text-[#f5b900] text-[10px] font-bold uppercase mb-1.5 tracking-wider">
                НОМЕР ТЕЛЕФОНА; WHAT'S APP
              </p>
              <a
                href="tel:+79099330059"
                className="text-sm font-bold text-white hover:text-gray-300 transition"
              >
                +7(909)933-00-59
              </a>
            </div>

            <div className="text-left">
              <p className="text-[#f5b900] text-[10px] font-bold uppercase mb-1.5 tracking-wider">
                ЭЛ.ПОЧТА
              </p>
              <a
                href="mailto:nestya@inbox.ru"
                className="text-sm font-bold text-white hover:text-gray-300 transition break-all"
              >
                nestya@inbox.ru
              </a>
            </div>

            <div className="text-left">
              <p className="text-[#f5b900] text-[10px] font-bold uppercase mb-1.5 tracking-wider">
                АДРЕСА ЗАЛОВ
              </p>
              <p className="text-sm font-bold text-white leading-relaxed">
                Москва, 1-ый Партийный пер., 1, стр. 57, к. 3.
              </p>
              <p className="text-sm font-bold text-white leading-relaxed mt-2">
                Мытищи, Летная 40к1 домофон 1.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}