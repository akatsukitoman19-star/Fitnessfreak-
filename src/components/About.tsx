import { motion } from "motion/react";
import { Heart, Compass, ShieldCheck, Award } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      title: "Holistic Wellness First",
      desc: "Our vision goes beyond physical exercise. We nurture mental clarity, active relaxation, and metabolic wellness for full lifestyle renewal.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
      title: "Safe & Supportive Community",
      desc: "Enjoy an completely private, ladies-only community designed for real support, sharing, and safe personal growth without judgments.",
    },
    {
      icon: <Award className="w-5 h-5 text-pink-400" />,
      title: "Professional Female Coaching",
      desc: "Expert trainers who understand the details of women's physiology, hormones, strength building, and prenatal/postnatal wellness.",
    },
    {
      icon: <Compass className="w-5 h-5 text-pink-400" />,
      title: "Your Empowering Journey",
      desc: "From beginners to seasoned athletes, we construct an individualized pathway to confidence, energy, and radiant fitness.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 left-10 w-96 h-96 rounded-full bg-violet-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Decorative Framed Image Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Elegant double offset border frame */}
            <div className="absolute -inset-4 border border-pink-200/50 rounded-[3rem] transform -rotate-2 pointer-events-none" />
            <div className="absolute -inset-2 border border-[#EEDFD7]/60 rounded-[3rem] transform rotate-1 pointer-events-none" />
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-lg border border-pink-100/35 bg-white p-3 aspect-square max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                alt="Women Wellness and Lifestyle Stretch" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              <div className="absolute bottom-10 right-10 bg-[#FAF7F2]/90 backdrop-blur-md py-3.5 px-6 rounded-2xl shadow-md border border-pink-100/40 text-center">
                <span style={{ fontFamily: "'Playfair Display', serif" }} className="block text-2xl font-light text-slate-800">Est. 2018</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-light">Elegance & Energy</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">OUR ESSENCE</span>
              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide leading-tight"
              >
                A Sanctuary Built Around <br />
                <span className="font-serif italic text-pink-400">Self-Confidence & Grace</span>
              </h2>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                At Fitness Freak Ladies Gym, we believe fitness is not a chore or a punishment for what you ate. It is a celebration of what your body can achieve. We have replaced the noisy clutter of heavy metal and intense competitive gyms with a soothing environment that cultivates strength, flexibility, peace, and long-lasting vitality.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/30">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-800">{pillar.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Aesthetic Quote Block */}
            <div className="border-l-2 border-pink-200 pl-4 py-1.5 italic text-slate-500 text-xs font-serif">
              "We provide a space where you don't just transform your reflection, you transform your lifestyle, finding peace and power in absolute privacy."
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
