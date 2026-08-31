import { useState, useEffect, useRef } from 'react';
import {
  X,
  CheckCircle2,
  User,
  Phone,
  ShieldCheck,
  ChevronDown,
  Check,
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import Button from './Button';

const DIRECTIONS = [
  'Бокс',
  'Кикбоксинг',
  'ММА',
  'Бразильское джиу-джитсу',
  'Индивидуальная тренировка',
];

export default function BookingModal() {
  const { isOpen, modalData, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: 'Бокс',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dropdownRef = useRef(null);

  // Phone input handler - restricts to digits only with auto-formatting +7 (XXX) XXX-XX-XX
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const rawDigits = input.replace(/\D/g, '');

    if (!rawDigits) {
      setFormData((prev) => ({ ...prev, phone: '' }));
      return;
    }

    let digits = rawDigits;
    if (digits[0] === '7' || digits[0] === '8') {
      digits = digits.substring(1);
    }
    digits = digits.substring(0, 10);

    let formatted = '+7';
    if (digits.length > 0) {
      formatted += ' (' + digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formatted += ') ' + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formatted += '-' + digits.substring(6, 8);
    }
    if (digits.length >= 9) {
      formatted += '-' + digits.substring(8, 10);
    }

    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  // Click outside to close custom dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsDropdownOpen(false);
    setFormData({ name: '', phone: '', direction: 'Бокс' });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#141416] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-white animate-scaleUp">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="py-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-extrabold uppercase text-white tracking-wide mb-2">
              Заявка принята!
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              Спасибо за интерес к клубу <strong>Bodao Fight Team</strong>. Наш
              администратор свяжется с вами в течение 10 минут для подтверждения
              записи.
            </p>
            <Button
              onClick={handleResetAndClose}
              fullWidth
              className="max-w-[240px]"
            >
              ОТЛИЧНО
            </Button>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                ЗАПИСЬ НА ТРЕНИРОВКУ
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1.5">
                Оставьте контактные данные для обратной связи
              </p>
            </div>

            {/* If opened from a specific tariff plan */}
            {modalData?.plan && (
              <div className="mb-5 p-3 rounded-xl bg-[#1C1C20] border border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Выбранный тариф:</span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {modalData.plan} — {modalData.price}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Ваше имя
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Иван Иванов"
                    className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              {/* Phone input - Numbers only with automatic mask */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Номер телефона
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              {/* Custom Rounded Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Направление тренировок
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-[#1A1A1E] border rounded-xl px-4 py-3 text-sm text-white flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    isDropdownOpen
                      ? 'border-white/40 ring-1 ring-white/20'
                      : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  <span>{formData.direction}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Options Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-[#1C1C20] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-30 p-1.5 animate-scaleUp">
                    {DIRECTIONS.map((dir) => {
                      const isSelected = formData.direction === dir;
                      return (
                        <button
                          key={dir}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, direction: dir });
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-lg text-sm text-left flex items-center justify-between cursor-pointer transition-colors duration-150 ${
                            isSelected
                              ? 'bg-white/10 text-white font-medium'
                              : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{dir}</span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <Button type="submit" fullWidth className="w-full max-w-full">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </div>

              {/* Privacy consent note */}
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Ваши персональные данные надежно защищены</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
