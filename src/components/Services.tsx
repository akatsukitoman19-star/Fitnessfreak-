import { motion } from "motion/react";
import { Dumbbell, Activity, Heart, Award, Sparkles, Flame } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "fitness-center",
      title: "Fitness Center",
      description: "Step into our premium open gymnasium space with high-end cardio units, custom weights, and dedicated stretching bays designed for quiet, mindful focus.",
      icon: <Award className="w-5 h-5 text-indigo-400" />,
      bgGradient: "from-indigo-50/50 to-pink-50/20",
      accent: "indigo",
    },
    {
      id: "aerobics",
      title: "Aerobics",
      description: "Boost your cardiorespiratory endurance with rhythmic high-low impact classes designed to stimulate dopamine, energy flow, and absolute joy in coordination.",
      icon: <Activity className="w-5 h-5 text-pink-400" />,
      bgGradient: "from-pink-50/50 to-violet-50/20",
      accent: "pink",
    },
    {
      id: "dance-fitness",
      title: "Dance Fitness Classes",
      description: "Lose yourself in music with our curated dance classes, blending Latin salsa, contemporary zumba, and hip-hop to sweat and laugh out loud with our community.",
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      bgGradient: "from-amber-50/40 to-pink-50/20",
      accent: "amber",
    },
    {
      id: "adult-sports",
      title: "Adult Sports",
      description: "Join energetic mini-leagues, elegant court drills, and agile skill-building workshops designed for healthy reflexes and playful peer bonding.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      bgGradient: "from-purple-50/50 to-indigo-50/20",
      accent: "purple",
    },
    {
      id: "pilates",
      title: "Pilates",
      description: "Focus on deep anatomical alignment, control, and core breathing. Sculpt elongated, resilient muscle fibers that improve carriage and posture.",
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      bgGradient: "from-rose-50/50 to-pink-50/20",
      accent: "rose",
    },
    {
      id: "strength-workouts",
      title: "Strength Workouts",
      description: "Master foundational weight lifts under safe female athletic guidance. Improve your bone density, metabolism, and confidence with resistance.",
      icon: <Dumbbell className="w-5 h-5 text-slate-500" />,
      bgGradient: "from-slate-100/50 to-pink-50/20",
      accent: "slate",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#EEDFD7_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">OUR SANCTUARY RITUALS</span>
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
          >
            Luxury Curated <span className="font-serif italic text-pink-400">Wellness Services</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-200 mx-auto" />
          <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
            Each experience is thoughtfully tailored, keeping in mind the rhythm of women's physical and mindful wellness.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-white border border-pink-100/40 rounded-3xl p-8 hover:shadow-xl transition-all duration-350 flex flex-col justify-between overflow-hidden"
            >
              {/* Soft Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                {/* Icon wrapper with glow effect */}
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-pink-100/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <div className="space-y-2">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-light text-slate-800 group-hover:text-slate-900 transition-colors"
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Minimalist interactive link arrow */}
              <div className="relative z-10 pt-6 flex items-center gap-1.5 text-xs tracking-wider text-[#C47365] font-light uppercase opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <span>Explore Details</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Booking CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center bg-pink-50/30 border border-pink-100/30 rounded-[2rem] p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left space-y-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-lg font-light text-slate-800">Unsure which suite matches your energy?</h4>
            <p className="text-xs text-slate-500 font-light">Schedule a 1-on-1 discovery consultation with our program planners.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-white border border-pink-200 text-xs tracking-wider text-slate-700 font-light hover:bg-[#FAF7F2] rounded-full shrink-0 transition-colors duration-300"
          >
            REQUEST FREE CONSULTATION
          </a>
        </motion.div>

      </div>
    </section>
  );
}
