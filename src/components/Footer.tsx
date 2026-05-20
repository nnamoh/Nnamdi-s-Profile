import { BarChart2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-slate-500" />
          </div>
          <span className="font-heading font-medium text-slate-400">Nnamdi<span className="text-blue-500/50">.</span></span>
        </div>

        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nnamdi Ibenekwu. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
