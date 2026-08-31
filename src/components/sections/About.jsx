import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import glovesImg from '../../assets/images/about-gloves.png';
import boxerImg from '../../assets/images/about-boxer.png';
import { useModal } from '../../context/ModalContext';

export default function About() {
  const { openModal } = useModal();
  const containerRef = useRef(null);
  const archRef = useRef(null);
  const circleRef = useRef(null);
  const buttonRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(100);
  const [circleTop, setCircleTop] = useState(null);

  useEffect(() => {
    const updateAlignment = () => {
      if (
        archRef.current &&
        circleRef.current &&
        buttonRef.current &&
        window.innerWidth >= 1024
      ) {
        const archRect = archRef.current.getBoundingClientRect();
        const circleRect = circleRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();

        // 1. Calculate the exact vertical center of the button relative to the arch photo
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        const circleRadius = circleRect.height / 2;
        const targetTop = buttonCenterY - archRect.top - circleRadius;

        setCircleTop(targetTop);

        // 2. Calculate the distance from circle's right edge to button's left edge
        const dist = buttonRect.left - circleRect.right;
        if (dist > 0) {
          setLineWidth(dist + 2);
        }
      } else {
        setCircleTop(null);
      }
    };

    updateAlignment();

    const observer = new ResizeObserver(updateAlignment);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener('resize', updateAlignment);
    const timer = setTimeout(updateAlignment, 150);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateAlignment);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0F0F10] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 md:px-10 lg:px-14">
        {/* Mobile Heading */}
        <h2 className="block md:hidden text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wider mb-8 text-left">
          О ШКОЛЕ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-14 items-start">
          {/* Left Column: Image Composition */}
          <div className="flex justify-center md:justify-start">
            <div className="relative inline-block">
              {/* Arched main photo */}
              <div
                ref={archRef}
                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[380px] h-[300px] sm:h-[340px] md:h-[370px] lg:h-[420px] overflow-hidden rounded-t-[140px] sm:rounded-t-[160px] md:rounded-t-[180px] lg:rounded-t-[210px] rounded-b-none bg-[#18181A]"
              >
                <img
                  src={glovesImg}
                  alt="Боксерские перчатки Bodao"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>

              {/* Circular overlay photo */}
              <div
                ref={circleRef}
                style={
                  circleTop !== null
                    ? { top: `${circleTop}px`, bottom: 'auto' }
                    : undefined
                }
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-8 md:-right-8 lg:-right-12 z-20 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-white overflow-hidden shadow-2xl bg-[#18181A]"
              >
                <img
                  src={boxerImg}
                  alt="Боец на ринге"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Title, Description & Button */}
          <div className="flex flex-col justify-between h-full pt-6 md:pt-0 lg:min-h-[420px] items-start text-left">
            <div>
              {/* Desktop / Tablet Heading */}
              <h2 className="hidden md:block text-3xl md:text-4xl lg:text-[44px] font-extrabold uppercase text-white tracking-wider leading-tight mb-5 lg:mb-7">
                О ШКОЛЕ
              </h2>

              {/* Description Text */}
              <p className="text-[#B3B3B3] text-xs sm:text-sm lg:text-[14px] leading-relaxed lg:leading-[1.75] font-normal max-w-xl">
                Повседневная практика показывает, что семантический разбор внешних
                противодействий, в своём классическом представлении, допускает
                внедрение благоприятных перспектив. А ещё сторонники тоталитаризма в
                науке, превозмогая сложившуюся непростую экономическую ситуацию,
                объективно рассмотрены соответствующими инстанциями. С учётом
                сложившейся международной обстановки, укрепление и развитие
                внутренней структуры выявляет срочную потребность поставленных
                обществом задач. Есть над чем задуматься: непосредственные участники
                технического прогресса будут своевременно верифицированы. Являясь
                всего лишь частью общей картины, акционеры крупнейших компаний будут
              </p>
            </div>

            {/* Action Button Container with Perfectly Centered Connector Line */}
            <div
              ref={buttonRef}
              className="relative mt-8 sm:mt-10 lg:mt-0 w-full sm:w-auto z-10"
            >
              {/* White connector line anchored directly to button's vertical center */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 h-[1.5px] bg-white pointer-events-none z-10"
                style={{ width: `${lineWidth}px` }}
              />
              <Button
                onClick={() => openModal()}
                fullWidth
                className="sm:w-[260px] lg:w-[280px]"
              >
                ЗАПИСАТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
