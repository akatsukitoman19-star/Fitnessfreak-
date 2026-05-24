import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Clock, Mail, CheckCircle, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "premium",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium server submission timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", program: "premium", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative floral/curved glow overlays */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/12 w-80 h-80 rounded-full bg-violet-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C47365] font-light">BEGIN YOUR CHRONICLE</span>
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide"
          >
            Connect With Our <span className="font-serif italic text-pink-400">Sanctuary Coordinators</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-200 mx-auto" />
          <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
            Ready to take a step towards vibrant wellness? Reach out for queries, tour bookings, or registration slots.
          </p>
        </div>

        {/* Form & Info Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto text-left">
          
          {/* Left Column: Coordinates & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white border border-pink-100/30 p-8 md:p-10 rounded-[2.5rem] shadow-xs"
          >
            <div className="space-y-6">
              {/* Address detail card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/30">
                  <MapPin className="w-4 h-4 text-[#C47365]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-800">Visit Our Sanctuary</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Road No 4, Green Valley, Banjara Hills,<br />
                    Hyderabad, Telangana 500034
                  </p>
                </div>
              </div>

              {/* Telephone detail card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/30">
                  <Phone className="w-4 h-4 text-[#C47365]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-800">Call/WhatsApp Us</h4>
                  <a href="tel:08341725523" className="text-xs text-[#C47365] hover:underline font-light block">
                    08341725523
                  </a>
                </div>
              </div>

              {/* Working Hours detail card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100/30">
                  <Clock className="w-4 h-4 text-[#C47365]" />
                </div>
                <div className="space-y-1">
                  <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-medium text-slate-800">Working Hours</h4>
                  <div className="text-xs text-slate-600 font-light space-y-1">
                    <p className="flex justify-between gap-6"><span>Monday — Friday:</span> <span className="font-medium text-slate-700">6:00 AM - 9:00 PM</span></p>
                    <p className="flex justify-between gap-6"><span>Saturday:</span> <span className="font-medium text-slate-700">7:00 AM - 7:00 PM</span></p>
                    <p className="flex justify-between gap-6"><span>Sunday:</span> <span className="font-serif italic text-pink-400">Rest & Rejuvenation</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xs border border-pink-100/40 relative aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.123512229562!2d78.43265147453443!3d17.422312648712314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973aed9b4c09%3A0x6b6fca2d3d0f04df!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1716301123456!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Banjara Hills Hyderabad Fitness Freak Ladies Gym Map Location"
              />
            </div>
          </motion.div>

          {/* Right Column: Interaction Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 bg-white border border-pink-100/30 p-8 md:p-12 rounded-[2.5rem] shadow-sm flex flex-col justify-center min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-light text-slate-800">Write To Us</h3>
                    <p className="text-xs text-slate-400 font-light">Tell us about your fitness targets, and we'll reply shortly.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="name-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-light">Full Name</label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="e.g. Maya Iyer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-pink-100/40 focus:outline-none focus:border-pink-300 text-xs text-slate-700 font-light transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="email-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-light">Email Address</label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="e.g. maya@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-pink-100/30 focus:outline-none focus:border-pink-300 text-xs text-slate-700 font-light transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone input */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="phone-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-light">Phone Number</label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="e.g. 9848012345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-pink-100/30 focus:outline-none focus:border-pink-300 text-xs text-slate-700 font-light transition-all"
                      />
                    </div>

                    {/* Select Program */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="program-select" className="text-[10px] uppercase tracking-widest text-slate-500 font-light">Desired Suite Tier</label>
                      <select
                        id="program-select"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-pink-100/30 focus:outline-none focus:border-pink-300 text-xs text-slate-500 font-light transition-all appearance-none cursor-pointer"
                      >
                        <option value="starter">Starter Plan — ₹3,500/mo</option>
                        <option value="premium">Premium Wellness — ₹5,500/mo</option>
                        <option value="elite">Elite Sanctuary — ₹8,000/mo</option>
                      </select>
                    </div>
                  </div>

                  {/* Message textbox */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="message-textarea" className="text-[10px] uppercase tracking-widest text-slate-500 font-light">Your Notes / Requests</label>
                    <textarea
                      id="message-textarea"
                      rows={4}
                      placeholder="Share elements of your fitness targets, physical challenges, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-pink-100/30 focus:outline-none focus:border-pink-300 text-xs text-slate-700 font-light transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#C47365] to-[#D49B90] text-white font-light tracking-[0.2em] text-xs transition-all duration-300 cursor-pointer disabled:opacity-50 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>REGISTERING...</span>
                      </>
                    ) : (
                      "SUBMIT QUOTE ENTRY"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 flex flex-col items-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-light text-slate-800">Entry Recorded Successfully</h3>
                  <p className="text-xs text-slate-500 font-light max-w-sm leading-relaxed mx-auto">
                    Thank you! Our private hospitality coordinator will review your application and dial back on phone to confirm your exclusive complimentary visit.
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 text-[10px] text-pink-400 font-light tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse-soft" />
                    <span>Aesthetic Reconnection</span>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 border border-pink-200 rounded-full text-[10px] tracking-widest font-light text-slate-600 hover:bg-[#FAF7F2] transition-colors"
                  >
                    SEND ANOTHER SIGNAL
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
