import { motion } from "framer-motion";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Lawn Care" | "Maintenance" | "Specialty" | "Seasonal"
  >("All");

  const categories: (
    | "All"
    | "Lawn Care"
    | "Maintenance"
    | "Specialty"
    | "Seasonal"
  )[] = ["All", "Lawn Care", "Maintenance", "Specialty", "Seasonal"];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-32 pb-32 bg-slate-50/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block underline decoration-emerald-200 underline-offset-8">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tight">
            Comprehensive <br />
            Landscape Solutions.
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            From precision lawn maintenance to complex stone repairs and
            seasonal preparation, we cover every aspect of your outdoor
            environment.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-7 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 scale-105"
                  : "bg-white text-slate-500 border border-slate-200 hover:border-emerald-600 hover:text-emerald-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} id={idx} />
          ))}
        </div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] bg-emerald-50 border border-emerald-100 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[100px] -mr-32 -mt-32" />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 relative">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 relative">
            We provide custom landscape and maintenance packages tailored to
            your specific needs. Reach out for a specialized consultation.
          </p>
          <Link to="/contact">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold relative hover:bg-slate-800 transition-all hover:scale-105 shadow-xl">
              Request Custom Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
