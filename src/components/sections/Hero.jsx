import Button from '../ui/Button';
import fighter from '../../assets/images/hero-fighter.png';

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] flex-col overflow-hidden bg-dark-bg sm:min-h-[680px] md:min-h-[880px]">
      <div className="pointer-events-none absolute left-1/2 top-[6%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#2b2b30_0%,transparent_70%)] md:h-[820px] md:w-[820px]" />

      <img
        src={fighter}
        alt="Франсимара Бодао Барросо"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[78%] max-w-none -translate-x-1/2 object-contain object-bottom grayscale md:h-[92%]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-10 md:px-8 md:py-12">
        <p className="max-w-[320px] text-base font-bold leading-tight text-white md:text-xl">
          Bodao team команда профессионального бойца ММА из Бразилии
        </p>

        <div className="my-auto flex flex-col gap-1 py-10 md:flex-row md:items-center md:justify-between md:gap-6">
          <span className="text-[clamp(2.25rem,5.6vw,5rem)] font-extrabold uppercase leading-none tracking-tight text-white">
            Франсимара
          </span>
          <span className="text-[clamp(2.25rem,5.6vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-right">
            Бодао <br className="hidden md:block" />
            Барросо
          </span>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-white md:text-[15px]">
            У Бодао более 50 проф поединков за плечами, он проводил бои в лучших
            лигах ММА мира, 5 лет в UFC и 3 года в PFL. И теперь он открыл свои
            клубы в России что бы поделиться с вами своим опытом.
          </p>
          <Button className="rounded-full md:mb-1">ЗАПИСАТЬСЯ</Button>
        </div>
      </div>
    </section>
  );
}
