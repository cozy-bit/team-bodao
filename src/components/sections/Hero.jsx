import Button from '../ui/Button';
import heroBoxer from '../../assets/images/hero-boxer.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[420px] w-[86%] max-w-[640px] overflow-hidden rounded-t-full sm:h-[560px] md:h-[760px]">
          <img
            src={heroBoxer}
            alt="Франсимара Бодао Барросо"
            className="h-full w-full object-cover object-top grayscale"
          />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-14 pt-10 md:min-h-[780px] md:px-8 md:pb-20 md:pt-14">
        <p className="max-w-[300px] text-lg font-bold leading-tight text-white md:text-xl">
          Bodao team команда профессионального бойца ММА из Бразилии
        </p>

        <h1 className="my-10 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[clamp(2rem,5.2vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:my-auto md:flex-nowrap md:whitespace-nowrap">
          <span>Франсимара</span>
          <span>Бодао</span>
          <span>Барросо</span>
        </h1>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-white md:text-[15px]">
            У Бодао более 50 проф поединков за плечами, он проводил бои в лучших
            лигах ММА мира, 5 лет в UFC и 3 года в PFL. И теперь он открыл свои
            клубы в России что бы поделиться с вами своим опытом.
          </p>
          <Button className="rounded-full md:mb-2">ЗАПИСАТЬСЯ</Button>
        </div>
      </div>
    </section>
  );
}
