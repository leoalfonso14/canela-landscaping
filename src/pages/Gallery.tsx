import { motion } from "framer-motion";
import { services } from "../data/services";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Service-specific image portfolios (using placeholders as requested)
  // These are indexed by service.id
  const serviceImages: Record<string, string[]> = {
    "lawn-mowing": [
      "photo-1558905617-1545cf21a97c",
      "photo-1592419044706-39796d40f98c",
      "photo-1600607687920-4e2a09cf159d",
    ],
    "edges": [
      "photo-1598901861713-54ad16a7e70e",
      "photo-1584473457406-623048fc437e",
      "photo-1558905617-1545cf21a97c",
    ],
    "lawn-maintenance": [
      "photo-1466781783364-391eaf53cf39",
      "photo-1557428807-6ba07633276b",
      "photo-1590682847059-69d74259727a",
    ],
    "bush-trimming": [
      "photo-1621932953986-15fcf084da0f",
      "photo-1585320806297-9794b3e4eeae",
      "photo-1466781783364-391eaf53cf39",
    ],
    "weeds": [
      "photo-1590682847059-69d74259727a",
      "photo-1600607687920-4e2a09cf159d",
      "photo-1600585154340-be6161a56a0c",
    ],
    "mulch": [
      "photo-1541888941295-65c82860a480",
      "photo-1584473457406-623048fc437e",
      "photo-1558905617-1545cf21a97c",
    ],
    "top-soil": [
      "photo-1592419044706-39796d40f98c",
      "photo-1598901861713-54ad16a7e70e",
      "photo-1600607687920-4e2a09cf159d",
    ],
    "reseeding": [
      "photo-1466781783364-391eaf53cf39",
      "photo-1557428807-6ba07633276b",
      "photo-1585320806297-9794b3e4eeae",
    ],
    "storm-cleanup": [
      "photo-1418985991508-e47386d96a71",
      "photo-1478131143081-80f7f84ca84c",
      "photo-1517299321609-52687d1bc55c",
    ],
    "yard-cleanup": [
      "photo-1466781783364-391eaf53cf39",
      "photo-1590682847059-69d74259727a",
      "photo-1621932953986-15fcf084da0f",
    ],
    "leaf-cleanup": [
      "photo-1517299321609-52687d1bc55c",
      "photo-1418985991508-e47386d96a71",
      "photo-1478131143081-80f7f84ca84c",
    ],
    "patios": [
      "photo-1584473457406-623048fc437e",
      "photo-1558905617-1545cf21a97c",
      "photo-1592419044706-39796d40f98c",
    ],
    "seasonal-cleanup": [
      "photo-1483921020237-2ff51e8e4b22",
      "photo-1521401830884-6c03c1c87ebb",
      "photo-1418985991508-e47386d96a71",
    ],
    "gravel": [
      "photo-1600585154340-be6161a56a0c",
      "photo-1541888941295-65c82860a480",
      "photo-1584473457406-623048fc437e",
    ],
    "snow-plow": [
      "https://i5.walmartimages.com/seo/Ktaxon-29x18in-Adjustable-T-Handle-Snow-Plow-with-Wheels-Heavy-Duty-Manual-Snow-Shovel-for-Driveway-Sidewalk-Blue-Black_6685080c-88bb-461d-a68f-3a14f63c5255.9959cd2f209a96c13c87eca8ad640a76.jpeg",
      "https://i.ytimg.com/vi/YOLNNAxvqy0/maxresdefault.jpg",
      "https://i.ytimg.com/vi/jjcx70og7to/maxresdefault.jpg",
    ],
  };

  const getImageUrl = (serviceId: string, imgIdx: number) => {
    const ids = serviceImages[serviceId] || serviceImages["lawn-mowing"];
    const id = ids[imgIdx % ids.length];
    
    if (id.startsWith("http")) return id;
    return `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=800`;
  };

  const categories = ["Lawn Care", "Maintenance", "Specialty", "Seasonal"];

  return (
    <div className="pt-32 pb-32 bg-slate-50/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-32">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block underline decoration-emerald-200 underline-offset-8">
            The Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tight">
            Our Extensive Work
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Explore our comprehensive gallery of transformations across
            Cleveland, organized by service types and project category.
          </p>
        </div>

        <div className="space-y-40">
          {categories.map((category) => {
            const categoryServices = services.filter(
              (s) => s.category === category,
            );
            return (
              <div key={category}>
                {/* Category Heading */}
                <div className="flex items-center gap-6 mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-950 whitespace-nowrap uppercase tracking-tighter">
                    {category}
                  </h2>
                  <div className="h-px bg-slate-200 w-full"></div>
                </div>

                {/* Subsections per Service */}
                <div className="space-y-24">
                  {categoryServices.map((service) => (
                    <div
                      key={service.id}
                      id={service.id}
                      className="scroll-mt-32"
                    >
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                        <div className="max-w-xl">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                            <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                            {service.title}
                          </h3>
                          <p className="text-slate-500 text-sm italic">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[0, 1, 2].map((imgIdx) => (
                          <motion.div
                            key={`${service.id}-${imgIdx}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: imgIdx * 0.1 }}
                            className="aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                          >
                            <img
                              src={getImageUrl(service.id, imgIdx)}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              alt={`${service.title} View ${imgIdx + 1}`}
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Contact Section */}
        <div className="mt-40 text-center bg-slate-950 py-32 rounded-[4rem] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="BG"
              loading="lazy"
            />
          </div>
          <div className="relative">
            <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
              Ready for your <br />
              <span className="text-emerald-500 italic">
                next transformation?
              </span>
            </h3>
            <p className="text-xl text-white/50 mb-12 max-w-lg mx-auto">
              Bring Domingo Canela's expertise to your property today.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-12 py-6 rounded-full font-bold text-lg shadow-2xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all font-inter"
              >
                Contact Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
