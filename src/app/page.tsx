import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/magicui/globe";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Skill } from "@/components/Skill";
const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 ">
      <section id="tech-stack">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Skill />
        </BlurFade>
      </section>
    </main>
  );
}
