import { motion } from 'motion/react';
import { BarChart2, Briefcase, Code2, Mail, User } from 'lucide-react';

const navItems = [
  { name: 'About', icon: User, href: '#about' },
  { name: 'Skills', icon: Code2, href: '#skills' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center font-bold text-slate-900 text-xs">
              NI
            </div>
            <span className="font-heading font-bold text-lg tracking-tight uppercase">Nnamdi Ibenekwu</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
