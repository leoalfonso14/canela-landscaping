import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  id: number;
}

const ServiceCard = ({ service, id }: ServiceCardProps) => {
  // @ts-expect-error - Dynamic icon lookup
  const Icon = LucideIcons[service.icon] || LucideIcons.Leaf;

  return (
    <Link to={`/gallery#${service.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (id % 3) * 0.1 }}
        className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-in-out h-full"
      >
        <div className="flex flex-col h-full">
          <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 ease-in-out">
            <Icon size={32} className="text-emerald-600 group-hover:text-white transition-all duration-500 ease-in-out" />
          </div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 font-inter">
            {service.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-inter">
            {service.description}
          </p>
          <div className="text-emerald-600 font-bold text-sm flex items-center space-x-[7px]">
            <span>View Proof</span>
            <LucideIcons.ArrowRight size={16} className="transition-transform duration-500 ease-in-out group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
