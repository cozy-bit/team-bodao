import insta1 from "../../assets/images/insta/1.png";
import insta2 from "../../assets/images/insta/2.png";
import insta3 from "../../assets/images/insta/3.png";
import insta5 from "../../assets/images/insta/4.png";
import insta6 from "../../assets/images/insta/5.png";
import insta4 from "../../assets/images/insta/6.png";
import insta7 from "../../assets/images/insta/7.png";
import insta8 from "../../assets/images/insta/8.png";
import insta9 from "../../assets/images/insta/9.png";

const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8, insta9];

export default function InstagramBlock() {
  return (
    <div className="w-full bg-black py-10 px-4 sm:px-8 lg:px-0 flex justify-center">
      <div className="w-full lg:w-[80vw]">
        <h2 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold uppercase mb-6 lg:mb-10">
          Блок инстаграмма
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden bg-neutral-900"
            >
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
