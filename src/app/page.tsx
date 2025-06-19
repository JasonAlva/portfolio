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
import Markdown from "react-markdown";
import { PROJECTS } from "../data/config/project.config";
import { ProjectCard } from "@/components/project-card";
import { PlaceholdersAndVanishInput } from "@/components/acernityui/placeholders-and-vanish-input";
import { toast } from "sonner";
import { ResumeCard } from "@/components/resume-card";
const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  const [hovering, setHovering] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [isInputLoading, setIsInputLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [triggerDisappear, setTriggerDisappear] = useState(false);
  const placeholders = [
    "Send message to 0xSabdadev",
    "Connect to the decentralized future",
    "Drop a message, let's build the metaverse",
    "Deploy your ideas, no central authority",
    "The chain awaits your next big move",
  ];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !mail.trim()) {
      toast.error("Both name and message are required!");
      return;
    }
    setTriggerDisappear(true);
    setIsInputLoading(true);
    toast.info("Ur message is being mined...");
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message: mail }),
      });

      if (!response.ok) {
        throw new Error("Send Message failed");
      }

      const data = await response.json();
      setIsInputLoading(false);
      console.log("Message successful:", data);
      // Show success toast
      toast.success(" Tx confirmed! live on-chain to 0xSabdadev!");
      // Update local storage to indicate subscription
      localStorage.setItem("devwtf-nsl", data.id);
      // Update state to reflect subscription

      setTriggerDisappear(false);
    } catch (error) {
      setIsInputLoading(false);
      console.error("Error messaging:", error);
      // Show error toast
      toast.error("Message failed. Please try again.");
    }
  };
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
      <section id="bio">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-1 md:mb-0">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-[14px] md:text-md text-muted-foreground dark:prose-invert text-justify">
            <Markdown>{DATA.bio}</Markdown>
          </div>
        </BlurFade>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="tech-stack">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Skill />
        </BlurFade>
      </section>

      <section id="projects">
        <div className="flex flex-col items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-5">
              Epic Builds 🈂️
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="space-y-12 w-full">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">
                      Some of my cool shits
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I&apos;ve been buildin' some dope Web3 stuff, from slick
                      dApps to full-blown solutions. Here’s a taste of my favs –
                      check out more{" "}
                      <Link
                        href="/projects"
                        className="text-blue-500 hover:underline"
                      >
                        projects page
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                  {PROJECTS.filter((project) => project.featured).map(
                    (project, id) => (
                      <BlurFade
                        key={project.title}
                        delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                      >
                        <ProjectCard
                          href={project.href}
                          active={project.active}
                          archived={project.archived}
                          key={project.title}
                          title={project.title}
                          description={project.description}
                          dates={project.dates}
                          tags={project.technologies}
                          image={project.image}
                          video={project.video}
                          links={project.links}
                        />
                      </BlurFade>
                    )
                  )}
                </div>
              </div>
            </BlurFade>
          </BlurFade>
        </div>
      </section>

      <section id="newsletter">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Web3 Messaging Hub 🈯️
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                No Centralized Vibes
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got something to say? Drop your message below, and let’s talk
                blockchain, crypto, and all things decentralized. No spam, just
                straight-up web3 vibes.
              </p>
              <div className="pt-10 flex flex-row ">
                {/* Name Input */}
                <div className="sm:w-1/3 w-full">
                  <PlaceholdersAndVanishInput
                    type="text"
                    placeholders={["Ur name dude"]}
                    value={name}
                    onChange={handleNameChange}
                    onSubmit={onSubmit}
                    disabled={isInputLoading}
                    roundedLeft
                    triggerDisappear={triggerDisappear}
                  />
                </div>
                <div className="sm:w-2/3 w-full mt-0">
                  <PlaceholdersAndVanishInput
                    type="text"
                    placeholders={placeholders}
                    value={mail}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    disabled={isInputLoading}
                    submitButton
                    roundedRight
                    triggerDisappear={triggerDisappear}
                  />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
