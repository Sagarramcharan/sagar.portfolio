
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Using FormSubmit.co AJAX endpoint for direct email delivery
      const response = await fetch("https://formsubmit.co/ajax/Sagarsatapathy24@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        })
      });

      if (response.ok) {
        alert('Communication received. The digital twin has notified Sagar.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error("Form error:", error);
      alert('The matrix encountered an error. Please try again or email directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">LETS <span className="gradient-text">SYNC</span></h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have a visionary project in mind? Or just want to discuss the future of AI and tech? Drop a message and let's create something extraordinary.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                  <Mail className="text-[#FF3D00]" size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:Sagarsatapathy24@gmail.com" className="text-lg font-bold hover:text-orange-500 transition-colors">Sagarsatapathy24@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                  <MapPin className="text-[#FF3D00]" size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-lg font-bold">HYDERABAD, INDIA</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                  <Phone className="text-[#FF3D00]" size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Signal</div>
                  <a href="tel:+918688887665" className="text-lg font-bold hover:text-orange-500 transition-colors">8688887665</a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Full Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition-all placeholder:text-gray-700"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Email Address</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition-all placeholder:text-gray-700"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Message</label>
                <textarea
                  rows={4}
                  required
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition-all placeholder:text-gray-700 resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>
              <motion.button
                disabled={isSending}
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                type="submit"
                className={`w-full orange-gradient py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:shadow-orange-500/20 transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSending ? (
                  <>
                    Synchronizing...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Launch Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
