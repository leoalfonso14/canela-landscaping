import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  LogOut, 
  TrendingUp, 
  Clock, 
  Mail,
  ChevronRight
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();

  const stats = [
    { label: 'Total Leads', value: '0', icon: Mail, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Active Projects', value: '0', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Pending Quotes', value: '0', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Admin Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-600/20">
              C
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 tracking-tight leading-none uppercase">Canela</h1>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Management</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-xs font-black text-slate-900 leading-none">{user?.email}</p>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Master Admin</span>
            </div>
            <button
              onClick={signOut}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-8">
        <div className="max-w-[1600px] mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-emerald-900/20">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Welcome back, Canela Team!</h2>
              <p className="text-emerald-100 text-lg font-medium opacity-80">
                Your landscaping business dashboard is ready. Manage your customer leads and snow plowing requests from here.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800/10 skew-x-[-20deg] translate-x-12"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={stat.label}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <ChevronRight className="text-slate-200" size={20} />
                </div>
                <div className="mt-8">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder for Leads Table */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mb-6">
              <Mail size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 mt-4">No recent leads yet.</h3>
            <p className="text-slate-400 font-medium max-w-sm">
              When customers fill out the contact form, their details will appear here for you to manage.
            </p>
          </div>
        </div>
      </main>

      {/* Admin Footer */}
      <footer className="p-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Canela Landscaping & Snow Plow Portal &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default AdminDashboard;
