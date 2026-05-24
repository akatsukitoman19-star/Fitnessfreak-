import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export default function Membership() {
  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      description: "Carve out precious ritual minutes for simple, mindful training.",
      price: "₹3,500",
      period: "per month",
      features: [
        "Unrestricted access to Luxury Fitness Center",
        "2 Specialized Group aerobics classes / week",
        "Full access to key stretch & cardio bays",
        "Access to basic changing rooms & lockers",
        "Complimentary detox water on tap",
      ],
      isPremium: false,
      buttonText: "SELECT STARTER",
    },
    {
      id: "premium",
      name: "Premium Wellness",
      description: "The ideal balance of posture, strength, and vibrant movement.",
      price: "₹5,500",
      period: "per month",
      isMostPopular: true,
      features: [
        "Unrestricted Gym, Cardio & Stretch access",
        "Unlimited Aerobics, Dance & Zumba classes",
        "3 Guided Pilates & Posture sessions / month",
        "Monthly bio-impedance & lifestyle audit",
        "Access to premium Steam Room, Spa & Lockers",
        "1 Personal orientation workout with Sofia or Ananya",
      ],
      isPremium: true,
      buttonText: "UNLEASH WELLNESS",
    },
    {
      id: "elite",
      name: "Elite Sanctuary",
      description: "Ultimate personal space, deep bio-hacking & physical elegance.",
      price: "₹8,000",
      period: "per month",
      features: [
        "100% Unlimited Overall access to all suites",
        "Unlimited Pilates, Yoga, Strength & Aerobics",
        "1-on-1 private coach assessment every week",
        "Personalized hormone, sleep & nutritional logs",
        "Access to premium VIP lounge & towel service",
        "Luxury wellness starter kit (organic bottle & mat)",
      ],
      isPremium: false,
      buttonText: "COMMENCE ELITE",
    },
  ];

  return (
    <section id="membership" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">OUR MEMBERSHIPS</span>
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
          >
            Invest In Your <span className="font-serif italic text-pink-400">Vibrant Future</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-200 mx-auto" />
          <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
            Choose a tier that mirrors your unique lifestyle. No hidden pressures, just beautiful pathways to self-care.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-350 ${
                plan.isPremium
                  ? "bg-gradient-to-b from-[#FAF7F2] to-[#FCECEC] border-2 border-[#D49B90] shadow-xl"
                  : "bg-white border border-pink-100/40 shadow-sm"
              }`}
            >
              {/* Premium Top badge */}
              {plan.isMostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D49B90] to-pink-400 text-white text-[10px] uppercase font-light tracking-[0.25em] py-1.5 px-6 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 animate-pulse-soft" />
                  <span>MOST ADORED RITUAL</span>
                </div>
              )}

              {/* Card Header details */}
              <div className="space-y-6">
                <div className="space-y-2 text-left">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl font-light text-slate-800"
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-left border-b border-pink-100/30 pb-6 flex items-baseline gap-2">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl md:text-5xl font-light text-slate-800"
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-light uppercase tracking-wider">
                    / {plan.period}
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3.5 text-left pt-2">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex gap-3 items-start text-xs text-slate-600 font-light leading-relaxed">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPremium ? "bg-pink-100 text-pink-500" : "bg-slate-100 text-slate-500"}`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <a
                  href={`#contact?plan=${plan.id}`}
                  className={`block w-full text-center py-3.5 rounded-full text-xs font-light tracking-widest uppercase transition-all duration-300 ${
                    plan.isPremium
                      ? "bg-gradient-to-r from-[#C47365] to-[#D49B90] text-white hover:opacity-90 hover:shadow-md"
                      : "bg-[#FAF7F2] border border-pink-100/30 text-slate-700 hover:bg-[#F2EAE4]"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment notes */}
        <p className="text-[10px] text-slate-400 font-light uppercase tracking-widest mt-12 text-center">
          * ALL PROGRAMS SUPPORT FREE COUPLING & FLEXIBLE PAUSING. CUSTOM QUOTATIONS AVAILABLE UPON AUDIT.
        </p>

      </div>
    </section>
  );
}
