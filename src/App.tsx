import { cn } from "./lib/utils";
import React, { useState } from "react";
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
  return (
    <div className="relative h-screen w-full bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <BackgroundBeamsWithCollision className="grid h-screen bg-transparent justify-center border-none py-10 !w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody className="fixed m-auto left-0 right-0">
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex gap-4">
              <NavbarButton variant="secondary">Login</NavbarButton>
              <NavbarButton variant="gradient">Book a call</NavbarButton>
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
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        <div className="flex w-7xl">
          <div>
            <h3 className="text-xl font-bold md:text-4xl lg:text-5xl text-white my-5">
              Hello,
            </h3>
            <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-sans">
              I'm <ColourfulText text="RAHAT HOSSAIN" /> a
            </h2>
            <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-pink-700  relative z-2 font-sans my-7">
              Web Designer
            </h3>
            <TextGenerateEffect
              className="font-light text-sm w-5xl"
              words={heroDescription}
            />
          </div>
          <div>
            <img
              src="./assets/img/profile.png"
              height={200}
              width={200}
              className="rounded-full"
              alt=""
            />
          </div>
        </div>

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
