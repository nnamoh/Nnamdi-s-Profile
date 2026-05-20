import { motion } from 'motion/react';
import { Target, TrendingUp, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                From Operations <br/> <span className="text-blue-400">To Analytics.</span>
              </h2>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                My journey into Data Analytics wasn't born in a classroom—it was forged in the operational realities of engineering, agriculture, and financial services. 
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-8"
          >
            <div className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/50">
              <p className="text-slate-300 leading-relaxed mb-6">
                For years, I drove operational decision-making across diverse sectors. Whether optimizing farm operations or navigating the complexities of financial services, I consistently found that the most persistent challenges required an analytical mindset. I realized that leadership isn't just about managing people; it's about uncovering the truth hidden in data to guide strategy.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                This realization sparked my deliberate transition into Data Analytics. I combined my domain expertise with hard technical skills in SQL, Python, and Power BI. Today, I don't just build dashboards—I translate complex data into business narratives that drive growth, efficiency, and market performance.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-medium">Business Context</h3>
                  <p className="text-sm text-slate-400">Deep understanding of KPIs that actually move the needle.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-white font-medium">Process Optimization</h3>
                  <p className="text-sm text-slate-400">Applying data to reduce costs and increase operational yield.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-white font-medium">Actionable Insights</h3>
                  <p className="text-sm text-slate-400">Translating raw numbers into strategic recommendations.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
