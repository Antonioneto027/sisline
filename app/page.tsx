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
    <section className="font-sans flex content-center flex-col items-start gap-4 py-10 md:py-50">
      <div className="inline-block  text-center content-center justify-start">
      <AnimatedTextGradientTW />
        <p className="text-4xl">Your Store Manager</p>
      </div>

    </section>
  );
}
