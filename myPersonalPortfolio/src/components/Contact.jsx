import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // --- CONFIGURATION START ---
    // 1. Get your keys from https://dashboard.emailjs.com/
    // 2. Create a service and a template (Standard template works fine)
    // 3. Update the values below:
    const SERVICE_ID = 'service_kwx1ndb';
    const TEMPLATE_ID = 'template_666mvv5';
    const PUBLIC_KEY = 'WkVPUklaACjjxnPIv';

    // 4. Update this with your actual Google Calendar / Calendly appointment link
    const MEETING_LINK = 'https://calendar.app.google/NtEnpeBRpaAFc5dUA';
    // --- CONFIGURATION END ---

    // Form data extraction
    const formData = new FormData(form.current);
    const data = {
      fullName: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('project_type'), // NEW: Selected Service
      message: formData.get('message'),
      timestamp: serverTimestamp(),
    };

    try {
      console.log("Starting form submission...");

      // 1. Save to Firestore with a timeout
      console.log("Saving to Firestore...");
      try {
        const firestorePromise = addDoc(collection(db, "contact_requests"), data);
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("timeout")), 5000)
        );
        await Promise.race([firestorePromise, timeoutPromise]);
        console.log("Document saved to Firestore Successfully");
      } catch (fsError) {
        console.warn("Firestore timed out or failed, proceeding to email...", fsError);
      }

      // 2. Send Email
      console.log("Sending email via EmailJS...");
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      console.log("Email sent successfully:", result.text);

      setLoading(false);
      setStatus('success');

      // 3. Redirect
      console.log("Preparing redirect to calendar...");
      setTimeout(() => {
        window.location.href = MEETING_LINK;
      }, 1500);

    } catch (error) {
      console.error("Form Submission Error:", error);
      setLoading(false);
      setStatus('error');
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-white">
      <div className="max-w-6xl w-full bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side: Information */}
          <div className="relative flex flex-col justify-center space-y-8">
            {/* Abstract Background Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-medium">Get in touch</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-white via-white to-purple-400 bg-clip-text text-transparent tracking-tight">
                Codezy<span className="text-white/20">For</span>Me
              </h2>
              <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-md">
                Have a vision for a project? Share the details below, and let's build something exceptional together.
              </p>
            </div>

            <div className="space-y-4 text-white/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span>hello@codezy.me</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Salih Yazar"
                    className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hello@codezy.me"
                    className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Project Type</label>
                <select
                  name="project_type"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white appearance-none cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="bg-neutral-900 text-gray-500">Select a service</option>
                  <option value="Web Development" className="bg-neutral-900">Web Development</option>
                  <option value="UI/UX Design" className="bg-neutral-900">UI/UX Design</option>
                  <option value="Thesis Project" className="bg-neutral-900">Thesis Project</option>
                  <option value="Performance Optimization" className="bg-neutral-900">Performance Optimization</option>
                  <option value="Other" className="bg-neutral-900">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Project Brief</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project goals..."
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 outline-none transition text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-4 rounded-2xl transition-all transform shadow-lg 
                  ${loading || status === 'success'
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-white text-black hover:bg-purple-600 hover:text-white hover:scale-[1.02] shadow-purple-500/10'
                  }`}
              >
                {loading ? 'SENDING...' : status === 'success' ? 'REDIRECTING TO CALENDAR...' : 'GET A QUOTE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;