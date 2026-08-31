import images from '../../data/directions';

export default function Directions() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wider mb-8 sm:mb-10 lg:mb-12">
          НАПРАВЛЕНИЯ
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {images.map((el, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer bg-neutral-950"
          >
            {/* Изображение с плавным зумом, обесцвечиванием и проявлением цвета */}
            <img
              src={el}
              alt={`Направление ${index + 1}`}
              className="w-full h-full object-cover grayscale brightness-90 contrast-105 transition-all duration-700 ease-out group-hover:scale-108 group-hover:grayscale-0 group-hover:brightness-105 group-hover:contrast-115"
            />

            {/* Внутренний эффект затемнения / виньетки */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-70 group-hover:opacity-30 transition-opacity duration-500 ease-out" />

            {/* Мягкое радиальное затенение по краям */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.6)_100%)] opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
