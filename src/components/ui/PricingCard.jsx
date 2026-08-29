import { MoveRight } from 'lucide-react';

export default function PricingCard({
  title,
  frequency = '3 раза в неделю',
  description,
  price,
  oldPrice,
  buttonText = 'ЗАПИСАТЬСЯ',
  onSelect,
}) {
  return (
    <div className="bg-[#18181A] rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <h3 className="text-white text-2xl sm:text-[26px] font-bold tracking-tight">
            {title}
          </h3>
          {frequency && (
            <span className="text-[#9E9EA4] text-xs sm:text-sm font-normal">
              {frequency}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[#A0A0A5] text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8">
          {description}
        </p>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Prices */}
        <div className="flex items-baseline justify-between mb-5">
          <span className="text-white text-2xl sm:text-[28px] font-bold tracking-tight">
            {price}
          </span>
          {oldPrice && (
            <span className="text-[#6E6E73] text-sm sm:text-base line-through font-normal">
              {oldPrice}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onSelect}
          className="w-full bg-[#F4B24B] hover:bg-[#e2a23e] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer uppercase tracking-wider shadow-lg shadow-[#F4B24B]/10"
        >
          <MoveRight className="w-5 h-5 stroke-[2.2]" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}
