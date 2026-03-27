import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Home = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592591544551-4903513f2f1b?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6"
          >
            Premium Landscaping
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight"
          >
            Expert Care for <br />
            <span className="text-brand-secondary italic">
              Your Outdoor Home.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Transforming your outdoor spaces into living masterpieces with
            precision, passion, and unparalleled expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all hover:scale-105"
            >
              Get a Free Estimate
            </Link>
            <Link
              to="/services"
              className="px-10 py-5 rounded-full font-bold text-lg border border-white/30 hover:bg-white/10 backdrop-blur-md transition-all flex items-center gap-2"
            >
              Our Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-emerald-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Star size={24} className="text-emerald-500 fill-emerald-500" /> Rated 5 Stars
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <CheckCircle2 size={24} className="text-emerald-500" /> Fully
            Insured
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <CheckCircle2 size={24} className="text-emerald-500" /> 15+ Years
            Experience
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Star size={24} className="text-emerald-500 fill-emerald-500" /> Certified Arborists
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-slate-100/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">
                What we do
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
                Crafting Exceptional <br />
                Outdoor Experiences.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-emerald-600 font-bold flex items-center gap-2 mt-8 md:mt-0 hover:gap-4 transition-all"
            >
              View All 15+ Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} id={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50/50">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558905617-1545cf21a97c?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Our Work"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-600 text-white p-12 rounded-[2rem] hidden md:block shadow-2xl">
              <span className="text-5xl font-black block mb-2">1k+</span>
              <span className="text-sm font-bold opacity-80 uppercase tracking-widest">
                Properties Restored
              </span>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">
                The Canela Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 leading-tight">
                Why homeowners trust us with their vision.
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Quality Guaranteed",
                  desc: "We never cut corners. Our team uses the highest-grade materials and equipment.",
                },
                {
                  title: "Reliable Schedules",
                  desc: "We show up when we say we will. Your time is valuable, and we respect it.",
                },
                {
                  title: "Passionate Care",
                  desc: "We treat every garden as if it were our own, with attention to every detail.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl h-fit">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Quote size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <Quote className="text-emerald-500 mb-8 mx-auto" size={48} />
          <p className="text-3xl md:text-4xl font-black italic leading-snug mb-12">
            "Canela Landscaping completely transformed our backyard. Their
            attention to detail during the spring cleanup was unlike anything
            we've seen before. Our lawn has never looked better!"
          </p>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-emerald-400">
              Sarah & Michael J.
            </span>
            <span className="text-sm text-white/50 uppercase tracking-widest mt-2">
              Homeowners, Cleveland, Ohio
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tight">
            Ready to start your <br />
            <span className="text-emerald-600 italic">
              next outdoor project?
            </span>
          </h2>
          <p className="text-xl text-slate-500 mb-12">
            Join hundreds of happy homeowners today. Get a free, no-obligation
            quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all hover:scale-105"
          >
            Start My Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
