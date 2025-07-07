"use client";

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
import { ProjectCard } from "@/components/project-card";
import { PlaceholdersAndVanishInput } from "@/components/acernityui/placeholders-and-vanish-input";
import { toast } from "sonner";
import { ResumeCard } from "@/components/resume-card";
import { Icons } from "@/components/icons";
import { NotebookIcon } from "lucide-react";
const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  const [hovering, setHovering] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [isInputLoading, setIsInputLoading] = useState(false);

  const [triggerDisappear, setTriggerDisappear] = useState(false);
  const placeholders = [
    "Send a message to me",
    "Drop a message, let's build a project",
    "You can type message here",
    "Dont be hesitant",
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
      // localStorage.setItem("devwtf-nsl", data.id);
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
        className="fixed -top-40 left-0 md:-left-30 md:-top-110 opacity-100"
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
                  <Link href={DATA.github} target="_blank">
                    <Badge
                      variant="outline"
                      className="rounded-full cursor-pointer p-1 pe-2"
                    >
                      <Icons.github className="size-11" />
                      <span>Github</span>
                    </Badge>
                  </Link>
                  <Link href={DATA.leetcode} target="_blank">
                    <Badge
                      variant="outline"
                      className="rounded-full cursor-pointer p-1 pe-2"
                    >
                      <Icons.leetcodeIcon className="size-20" />
                      <span>Leetcode</span>
                    </Badge>
                  </Link>
                  <Link href={DATA.github} target="_blank">
                    <Badge
                      variant="outline"
                      className="rounded-full cursor-pointer  p-1 pe-2"
                    >
                      <NotebookIcon className="size-20" />
                      <span>Resume</span>
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

      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
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
            ))}
          </div>
        </div>
      </section> */}

      <section id="newsletter">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact Me
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got something to say? Drop your message below, and let’s talk.
                Drop your name and message.
              </p>
              <div className="pt-10 flex flex-row ">
                {/* Name Input */}
                <div className="sm:w-1/3 w-full">
                  <PlaceholdersAndVanishInput
                    type="text"
                    placeholders={["Your name"]}
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
