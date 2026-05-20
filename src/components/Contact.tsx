import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Download, Send, MessageCircle, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // NOTE: Replace 'YOUR_FORM_ID_HERE' with your actual formspree ID (e.g., 'mvoeqbpl')
      const response = await fetch('https://formspree.io/f/mykveped', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-t-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-800/40 rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5 h-full">
            
            {/* Contact Info */}
            <div className="md:col-span-2 bg-slate-800 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">Let's Connect</h2>
                <p className="text-slate-400 mb-8">
                  Open to full-time opportunities or exciting data projects. Don't hesitate to reach out.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:ibenekwu@yahoo.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-5 h-5 group-hover:text-blue-400" />
                    </div>
                    <span className="break-all">ibenekwu@yahoo.com</span>
                  </a>
                  <a href="https://wa.me/2348034495758" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5 group-hover:text-green-400" />
                    </div>
                    <span>+234 803 449 5758</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-slate-500/50 transition-colors">
                      <Github className="w-5 h-5 group-hover:text-white" />
                    </div>
                    <span>GitHub Activity</span>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <a href="/resume.pdf" download="Nnamdi_Ibenekwu_Resume.pdf" className="flex items-center justify-center gap-2 w-full py-4 border border-slate-700 hover:bg-slate-700 text-white font-bold uppercase tracking-widest text-xs transition-colors rounded-sm">
                  <Download className="w-4 h-4 shrink-0" /> Download Resume
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-6 md:p-10">
              <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">First Name</label>
                    <input name="firstName" required type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                    <input name="lastName" required type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="How can we work together?"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-blue-500 hover:bg-blue-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-900 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 group"
                >
                  {status === 'idle' && <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                  {status === 'submitting' && 'Sending...'}
                  {status === 'success' && <>Message Sent! <CheckCircle className="w-4 h-4" /></>}
                  {status === 'error' && <>Error - Try Again <XCircle className="w-4 h-4" /></>}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
