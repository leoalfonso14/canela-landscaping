import { Users, ShieldCheck, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="pt-32 pb-32 bg-slate-50/30">
      <div className="container-custom">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466781783364-391eaf53cf39?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Our Passion"
              />
            </div>
            <div className="absolute top-4 left-4 md:top-8 md:left-8 xl:-top-10 xl:-left-10 bg-emerald-600 p-6 lg:p-8 rounded-2xl lg:rounded-[2rem] text-white shadow-xl">
              <Award className="w-8 h-8 lg:w-12 lg:h-12" />
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block underline decoration-emerald-200 underline-offset-8">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tight">
              Rooted in <br />
              Quality.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Founded over 15 years ago, Canela Landscaping began with a simple
              mission: to provide the highest level of craftsmanship and care
              for every outdoor space we touch.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-2">
              "We don't just mow lawns; we cultivate environments where families
              grow and memories are made."
            </p>
          </div>
        </div>

        {/* Mission/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {[
            {
              icon: <Target className="text-emerald-600" />,
              title: "Our Mission",
              desc: "To elevate the standard of residential landscaping through innovation, reliability, and artistic design.",
            },
            {
              icon: <ShieldCheck className="text-emerald-600" />,
              title: "Our Promise",
              desc: "Full insurance, certified technicians, and a satisfaction guarantee on every single project we undertake.",
            },
            {
              icon: <Users className="text-emerald-600" />,
              title: "Our Team",
              desc: "A dedicated group of horticultural experts, designers, and maintenance pros who love what they do.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div id="team" className="scroll-mt-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block underline decoration-emerald-200 underline-offset-8">
              The Experts
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tight">
              Meet Our Team.
            </h2>
            <p className="text-xl text-slate-500">
              The dedicated professionals behind many beautiful landscape in the
              Cleveland area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Domingo Canela",
                role: "Founder & Head Designer",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
              },
              {
                name: "Marcus Chen",
                role: "Lead Horticulturist",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
              },
              {
                name: "Sarah Miller",
                role: "Operations Manager",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
              },
              {
                name: "Kevin O'Brien",
                role: "Master Mason",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
              },
            ].map((member, idx) => (
              <div key={idx} className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover"
                    alt={member.name}
                  />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
