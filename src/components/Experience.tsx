import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Farm Owner / Manager",
    company: "Dew Point Farms, Enugu, Nigeria",
    period: "2017 – Present",
    focus: "Farm Strategy & Operational Analytics",
    achievements: [
      "Developed farm strategies that increased crop yield by approximately 25% within two planting seasons.",
      "Analyzed operational costs and resource allocation to reduce farm expenses by 15%.",
      "Supervised and trained farm workers, improving productivity and task completion rates.",
      "Maintained production, inventory, and sales records to support planning and profitability tracking.",
      "Improved farm output and sales volume through better crop planning and operational management.",
      "Used data tracking and reporting to support decision-making on planting cycles, expenses, and sales performance."
    ]
  },
  {
    role: "Site Engineer",
    company: "Rockland Development Limited, Awka, Nigeria",
    period: "2011 – 2017",
    focus: "Project Coordination & Inventory Management",
    achievements: [
      "Supervised construction projects to ensure compliance with engineering specifications and safety standards.",
      "Reduced material waste through effective inventory planning and site coordination.",
      "Improved project delivery timelines by coordinating labor, materials, and equipment efficiently.",
      "Conducted inspections and maintained project reports to monitor progress and reduce rework.",
      "Prepared site documentation, operational reports, and project performance records.",
      "Collaborated with project stakeholders to improve accountability and workflow efficiency."
    ]
  },
  {
    role: "Marketer",
    company: "AIMS Asset Management Limited, Enugu, Nigeria",
    period: "2007 – 2011",
    focus: "Market Research & Client Relations",
    achievements: [
      "Promoted stock investment and portfolio management services to prospective clients.",
      "Acquired and onboarded new clients, contributing to growth in managed investment accounts.",
      "Built and maintained strong relationships with clients through regular engagement and follow-up.",
      "Conducted market research and identified potential investors to support customer acquisition efforts.",
      "Maintained client records and prepared reports to support relationship management and service delivery.",
      "Worked with clients to explain investment products and portfolio opportunities based on their financial goals."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Professional Trajectory</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A foundation built on operational rigour, solving complex problems before exclusively specializing in data.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-slate-700 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-slate-900 border-2 border-blue-500 rounded-full" />
                
                <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full border border-slate-700">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-medium rounded text-left">
                    <Briefcase className="w-3 h-3" />
                    Analytical Focus: {exp.focus}
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
