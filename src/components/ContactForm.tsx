import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, Loader2 } from 'lucide-react';
import { PROPERTIES } from '../constants/constant';

interface ContactFormProps {
  id?: string;
  prefilledPropertyId?: string;
  onSuccessCallback?: () => void;
  title?: string;
}

export default function ContactForm({
  id,
  prefilledPropertyId = "",
  onSuccessCallback,
  title = "Private Inquiry Desk"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyId: prefilledPropertyId,
    interest: prefilledPropertyId ? "Direct Estate Inquiry" : "General Consultation",
    message: ""
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please specify a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Private phone or WhatsApp is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please outline your message or estate requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulate real database dispatch
    setTimeout(() => {
      setStatus('success');
      if (onSuccessCallback) onSuccessCallback();
      // Reset form save for property selections
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyId: prefilledPropertyId,
        interest: prefilledPropertyId ? "Direct Estate Inquiry" : "General Consultation",
        message: ""
      });
    }, 1800);
  };

  return (
    <div id={id} className="glass-panel border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-2xl">
      {/* Decorative top soft gold bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <h3 className="font-serif text-2xl text-white font-light tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-xs font-light tracking-wide mb-8">
        Your information is secured via double-sector protocol layers.
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-gold/10 text-gold border border-gold/30 flex items-center justify-center mb-6"
            >
              <Check size={32} strokeWidth={1.5} />
            </motion.div>
            <h4 className="font-serif text-xl sm:text-2xl text-white font-light mb-3">
              Inquiry Dispatched Successfully
            </h4>
            <p className="text-sm text-gray-400 font-light max-w-sm mb-6 leading-relaxed">
              Our bespoke portfolio associate will contact you dynamically over Phone and Email within the hour.
            </p>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setStatus('idle')}
              className="px-6 py-2 border border-white/10 hover:border-gold/30 rounded-full text-xs uppercase tracking-widest text-gold hover:bg-gold/5 transition-all text-center"
            >
              Send New Message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mb-2.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Lord / Lady / Corporate Entity"
                disabled={status === 'loading'}
                className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600 font-sans"
              />
              {errors.name && (
                <p className="text-[10px] text-red-400 mt-1.5 font-light tracking-wide">{errors.name}</p>
              )}
            </div>

            {/* Email & Phone Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mb-2.5">
                  Private Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contact@entity.com"
                  disabled={status === 'loading'}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600 font-sans"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-400 mt-1.5 font-light tracking-wide">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mb-2.5">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  disabled={status === 'loading'}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600 font-sans"
                />
                {errors.phone && (
                  <p className="text-[10px] text-red-400 mt-1.5 font-light tracking-wide">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Interest & Property Select */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="interest" className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mb-2.5">
                  Inquiry Purpose
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  disabled={status === 'loading'}
                  className="w-full bg-luxury-charcoal border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-all font-sans"
                >
                  <option value="Direct Estate Inquiry">Direct Estate Inquiry</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="List My Luxury Property">List My Luxury Property</option>
                  <option value="Investment Trust Portfolio">Investment Portfolio Trust</option>
                </select>
              </div>

              <div>
                <label htmlFor="propertyId" className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mb-2.5">
                  Associated Estate
                </label>
                <select
                  id="propertyId"
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleInputChange}
                  disabled={status === 'loading'}
                  className="w-full bg-luxury-charcoal border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-all font-sans"
                >
                  <option value="">-- No Direct Estate Select --</option>
                  {PROPERTIES.map((prop) => (
                    <option key={prop.id} value={prop.id}>
                      {prop.title} ({prop.city})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Custom Message input */}
            <div>
              <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mb-2.5">
                Bespoke Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Specify your private timeline, viewing schedule, or architectural specifications..."
                disabled={status === 'loading'}
                className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.04] transition-all placeholder:text-zinc-600 font-sans resize-none"
              />
              {errors.message && (
                <p className="text-[10px] text-red-400 mt-1.5 font-light tracking-wide">{errors.message}</p>
              )}
            </div>

            {/* Interactive Dispatch Trigger */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-gold hover:bg-gold-hover disabled:bg-gold/60 text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Encrypting Dispatch...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Dispatch Inquiry Securely
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
