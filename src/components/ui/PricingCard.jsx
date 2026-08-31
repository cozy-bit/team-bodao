import Button from './Button';
import { useModal } from '../../context/ModalContext';

export default function PricingCard({
  title,
  frequency = '3 раза в неделю',
  description,
  price,
  oldPrice,
  buttonText = 'ЗАПИСАТЬСЯ',
  onSelect,
}) {
  const { openModal } = useModal();

  const handleSelect = () => {
    if (onSelect) {
      onSelect();
    } else {
      openModal({ plan: title, price });
    }
  };

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
        {/* Prices side-by-side as in mockups */}
        <div className="flex items-baseline gap-3.5 mb-5">
          <span className="text-white text-2xl sm:text-[28px] font-bold tracking-tight">
            {price}
          </span>
          {oldPrice && (
            <span className="text-[#6E6E73] text-sm sm:text-base line-through font-normal">
              {oldPrice}
            </span>
          )}
        </div>

        {/* Action Button using UI Button */}
        <Button
          fullWidth
          onClick={handleSelect}
          className="w-full max-w-full"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
