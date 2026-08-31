import { coaches } from '../../data/coaches';

export default function Coaches() {
  return (
    <section className="relative w-full bg-[#0F0F10] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 md:px-10 lg:px-14">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold uppercase text-white tracking-wider mb-8 sm:mb-10 lg:mb-12 text-left">
          ТРЕНЕРЫ
        </h2>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 xl:gap-10">
          {coaches.map((coach) => (
            <div key={coach.id} className="flex flex-col group">
              {/* Photo with Name Overlay */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#18181A]">
                <img
                  src={coach.image}
                  alt={coach.alt || `${coach.firstName} ${coach.lastName}`}
                  className="w-full h-full object-cover object-top grayscale contrast-110 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle gradient overlay at bottom for maximum contrast */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                />

                {/* Name Overlay at bottom */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-wrap items-baseline gap-2 sm:gap-3 select-none">
                  <span
                    className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-black uppercase tracking-wider"
                    style={{
                      WebkitTextStroke: '1.5px white',
                      color: 'transparent',
                    }}
                  >
                    {coach.firstName}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-black uppercase tracking-wider text-white">
                    {coach.lastName}
                  </span>
                </div>
              </div>

              {/* Description text under photo */}
              <p className="text-[#B3B3B3] text-xs sm:text-sm lg:text-[14px] leading-relaxed lg:leading-[1.7] mt-4 sm:mt-5">
                {coach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
