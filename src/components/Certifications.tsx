import { motion } from 'motion/react';
import { Award, Cloud, Brain, CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: "Google Cloud Data Analytics",
    issuer: "Google Cloud",
    icon: Cloud,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    link: "#"
  },
  {
    name: "Data Science Certificate",
    issuer: "Professional Institution",
    icon: Brain,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    link: "#"
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    icon: Award,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    link: "#"
  }
];

export function Certifications() {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Certifications</h2>
            <p className="text-slate-400">Continuous learning validated by industry-recognized credentials.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all hover:shadow-lg hover:shadow-blue-900/10"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl ${cert.bg} flex items-center justify-center`}>
                  <cert.icon className={`w-6 h-6 ${cert.color}`} />
                </div>
                <div className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs text-slate-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" /> Verified
                </div>
              </div>
              
              <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
              <p className="text-sm text-slate-400 mb-6">{cert.issuer}</p>
              
              <a href={cert.link} className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                View Credential &rarr;
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
