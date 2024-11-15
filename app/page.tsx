import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button, ButtonGroup } from "@nextui-org/button";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { AnimatedTextGradientTW } from "@/components/animatedText";

export default function Home() {
  return (
    <div>
      <section className="font-sans flex content-center justify-between gap-4 py-10 md:py-50">
        <div className="inline-block text-center content-center justify-start">
          <div className="animate-slideDown5">
            <AnimatedTextGradientTW />
          </div>
          <p className="text-4xl">Your Store Manager</p>
        </div>
        <div className="flex flex-row">
          <div className="relative flex justify-between flex-col">
            {/* Item principal (posicionado relativo ao centro) */}
            <Image
              src="/cover/1.png"
              className="relative mx-auto"
              alt="Logo"
              width={600}
              height={600}
            />
            {/* Itens absolutos posicionados ao redor */}
            <Image
              src="/cover/2.png"
              className="absolute animate-slideDown1 top-0 left-0"
              alt="Logo"
              width={125}
              height={125}
            />
            <Image
              src="/cover/3.png"
              className="absolute animate-slideDown2 top-0 right-0"
              alt="Logo"
              width={100}
              height={100}
            />
            <Image
              src="/cover/4.png"
              className="absolute animate-slideDown3 top-20 left-40"
              alt="Logo"
              width={100}
              height={100}
            />
            <Image
              src="/cover/5.png"
              className="absolute animate-slideDown4 top-10 right-40"
              alt="Logo"
              width={100}
              height={100}
            />
            <Image
              src="/cover/6.png"
              className="absolute animate-slideDown1 -top-10 left-60"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      
      </section>
      <section>
      <div className="justify-center content-center text-center align-center">
        <Button className="animate-bounce rounded-full ..." color="primary" variant="ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
        </Button>
      </div> 
      </section>
    </div>
  );
}
