'use client';

import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus('submitting');
      const res = await fetch('https://formsubmit.co/ajax/mangajjar44@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Let's Connect"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-lightest lg:sr-only">
          Let&apos;s Connect
        </h2>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-lightest sm:text-4xl mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-slate max-w-2xl">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <div className="bg-navy-light/30 border border-slate/10 rounded-2xl p-6 sm:p-8 flex flex-col h-full">
          <h3 className="text-xl font-bold text-slate-lightest mb-8">
            Send a message
          </h3>
          
          {status === 'success' ? (
            <div className="bg-teal/10 border border-teal/20 rounded-2xl p-4 sm:p-6 text-center motion-safe:animate-fade-in flex flex-col items-center justify-center flex-1">
              <FiCheckCircle className="w-10 h-10 text-teal mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-lightest mb-2">Message Sent!</h4>
              <p className="text-slate text-xs mb-6 leading-relaxed max-w-[200px] mx-auto">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setStatus('')}
                className="inline-flex bg-white hover:bg-slate-200 text-navy-lightest font-bold rounded-full px-4 py-2 text-[10px] uppercase tracking-wider items-center justify-center gap-2 transition-colors"
              >
                <FiSend className="w-3 h-3 shrink-0" />
                <span className="whitespace-nowrap">Send new message</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Added honeypot for spam protection via formsubmit */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-navy/50 border border-slate/20 rounded-lg px-4 py-3 text-slate-lightest placeholder:text-slate/50 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-navy/50 border border-slate/20 rounded-lg px-4 py-3 text-slate-lightest placeholder:text-slate/50 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-navy/50 border border-slate/20 rounded-lg px-4 py-3 text-slate-lightest placeholder:text-slate/50 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">Oops! Something went wrong. Please try again later.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white hover:bg-slate-200 text-navy-lightest font-bold rounded-full px-8 py-4 flex items-center justify-center gap-2 transition-colors mt-8 disabled:opacity-70"
              >
                <FiSend className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Collaboration Areas */}
        <div className="bg-navy-light/30 border border-slate/10 rounded-2xl p-6 sm:p-8 lg:mt-0">
          <h3 className="text-xl font-bold text-slate-lightest mb-6">
            Collaboration Areas
          </h3>
          
          <p className="text-slate mb-10 leading-relaxed">
            I build practical AI/ML and web-based applications focused on solving real-world problems through data-driven solutions and modern development practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
            <div className="flex items-start gap-3">
              <span className="text-teal mt-1 text-xs">●</span>
              <span className="text-slate-light font-medium text-sm">Machine Learning Solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal mt-1 text-xs">●</span>
              <span className="text-slate-light font-medium text-sm">Data Analysis & Visualization</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal mt-1 text-xs">●</span>
              <span className="text-slate-light font-medium text-sm">Deep Learning Applications</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal mt-1 text-xs">●</span>
              <span className="text-slate-light font-medium text-sm">Interactive Dashboard Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
