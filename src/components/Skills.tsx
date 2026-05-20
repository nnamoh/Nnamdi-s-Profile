import { motion } from 'motion/react';
import { Database, FileSpreadsheet, PieChart, Code, BarChart, FileCheck, Layers, LayoutDashboard, Search } from 'lucide-react';

const technicalSkills = [
  { name: 'SQL', icon: Database, level: 90, color: 'bg-blue-500' },
  { name: 'Python (Pandas, NumPy)', icon: Code, level: 85, color: 'bg-yellow-500' },
  { name: 'Power BI', icon: PieChart, level: 95, color: 'bg-yellow-400' },
  { name: 'Excel / Spreadsheets', icon: FileSpreadsheet, level: 90, color: 'bg-green-500' },
  { name: 'Matplotlib / Seaborn', icon: BarChart, level: 80, color: 'bg-orange-500' },
];

const analyticalSkills = [
  { name: 'Data Cleaning', icon: FileCheck },
  { name: 'Data Visualization', icon: LayoutDashboard },
  { name: 'Dashboard Development', icon: Layers },
  { name: 'Exploratory Data Analysis', icon: Search },
  { name: 'Business Analytics', icon: BarChart },
  { name: 'Ad-hoc Reporting', icon: FileSpreadsheet },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Core Competencies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A blend of hard technical skills and business intelligence capabilities, enabling end-to-end data solutions.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50">
            <h3 className="text-xl font-heading font-semibold text-white mb-8 border-b border-slate-700 pb-4">Technical Stack</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 text-slate-200 font-medium">
                      <skill.icon className="w-5 h-5 text-slate-400" />
                      {skill.name}
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Analytical Capabilities */}
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50">
            <h3 className="text-xl font-heading font-semibold text-white mb-8 border-b border-slate-700 pb-4">Analytical Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analyticalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/50 hover:bg-slate-700/50 transition-colors flex items-start gap-3"
                >
                  <div className="mt-1">
                    <skill.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-slate-200 font-medium text-sm leading-tight">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
