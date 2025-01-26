"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import test from "node:test";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "This car finder has transformed how I search for my next vehicle. The filters make it incredibly simple.",
    name: "Sophia Perez",
    title: "First-Time Car Buyer",
    avatarImg: avatar1,
  },
  {
    text: "The interface is so intuitive and easy to use, it has saved me hours of dealership visits.",
    name: "Jamie Lee",
    title: "Family Vehicle Shopper",
    avatarImg: avatar2,
  },
  {
    text: "These search tools have completely revolutionized how I shop for cars overnight.",
    name: "Alisa Hester",
    title: "Commuter Car Seeker",
    avatarImg: avatar3,
  },
  {
    text: "My car-buying experience has improved significantly since I started using this tool.",
    name: "Alec Whitten",
    title: "Car Enthusiast",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
  <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Beyond Expectations.</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
        Our revolutionary tools have transformed our clients
        lives.
      </p>
      <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{
            translateX: '-50%',
          }}
          animate={{
            translateX: '0',
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex gap-5 pr-5 flex-none">
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(255,69,69,.3),black)] max-w-xs md:max-w-md flex-none">
                <div className="text-lg tracking-tight md:text-2xl">{testimonial.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(255,69,69)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image src={testimonial.avatarImg} alt={ `Avatar for ${testimonial.name}`} className="h-11 w-11 rounded-lg grayscale"/>
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  </section>
  );
};