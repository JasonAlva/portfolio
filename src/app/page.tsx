"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/magicui/globe";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Skill } from "@/components/Skill";
import { Spotlight } from "@/components/ui/spotlight";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "../data/config/info.config";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Lens } from "@/components/ui/lens";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  const [hovering, setHovering] = useState(false);
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 ">
      <Spotlight
        className="fixed -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl mt-4"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-wrap gap-1 h-full w-full">
                  <Badge variant="secondary" className="cursor-pointer">
                    Github
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer"></Badge>
                  <Link href={DATA.resume} target="_blank">
                    <Badge variant="secondary" className="flex cursor-pointer">
                      <span className="size-4 mr-1">✨</span>
                      Resume
                    </Badge>
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Lens hovering={hovering} setHovering={setHovering}>
                <Avatar className="size-28 cursor-pointer rounded-none">
                  <AvatarImage alt={DATA.name} src={DATA.profileImageUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </Lens>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="tech-stack">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Skill />
        </BlurFade>
      </section>
    </main>
  );
}
