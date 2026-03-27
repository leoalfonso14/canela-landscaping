import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_TEXT } from "../config/constants";

const Contact = () => {
  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block italic">
              Let's Talk
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tight">
              Start Your <br />
              Transformation.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              Ready to elevate your outdoor space? Fill out the form, we will
              provide a customized estimate for your vision in the Cleveland
              area.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-slate-500 font-medium">{PHONE_NUMBER}</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">
                    Mon - Fri, 8am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-slate-500 font-medium">
                    {EMAIL_ADDRESS}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">
                    We reply within 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Service Area
                  </h4>
                  <p className="text-slate-500 font-medium">
                    {LOCATION_TEXT}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-900/5 border border-slate-100"
          >
            <div className="flex items-center space-x-3 mb-10">
              <MessageSquare className="text-emerald-600" size={24} />
              <h3 className="text-2xl font-bold text-slate-900">
                Project Inquiry
              </h3>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
