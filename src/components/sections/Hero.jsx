import Button from '../ui/Button';
import fighter from '../../assets/images/hero-fighter.png';
import { useModal } from '../../context/ModalContext';

const MASK =
  'radial-gradient(ellipse 62% 78% at 50% 44%, #000 32%, transparent 78%)';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative overflow-hidden bg-dark-bg">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#26262b_0%,transparent_70%)] md:top-[4%] md:h-[780px] md:w-[780px]" />

      {/* Desktop Fighter Photo (Visually Centered) */}
      <img
        src={fighter}
        alt="Франсимара Бодао Барросо"
        aria-hidden="true"
        style={{ WebkitMaskImage: MASK, maskImage: MASK }}
        className="pointer-events-none absolute bottom-0 left-[51.5%] hidden h-[96%] max-w-none -translate-x-1/2 object-contain object-bottom md:block"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-dark-bg to-transparent md:block" />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col px-5 py-10 md:min-h-[860px] md:px-10 md:py-14 lg:px-14">
        <p className="max-w-[300px] text-base font-bold leading-tight text-white md:text-xl">
          Bodao team команда профессионального бойца ММА из Бразилии
        </p>

        <div className="mt-8 flex flex-col gap-1 md:my-auto md:flex-row md:items-center md:justify-between md:gap-6">
          <span className="text-[clamp(2.5rem,11vw,3.75rem)] font-extrabold uppercase leading-none tracking-tight text-white md:text-[clamp(3rem,5.4vw,5rem)]">
            Франсимара
          </span>
          <span className="text-[clamp(2.5rem,11vw,3.75rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-right md:text-[clamp(3rem,5.4vw,5rem)]">
            Бодао <br className="hidden md:block" />
            Барросо
          </span>
        </div>

        {/* Mobile Fighter Photo */}
        <img
          src={fighter}
          alt="Франсимара Бодао Барросо"
          style={{ WebkitMaskImage: MASK, maskImage: MASK }}
          className="mx-auto mt-4 w-[72%] max-w-[300px] translate-x-2 md:hidden"
        />

        <div className="mt-8 flex flex-col items-start gap-6 md:mt-0 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-white md:text-[15px]">
            У Бодао более 50 проф поединков за плечами, он проводил бои в лучших
            лигах ММА мира, 5 лет в UFC и 3 года в PFL. И теперь он открыл свои
            клубы в России что бы поделиться с вами своим опытом.
          </p>
          <Button
            onClick={() => openModal()}
            fullWidth
            className="sm:max-w-[300px] md:mb-1"
          >
            ЗАПИСАТЬСЯ
          </Button>
        </div>
      </div>
    </section>
  );
}
