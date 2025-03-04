"use client"

import BeamSections from "@/components/BeemSections";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import HeroLight from "@/components/HeroLight";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, CircleCheck, DollarSign, Gamepad2, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {

  const data = [
    {
      name: "Fortnite",
      image: "/fortnite.jpg",
      description: "Browse from thousands of pretty skins and packages",
      options: [
        "Buy V-Bucks Package at Best Price",
        "Unlock Battle Pass & Exclusive Skins",
        "Get Fortnite Crew Membership"
      ]
    },
    {
      name: "Call of Duty",
      image: "/call-of-duty.webp",
      description: "Get the best deals on COD Points and premium content",
      options: [
        "Buy COD Points",
        "Purchase Battle Pass & Tiers",
        "Get Exclusive Weapon Skins & Bundles"
      ]
    },
    {
      name: "CS:GO",
      image: "/csgo.avif",
      description: "Trade and buy skins, cases, and keys at competitive prices",
      options: [
        "Purchase CS:GO Skins & Cases",
        "Get Prime Status Upgrade",
        "Buy Weapon Keys & Stickers"
      ]
    },
    {
      name: "Mobile Legends",
      image: "/mobile-legends.jpeg",
      description: "Top up Diamonds and unlock exclusive skins instantly",
      options: [
        "Buy ML Diamonds",
        "Unlock Limited-Time Hero Skins",
        "Purchase Starlight Membership"
      ]
    }
  ];


  const [fade, setFade] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {

      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto relative overflow-hidden">

      <HeroLight />

      <main className="items-center">

        <div className="h-screen w-full flex justify-center">
          <Card className="h-full lg:pb-20 lg:ml-80 flex justify-center border-none shadow-none items-center bg-transparent rounded w-full">
            <CardContent className="backdrop-blur lg:pr-40 flex flex-row-reverse items-center justify-between size-full">
              <Image
                alt={data[currentIndex].name}
                src={data[currentIndex].image}
                width={3000}
                height={3000}
                className={`absolute object-cover z-0 inset-0 size-full transition-all duration-500 ${fade ? "opacity-0 backdrop-blur-3xl" : "backdrop-blur-0 opacity-100"}`}
              />

              <div className="bg-gradient-to-r from-background via-background/75 to-background/50 size-full absolute inset-0"></div>
              <div className="bg-gradient-to-t from-background via-background/25 to-background/25 size-full absolute inset-0"></div>
              <div className="flex w-full lg:w-6/12 z-50 flex-col gap-3">
                <h2 className={`text-6xl lg:text-8xl transition-all duration-200 ${fade ? "opacity-0" : "opacity-100"}`}>{data[currentIndex].name}</h2>
                <p className={`text-2xl tracking-wide mb-10 text-muted-foreground transition-all duration-200 ${fade ? "opacity-0" : "opacity-100"}`}>{data[currentIndex].description}</p>

                {data[currentIndex].options.map((option) => (
                  <div className="flex items-center gap-2">
                    <CircleCheck stroke="#6366f1" />
                    <p className={`transition-all lg:text-4xl duration-200 ${fade ? "opacity-0" : "opacity-100"}`}>{option}</p>
                  </div>
                ))}

                <Button className="bg-gradient-to-r mt-10 flex shadow-2xl tracking-wide justify-center items-center gap-3 h-14 text-3xl rounded from-pink-500 to-indigo-500 ">
                  <DollarSign strokeWidth={"3"} />
                  Sell Your Own Assets
                </Button>
                <Button className="bg-gradient-to-br flex shadow-2xl tracking-wide justify-center items-center gap-3 h-14 text-3xl rounded from-indigo-500 to-blue-500 ">
                  <Gamepad2 strokeWidth={"2"} />
                  Start Browsing Assets
                </Button>
              </div>
              {/* <div className="z-20 max-w-3xl relative -translate-x-48">
                <h2 className="pointer-events-none z-20 line-clamp-2 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-pink-500 dark:via-indigo-500 dark:to-background/10">
                  Buy Or Sell Your Favorite Game <span className="text-indigo-500">Assets</span>
                </h2>
                <div className="bg-gradient-to-t from-background/25 to-transparent absolute bottom-20 h-20 w-full"></div>
                <div className="relative w-full">
                  <Search className="absolute z-20 right-10 top-1/2 transform -translate-y-1/2 text-gray-500" strokeWidth={3} size={28} />
                  <input
                    placeholder="Search Your Favorite Asset or Game ..."
                    className="z-30 pl-14 pr-5 p-5 flex outline-none border border-indigo-500 text-3xl bg-black/50 !backdrop-blur placeholder:text-3xl pt-6 justify-center items-center shadow-2xl  rounded-3xl h-24 w-full"
                  />
                </div>
              </div> */}
            </CardContent>
            <BorderBeam
              duration={6}
              size={1000}
              className="from-transparent via-indigo-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={1000}
              className="from-transparent via-blue-500 to-transparent"
            />
          </Card>

        </div>

        <Features />

      </main>

      <div className="mt-52 backdrop-blur bg-white/[1%] rounded-lg">
        <BeamSections />
      </div>

      <div className="mt-52 px-3 md:px-5">

        <CallToAction />

      </div>

      <Footer />


      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

    </div>
  );
}