import { Card, CardContent, CardFooter } from "../ui/card";
import { ShineBorder } from "../ui/shine-border";
import { SectionLabel, SectionHeading } from "./shared";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-[#080808] relative">
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(29,205,159,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div className="lg:sticky lg:top-32">
            <SectionLabel>Get In Touch</SectionLabel>
            <SectionHeading>
              Let's Work on Your<br />
              <span className="text-primary">Next Project</span>
            </SectionHeading>
            <p className="text-gray-400 mt-6 leading-relaxed max-w-sm text-sm">
              Have a project in mind or just want to say hello? I'd love to hear from you. Fill in the form and I'll get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:muzahidulislam.dev@gmail.com"
                className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] hover:border-primary/40 rounded-xl px-5 py-4 group transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-widest">Email</p>
                  <p className="text-white text-sm font-medium mt-0.5">muzahidulislam.dev@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-widest">Location</p>
                  <p className="text-white text-sm font-medium mt-0.5">Bangladesh (Remote Available)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <Card className="relative w-full overflow-hidden bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl p-8">
              <ShineBorder shineColor={["#1DCD9F", "#0ea5e9", "#1DCD9F"]} />
              <CardContent className="p-0">
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Full Name</label>
                      <input
                        id="name" type="text" placeholder="John Doe"
                        className="text-white w-full bg-white/[0.04] border border-white/[0.08] py-3 px-4 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all placeholder:text-gray-700 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Email</label>
                      <input
                        id="email" type="email" placeholder="john@example.com"
                        className="text-white w-full bg-white/[0.04] border border-white/[0.08] py-3 px-4 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all placeholder:text-gray-700 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Subject</label>
                    <input
                      id="subject" type="text" placeholder="Project Inquiry"
                      className="text-white w-full bg-white/[0.04] border border-white/[0.08] py-3 px-4 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all placeholder:text-gray-700 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Message</label>
                    <textarea
                      id="message" rows={5} placeholder="Tell me about your project..."
                      className="text-white w-full bg-white/[0.04] border border-white/[0.08] py-3 px-4 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all placeholder:text-gray-700 text-sm resize-none"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="p-0 mt-6">
                <button className="w-full bg-primary text-black font-semibold py-3.5 px-6 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all cursor-pointer text-sm tracking-wide">
                  Send Message →
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
