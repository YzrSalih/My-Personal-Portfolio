import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-white">
      <div className="max-w-3xl w-full bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          CodezyForMe
        </h2>
        <p className="text-white/50 mb-10 text-lg">
          Have a vision for a project? Share the details below, and let's build something exceptional together.
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Full Name</label>
              <input type="text" placeholder="e.g. Salih Yazar" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Email Address</label>
              <input type="email" placeholder="hello@codezy.me" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Project Brief</label>
            <textarea rows="4" placeholder="Tell me about your project goals..." className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white"></textarea>
          </div>
          <button className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/10">
            GET A QUOTE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;