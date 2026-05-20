import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight, BarChart2 } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Analysis',
    category: 'Predictive Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    problem: 'High customer attrition leading to revenue leakage in Q4.',
    insights: 'Identified that customers without 2FA and those on month-to-month plans accounted for 72% of churn. Proposed targeted annual upgrades.',
    impact: 'Actionable recommendations projected to reduce monthly churn by 14%.',
    tools: ['Python', 'SQL', 'Power BI'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Retail Sales Dashboard',
    category: 'Business Intelligence',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    problem: 'Lack of real-time visibility into regional sales performance and inventory.',
    insights: 'Discovered significant seasonal understocking in the Midwest region. Built dynamic KPI models tracking revenue vs target in real-time.',
    impact: 'Reduced reporting time from 2 days to automated daily refreshes, enabling faster pivoting.',
    tools: ['Power BI', 'SQL Server', 'Excel'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Farm Operations Analytics',
    category: 'Operational Analytics',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
    problem: 'Inefficient resource allocation affecting crop yield margins.',
    insights: 'Correlated irrigation schedules with yield data to highlight 20% water waste in specific quadrants without yield benefit.',
    impact: 'Optimized operational schedules leading to a projected 15% reduction in resource overhead.',
    tools: ['Python', 'Pandas', 'Excel'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Financial Portfolio Engagement',
    category: 'Customer Analytics',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    problem: 'Stagnant client engagement with mid-tier investment portfolios.',
    insights: 'Segmented clients based on login frequency and trade volume, revealing a "dormant but high-net-worth" cluster needing automated touchpoints.',
    impact: 'Supported the rollout strategy for a new automated advisory tool targeting the dormant segment.',
    tools: ['SQL', 'Tableau', 'Excel'],
    github: '#',
    live: '#',
    caseStudy: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Selected Projects</h2>
            <p className="text-slate-400">Real-world data applied to concrete business problems. I focus on actionable insights over vanity metrics.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest hover:text-blue-300 transition-colors">
            View full portfolio <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800 shadow-2xl group relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] uppercase font-bold tracking-widest border border-slate-700 rounded-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800/40 p-4 rounded-xl border-l-2 border-red-500/50">
                    <p className="text-xs text-slate-500 font-mono tracking-wide uppercase mb-1">Business Problem</p>
                    <p className="text-slate-300 text-sm">{project.problem}</p>
                  </div>
                  <div className="bg-slate-800/40 p-4 rounded-xl border-l-2 border-blue-500/50">
                    <p className="text-xs text-slate-500 font-mono tracking-wide uppercase mb-1">Key Insights</p>
                    <p className="text-slate-300 text-sm">{project.insights}</p>
                  </div>
                  <div className="bg-slate-800/40 p-4 rounded-xl border-l-2 border-teal-500/50">
                    <p className="text-xs text-slate-500 font-mono tracking-wide uppercase mb-1">Business Impact</p>
                    <p className="text-slate-300 text-sm">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href={project.live} className="flex items-center justify-center gap-2 bg-blue-500 text-slate-900 px-6 py-3 text-[10px] font-bold uppercase tracking-tighter hover:bg-blue-400 transition-colors rounded-sm">
                    <BarChart2 className="w-4 h-4" /> Live Dashboard
                  </a>
                  <a href={project.github} className="flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-tighter transition-colors rounded-sm">
                    <Github className="w-4 h-4" /> Repository
                  </a>
                  <a href={project.caseStudy} className="flex items-center justify-center gap-2 border border-transparent hover:bg-slate-800 text-blue-400 px-6 py-3 text-[10px] font-bold uppercase tracking-tighter transition-colors rounded-sm">
                    Case Study <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
