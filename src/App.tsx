import { cn } from "./lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
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
import { AuroraBackground } from "./components/ui/aurora-background";
export default function App() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroDescription = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  const aboutContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam officiis temporibus accusamus! In obcaecati, assumenda alias quia facilis eligendi iure tempore cumque numquam quos, temporibus fuga odit ab at.`;
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
        <BackgroundBeamsWithCollision className="grid h-[1000px] bg-transparent border-none !w-full" >
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody className="fixed m-auto left-0 right-0 ">
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex gap-4">
                <NavbarButton variant="secondary">Login</NavbarButton>
                <NavbarButton variant="bgPrimary">Book a call</NavbarButton>
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
                    className="w-full"
                  >
                    Login
                  </NavbarButton>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="gradient"
                    className="w-full bg-primary"
                  >
                    Book a call
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>

          <div className="grid mt-20 grid-cols-2 gap-10 px-5 w-full justify-between max-w-[1400px] mx-auto">
            <div>
              <h3 className="text-xl font-bold md:text-4xl lg:text-4xl text-white my-5">
                Hello,
              </h3>
              <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold text-white relative z-2 font-sans">
                I'm <ColourfulText text="RAHAT HOSSAIN" /> a
              </h2>
              <h3 className="text-2xl md:text-5xl lg:text-5xl font-bold text-primary  relative z-2 font-sans my-7">
                <FlipWords words={professionWords} />
              </h3>
              <TextGenerateEffect
                className="font-light text-sm w-2xl text-gray-900 mb-10"
                words={heroDescription}
              />
              <div className="flex gap-5">
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
            <div className="grid justify-end">
              <img
                src={ProfileImage}
                height={400}
                width={400}
                className="rounded"
                alt=""
              />
            </div>
          </div>

          <div className="flex max-w-[1400px] gap-5 mx-auto ">
            <div className="bg-[#0f0f0f]/80 border  hover:border-primary hover:shadow-lg shadow-lime-400/10 transition-all duration-300 rounded-2xl px-8 py-6 w-full sm:w-[300px] text-primary text-center space-y-2 grid h-max text-5xl font-bold text-lime-400 tracking-wide">5+ <span className="text-sm text-neutral-300">Years of Experience</span></div>
            <div className="bg-[#0f0f0f]/80 border  hover:border-primary hover:shadow-lg shadow-lime-400/10 transition-all duration-300 rounded-2xl px-8 py-6 w-full sm:w-[300px] text-primary text-center space-y-2 grid h-max text-5xl font-bold text-lime-400 tracking-wide">5+ <span className="text-sm text-neutral-300">Years of Experience</span></div>
            <div className="bg-[#0f0f0f]/80 border  hover:border-primary hover:shadow-lg shadow-lime-400/10 transition-all duration-300 rounded-2xl px-8 py-6 w-full sm:w-[300px] text-primary text-center space-y-2 grid h-max text-5xl font-bold text-lime-400 tracking-wide">5+ <span className="text-sm text-neutral-300">Years of Experience</span></div>
          </div>

          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="pointer-events-none absolute inset-0 flex justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div> */}
        </BackgroundBeamsWithCollision>
      </div>
      <div className="max-w-[1400px] mx-auto my-20">
        <div className="grid grid-cols-2">
          <div className="">
            <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
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
                <Icons.flutterIcon />
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
          <div className="grid items-center">
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
      <section>
        <HeroParallax products={Projects} />;
      </section>

      <section className="px-20 rounded-2xl py-20 my-20 border-t-4 border-primary">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-gray-400 text-sm md:text-xl text-center uppercase">Popular Services</h3>
          <h1 className="text-white text-3xl md:text-5xl font-bold my-3 text-center">My <span className="text-primary">Special Service For your</span> <br />
            Business Development</h1>
          <div className="max-w-5xl mx-auto my-20">
            <div className="grid grid-cols-2 gap-7">
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-2xl">01</span> <span className="text-white text-2xl font-semibold">Technical SEO & Console Fixes</span>
                  <p className="text-white text-sm my-2">Beyond keywords I fix what search engines care about.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-2xl">02</span> <span className="text-white text-2xl font-semibold">Technical SEO & Console Fixes</span>
                  <p className="text-white text-sm my-2">Beyond keywords I fix what search engines care about.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-2xl">03</span> <span className="text-white text-2xl font-semibold">Technical SEO & Console Fixes</span>
                  <p className="text-white text-sm my-2">Beyond keywords I fix what search engines care about.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-2xl">04</span> <span className="text-white text-2xl font-semibold">Technical SEO & Console Fixes</span>
                  <p className="text-white text-sm my-2">Beyond keywords I fix what search engines care about.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-2xl">05</span> <span className="text-white text-2xl font-semibold">Technical SEO & Console Fixes</span>
                  <p className="text-white text-sm my-2">Beyond keywords I fix what search engines care about.</p>
                </div>
              </CardSpotlight>
              <CardSpotlight color="#1DCD9F" className="h-fit w-full py-5 px-7">
                <div>
                  <span className="text-primary font-bold text-2xl">06</span> <span className="text-white text-2xl font-semibold">Technical SEO & Console Fixes</span>
                  <p className="text-white text-sm my-2">Beyond keywords I fix what search engines care about.</p>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>

      </section>

      <section>
        
      </section>
    </div>
  );
}


