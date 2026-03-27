import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate a delay
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-50 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
      >
        <CheckCircle size={64} className="text-emerald-600 mb-6" />
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h3>
        <p className="text-slate-600 max-w-sm">
          Thank you for reaching out to Canela Landscaping. Our team will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
          <option>Lawn Maintenance</option>
          <option>Garden Cleanup</option>
          <option>Patio Repair</option>
          <option>Snow Removal</option>
          <option>Other / Multiple</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about your project</label>
        <textarea 
          rows={6}
          placeholder="I need help with my backyard..."
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-emerald-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-emerald-700 flex items-center justify-center space-x-3 transition-colors"
      >
        <span>Submit Inquiry</span>
        <Send size={18} />
      </motion.button>
    </form>
  );
};

export default ContactForm;
