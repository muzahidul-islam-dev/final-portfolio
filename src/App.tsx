import { cn } from "./lib/utils";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/resizable-navbar";
import { ColourfulText } from "./components/ui/colourful-text";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import ProfileImage from "./assets/img/profile.jpg";
import { Button } from "./components/ui/moving-border";
import { OrbitingCircles } from "./components/ui/OrbitingCircles";
import Icons from "./components/Icons";
import { HeroParallax } from "./components/ui/hero-parallax";
import Projects from "./components/Projects";
import { FlipWords } from "./components/ui/flip-words";
import { CardSpotlight } from "./components/ui/card-spotlight";

import { SparklesCore } from "./components/ui/sparkles";
import { Card, CardContent, CardFooter } from "./components/ui/card";
import { ShineBorder } from "./components/ui/shine-border";
import { NumberTicker } from "./components/ui/NumberTicker";
export default function App() {
  const navItems = [
    {
      name: "About Me",
      link: "#about",
    },
    {
      name: "Service",
      link: "#service",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroDescription = `I build modern, scalable, and secure web applications focused on clean design and strong performance. My coding style emphasizes clarity, efficiency, and long-term maintainability. I love turning complex ideas into simple, functional, and user-friendly solutions. Always eager to learn and improve, I strive to deliver quality results that exceed client expectations.`;
  const aboutContent = `Hi, I’m Rahat Hossain, a passionate Full Stack Web Developer specializing in Laravel MERN stack. I enjoy creating digital solutions that combine clean, scalable, and maintainable code with beautiful and responsive user interfaces. My approach is to blend creativity with technical precision, delivering efficient, modern, and user-friendly web applications. I am committed to continuous learning and always eager to explore new technologies to stay ahead in the fast-evolving world of web development. Turning ideas into reality, one line of code at a time, is what drives me to deliver quality results that exceed expectations.`;
  const professionWords = [
    'Web Designer',
    'Web Developer',
    'Full Stack Developer'
  ]
  return (
    <div>
      <div className="relative w-full">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <BackgroundBeamsWithCollision className="grid h-fit lg:h-[940px] bg-transparent border-none !w-full" >
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody className="fixed m-auto left-0 right-0 ">
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex gap-4">
                <NavbarButton variant="bgPrimary" className="rounded-2xl" href="#contact">Contact Me</NavbarButton>
              </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav className="fixed m-auto left-0 right-0">
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>

              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="gradient"
                    href="#contact"
                    className="w-full bg-primary rounded-xl"
                  >
                    Contact Me
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>

          <div className="grid mt-20 lg:grid-cols-2 gap-10 px-5 w-full justify-between max-w-[1400px] mx-auto">
            <div>
              <h3 className="text-xl text-center lg:text-left font-bold md:text-4xl lg:text-4xl text-white my-5">
                Hello,
              </h3>
              <h2 className="text-2xl md:text-5xl text-center lg:text-left lg:text-5xl font-bold text-white relative z-2 font-sans">
                I'm Rahat Hossain a
              </h2>
              <h3 className="text-2xl text-center lg:text-left md:text-5xl lg:text-5xl font-bold text-primary  relative z-2 font-sans my-7">
                <FlipWords words={professionWords} />
              </h3>
              <TextGenerateEffect
                className="font-light text-center lg:text-left text-sm lg:w-2xl text-gray-900 mb-10"
                words={heroDescription}
              />
              <div className="flex gap-5 justify-center lg:justify-start">
                <button
                  className="bg-primary px-10 rounded-[1.75rem]"
                >
                  Contact Us
                </button>
                <Button
                  borderRadius="1.75rem"
                  className="bg-slate-900 text-white cursor-pointer hover:bg-[#1DCD9F] hover:text-black border-slate-800"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="grid justify-center lg:justify-end mb-10">
              <img
                src={ProfileImage}
                className="rounded h-72 md:h-80 lg:h-96"
                alt=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] gap-5 mx-auto px-5 md:px-10">
            <div className="hover:shadow-lg shadow-md shadow-teal-500/50 duration-300 transition-all bg-[#0f0f0f]/80 border  hover:border-primary rounded-2xl px-8 py-6 w-full sm:w-[300px] text-primary text-center space-y-2 grid h-max text-5xl font-bold text-lime-400 tracking-wide"><span><NumberTicker className="text-primary" value={5} />+</span> <span className="text-sm text-neutral-300">Years of Experience</span></div>
            <div className="hover:shadow-lg shadow-md shadow-teal-500/50 duration-300 transition-all bg-[#0f0f0f]/80 border  hover:border-primary rounded-2xl px-8 py-6 w-full sm:w-[300px] text-primary text-center space-y-2 grid h-max text-5xl font-bold text-lime-400 tracking-wide"><span><NumberTicker className="text-primary" value={50} />+</span> <span className="text-sm text-neutral-300">Projects Completed</span></div>
            <div className="hover:shadow-lg shadow-md shadow-teal-500/50 duration-300 transition-all bg-[#0f0f0f]/80 border  hover:border-primary rounded-2xl px-8 py-6 w-full sm:w-[300px] text-primary text-center space-y-2 grid h-max text-5xl font-bold text-lime-400 tracking-wide"><span><NumberTicker value={98} className="text-primary" />%</span> <span className="text-sm text-neutral-300">Client Satisfaction</span></div>
          </div>

          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="pointer-events-none absolute inset-0 flex justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div> */}
        </BackgroundBeamsWithCollision>
      </div>
      <section className="my-20" id="about">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2">
            <div className="">
              <div className="relative flex h-[500px] md:h-[600px] w-full flex-col items-center justify-center overflow-hidden">
                <OrbitingCircles iconSize={40} radius={250}>
                  <Icons.typescript />
                  <Icons.phpIcon />
                  <Icons.expressIcon />
                  <Icons.reactJsIcon />
                  <Icons.nodeJs />
                  <Icons.tailwindCSSIcon />
                  <Icons.nextJs />
                </OrbitingCircles>
                <OrbitingCircles iconSize={35} radius={150} reverse speed={2}>
                  <Icons.laravelIcon />
                  <Icons.javascriptIcon />
                  <Icons.mongoDB />
                  <Icons.mysql />
                  <Icons.bootstrapIcon />
                </OrbitingCircles>
                <OrbitingCircles iconSize={30} radius={70} speed={2}>
                  <Icons.gitIcon />
                  <Icons.postmanIcon />
                  <Icons.wordpressIcon />
                  <Icons.dartIcon />
                  <Icons.flutterIcon />
                </OrbitingCircles>
              </div>
            </div>
            <div className="grid items-center my-20 md:my-0">
              <div>
                <h3 className="text-primary text-xl">About Me</h3>
                <h3 className="text-white text-4xl font-bold">Professional Problem Solutions For Digital Products</h3>
                <TextGenerateEffect
                  className="font-light text-sm max-w-7xl text-gray-500 mt-10 mb-10"
                  words={aboutContent}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-2xl py-20 my-20">
        <HeroParallax products={Projects} />;
      </section>

      <section className="my-20" id="service">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <h3 className="text-gray-400 text-sm md:text-xl text-center uppercase">Popular Services</h3>
          <h1 className="text-white text-2xl md:text-5xl font-bold my-3 text-center">My <span className="text-primary">Special Service For your</span> <br />
            Business Development</h1>
          <div className="lg:max-w-7xl mx-auto my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-xl">01</span> <span className="text-white text-xl font-semibold">Laravel Web Application Development</span>
                  <p className="text-white text-sm my-2">Custom and scalable Laravel web application development.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-xl">02</span> <span className="text-white text-xl font-semibold">Full Stack Website Development (Laravel / MERN)</span>
                  <p className="text-white text-sm my-2">Build modern and responsive full stack web solutions.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-xl">03</span> <span className="text-white text-xl font-semibold">Bug Fixing & Performance Optimization</span>
                  <p className="text-white text-sm my-2">Fix backend or frontend bugs and improve speed.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-xl">04</span> <span className="text-white text-xl font-semibold">RESTful API Development (Laravel / Node.js)</span>
                  <p className="text-white text-sm my-2">Develop secure and efficient RESTful APIs for web apps.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-xl">05</span> <span className="text-white text-xl font-semibold">E-commerce Website Development</span>
                  <p className="text-white text-sm my-2">Create advanced e-commerce or multi-vendor web platforms.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-xl">06</span> <span className="text-white text-xl font-semibold">API Integration & Backend Development</span>
                  <p className="text-white text-sm my-2">Integrate third-party APIs and build powerful backend systems.</p>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>

      </section>

      <section className="border-t-4 border-primary rounded-4xl my-20" id="skills">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="h-[25rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md mt-10">
            <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 uppercase">
              Skills and Experience
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>


            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            <div className="rounded-xl bg-gray-900 py-5 hover:shadow-lg shadow-teal-500/50 duration-300 transition-all">
              <div className="flex justify-center my-5 items-center">
                <Icons.phpSkillIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">PHP</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center h-14 w-14 m-auto bg-white py-2 px-2 rounded-full">
                <Icons.laravelSkillIcon />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Laravel</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.mysqlIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">MySql</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.mongoDBIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">MongoDB</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.reactJsIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">React</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.expressIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Express Js</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.typeScriptIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Typescript</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.nextJsIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Next JS</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.tailwindCSS className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Tailwind CSS</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.javascriptIcon className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">JavaScript</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.dartIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Dart</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">20%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.wordpressIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">WordPress</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.flutterIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Flutter</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">20%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.postmanIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">Postman</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
            <div className="rounded-xl  hover:shadow-lg shadow-teal-500/50 duration-300 transition-all bg-gray-900 py-5">
              <div className="flex justify-center my-5 items-center">
                <Icons.gitIcon className="h-14" />
              </div>
              <div>
                <h3 className="text-white text-center text-xl font-semibold">GitHub</h3>
                <h3 className="text-white font-semibold text-center my-2 text-primary">90%</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40" id="contact">
        <div className="max-w-[1400px] mx-auto px-10 ">
          <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
            <div className="max-w-md">
              <h3 className="text-white">Get In Touch</h3>
              <h1 className="text-white text-2xl lg:text-5xl font-bold my-5">Let’s Talk For your <br /><span className="text-primary">Next Projects</span></h1>
              <p className="text-white">I’m always open to discussing product design work or partnership opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>

            </div>
            <div>
              <Card className="relative w-full overflow-hidden bg-gray-900 backdrop-blur-lg rounded-xl border shadow-2xl hover:shadow-3xl transition-all duration-300 pt-10 pb-5 px-5">
                <ShineBorder shineColor={["#1DCD9F", "#FE8FB5", "#1DCD9F"]} />
                <CardContent>
                  <form>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                      <div className="w-full">
                        <input className="text-white w-full border border-transparent bg-gray-800 py-2 px-4 rounded-md focus:outline-none focus:border-teal-500 " id="email" type="text" placeholder="Enter Name" />
                      </div>
                      <div className="w-full">
                        <input className="text-white w-full border border-transparent bg-gray-800 py-2 px-4 rounded-md focus:outline-none focus:border-teal-500 " id="email" type="email" placeholder="Enter Email" />
                      </div>
                      <div className="w-full">
                        <input className="text-white w-full border border-transparent bg-gray-800 py-2 px-4 rounded-md focus:outline-none focus:border-teal-500  focus:appearance-none" id="email" type="number" placeholder="Enter Number" />
                      </div>
                      <div className="w-full">
                        <input className="text-white w-full border border-transparent bg-gray-800 py-2 px-4 rounded-md focus:outline-none focus:border-teal-500 " id="email" type="text" placeholder="Enter Name" />
                      </div>
                      <div className="xl:col-span-2">
                        <textarea rows={7} className="text-white w-full border border-transparent bg-gray-800 py-2 px-4 rounded-md focus:outline-none focus:border-teal-500 " placeholder="Message"></textarea>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="m-0">
                  <button className="bg-primary rounded-lg py-3 px-6 font-semibold cursor-pointer border border-transparent hover:bg-transparent hover:border-teal-500 hover:text-teal-500 duration-300 transition-all">Submit</button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">RH.</h3>
            <p className="text-sm text-slate-400">Building amazing experiences for everyone.</p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">Copyright © 2025, Rahat Hossain All Rights Reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.893v4.577H8.368V9.359h2.462v1.017h.034c.345-.517.994-1.064 2.047-1.064 2.186 0 2.589 1.438 2.589 3.31v4.716zM5.337 8.855c-.696 0-1.286-.563-1.286-1.259s.59-1.26 1.286-1.26c.696 0 1.286.563 1.286 1.26s-.59 1.259-1.286 1.259zm1.078-2.537H4.26V16.338h2.155V6.318zM17.771 1H2.229A2.225 2.225 0 000 3.257v13.486A2.225 2.225 0 002.229 19h15.542A2.226 2.226 0 0020 16.743V3.257A2.226 2.226 0 0017.771 1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}


