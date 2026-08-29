import { pricing } from '../../data/pricing';
import PricingCard from '../ui/PricingCard';

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wider mb-8 sm:mb-10 lg:mb-12">
        РАСПИСАНИЕ ЗАНЯТИЙ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {pricing.map((item) => (
          <PricingCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
