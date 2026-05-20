import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Database, LineChart } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const mockChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 550 },
  { name: 'Apr', value: 450 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 650 },
  { name: 'Jul', value: 900 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse" />
        <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center lg:items-start pt-12">
          
          {/* Left Column: Image and Role */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start gap-6 relative lg:ml-8"
          >
            {/* Profile Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800 shadow-blue-900/20 relative z-20">
              <img 
                src="https://i.imgur.com/8zEWZsl.jpg" 
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop'; }}
                alt="Nnamdi Ibenekwu" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-bold w-fit backdrop-blur-sm z-20">
              Data Analyst | Business Intelligence
            </div>

            {/* Floating KPI Cards positioned next to the image */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 md:-right-12 z-30 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">SQL Queries</p>
                  <p className="text-lg font-semibold text-white">Advanced</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-32 -right-8 z-30 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/20 text-teal-400 rounded-lg">
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Visualization</p>
                  <p className="text-lg font-semibold text-white">Power BI</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Title, Text, Buttons and Chart */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7 flex flex-col gap-6 relative"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-tight mt-6 lg:mt-0">
              Bridging Operations <br /> & Analytics.
            </h1>
            
            <p className="text-slate-400 leading-relaxed max-w-xl text-sm md:text-base">
              Business and operations professional with deep experience in engineering and finance, now transforming complex data into actionable insights. I specialize in SQL, Python, Power BI, and Excel to solve real-world operational challenges.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#projects" className="inline-flex items-center justify-center bg-blue-500 text-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-tighter hover:bg-blue-400 transition-colors rounded-sm">
                View Projects
              </a>
              <a href="/resume.pdf" download="Nnamdi_Ibenekwu_Resume.pdf" className="inline-flex items-center justify-center border border-slate-700 hover:bg-slate-800 text-white px-6 py-3 text-xs font-bold uppercase tracking-tighter transition-colors rounded-sm">
                Download CV
              </a>
            </div>

            {/* Visual Dashboard Elements (Chart & SQL) */}
            <div className="relative mt-12 h-[220px] w-full hidden md:block">
              {/* Floating Chart */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 left-0 z-30 w-72 h-36 bg-slate-800/95 backdrop-blur-xl p-3 rounded-xl border border-slate-700 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-400 font-medium tracking-wide">Revenue Growth (Q3)</span>
                  <span className="text-xs text-teal-400 font-mono">+24.5%</span>
                </div>
                <div className="w-full h-[70px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockChartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', fontSize: '12px' }}
                        itemStyle={{ color: '#f8fafc' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#14b8a6" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* SQL Snippet Widget */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-8 right-4 lg:right-16 z-10 bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center gap-1.5 mb-3 border-b border-slate-800 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-[10px] text-slate-500 font-mono">query.sql</span>
                </div>
                <pre className="text-[11px] leading-tight font-mono text-slate-300">
                  <span className="text-pink-400">SELECT</span> DATE_TRUNC('month', date) <span className="text-pink-400">AS</span> month,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">SUM</span>(revenue) <span className="text-pink-400">AS</span> total_revenue<br/>
                  <span className="text-pink-400">FROM</span> sales_data<br/>
                  <span className="text-pink-400">GROUP BY</span> 1<br/>
                  <span className="text-pink-400">ORDER BY</span> 1 <span className="text-pink-400">DESC</span>;
                </pre>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
