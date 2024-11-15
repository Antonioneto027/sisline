import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { AnimatedTextGradientTW } from "@/components/animatedText";

export default function Home() {
  return (
    <section className="font-sans flex content-center flex-row justify-between  gap-4 py-10 md:py-50">
      <div className="inline-block text-center content-center justify-start">
      <AnimatedTextGradientTW />
        <p className="text-4xl">Your Store Manager</p>
      </div>
      <div>
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
    width={100}
    height={100}
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
  );
}
