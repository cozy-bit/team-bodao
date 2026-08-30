import { MapPin, Phone } from 'lucide-react';
import logo from '../../assets/images/logo-bodao.png';

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-6 md:flex-row md:justify-between md:gap-8 md:px-8 md:py-7">
        <a href="#" className="shrink-0">
          <img
            src={logo}
            alt="Bodao Fight Team"
            className="h-16 w-16 md:h-[92px] md:w-[92px]"
          />
        </a>

        <div className="flex items-start gap-3 text-center md:text-left">
          <MapPin className="mt-0.5 hidden h-6 w-6 shrink-0 text-white sm:block" strokeWidth={1.5} />
          <address className="space-y-2 text-sm not-italic leading-snug text-white sm:text-[15px]">
            <p>Москва, 1-ый Партийный пер., 1, стр. 57, к. 3.</p>
            <p>Мытищи, Летная 40к1 домофон 1.</p>
          </address>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="hidden h-6 w-6 shrink-0 text-white sm:block" strokeWidth={1.5} />
          <div className="text-center md:text-right">
            <a
              href="tel:+77777073797"
              className="block text-lg font-bold text-white md:text-xl"
            >
              +7 (777) 707-37-97
            </a>
            <a
              href="https://wa.me/77777073797"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/70 underline underline-offset-2 hover:text-white"
            >
              Написать нам в What's app
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
