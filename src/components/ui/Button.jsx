import { MoveRight } from 'lucide-react';

export default function Button({
  children = 'ЗАПИСАТЬСЯ',
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
  icon: Icon = MoveRight,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        h-[48px] w-full max-w-[300px] px-8
        bg-[#F4B24B] hover:bg-[#e2a23e]
        text-white font-medium text-[14px] uppercase tracking-wider
        rounded-r-full rounded-l-md
        transition-all duration-200 cursor-pointer
        active:scale-[0.98]
        ${fullWidth ? 'max-w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {Icon && (
        <span className="absolute left-6 flex items-center">
          <Icon className="w-6 h-6 stroke-[1.75]" />
        </span>
      )}
      <span className="leading-none">{children}</span>
    </button>
  );
}