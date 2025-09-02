import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import ChromeIcon from "@/assets/icons/chrome.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import ReacIcon from "@/assets/icons/react.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
  // {
  //   title: "JavaScript",
  //   icon: ''
  // },
  // {
  //   title: "TypeScript",
  //   icon: ''
  // },
  {
    title: "Chrome DevTools",
    icon: ChromeIcon
  },
  {
    title: "React",
    icon: ReacIcon
  },
  // {
  //   title: "Node.js",
  //   icon: ''
  // },
  // {
  //   title: "Next.js",
  //   icon: ''
  // },
  // {
  //   title: "Express",
  //   icon: ''
  // },
  // {
  //   title: "Fastify",
  //   icon: ''
  // },
  {
    title: "HTML5",
    icon: HTML5Icon
  },
  {
    title: "CSS3",
    icon: CSS3Icon
  },
  // {
  //   title: "Tailwind CSS",
  //   icon: ''
  // },
  // {
  //   title: "Sass",
  //   icon: ''
  // },
  // {
  //   title: "Webpack",
  //   icon: ''
  // },
  {
    title: "GitHub",
    icon: GithubIcon
  },
  // {
  //   title: "Git",
  //   icon: ''
  // },

]

const hobbies = [
  {
    title: "Reading",
    emoji: "📚"
  },
  {
    title: "Traveling",
    emoji: "🗺️"
  },
  {
    title: "Gaming",
    emoji: "🎮"
  },
  {
    title: "Cooking",
    emoji: "🍳"
  },
  {
    title: "Hiking",
    emoji: "🥾"
  },
  {
    title: "Photography",
    emoji: "📷"
  },
  {
    title: "Traveling",
    emoji: "✈️"
  },

]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me better"
          description="I'm a passionate frontend developer with a knack for creating beautiful and functional user interfaces."
        />
        <div className="mt-20">
          <div className="md:flex md:gap-8">
            <Card className="h-[320px] mt-8 p-0 md:w-5/12 lg:w-4/12">
              <CardHeader
                title="My Reads"
                subtitle="Explore the books shaping my perspectives."
              >
              </CardHeader>
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] mt-8 p-0 md:w-7/12 lg:w-8/12">
              <CardHeader
                title="My Toolbox"
                subtitle="Explore the tools and technologies I use."
              />
              <div className="mt-6 flex gap-4 overflow-x-clip"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
              >
                {toolboxItems.map((item) => (
                  <div key={item.title} className="flex items-center space-x-2 p-2 px-4 border border-white rounded-xl">
                    <TechIcon component={item.icon} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4 flex-row-reverse overflow-x-clip"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
              >
                {toolboxItems.map((item) => (
                  <div key={item.title} className="flex items-center space-x-2 p-2 px-4 border border-white rounded-xl">
                    <TechIcon component={item.icon} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="md:flex md:gap-8">
            <Card className="h-[320px] mt-8 p-0 md:w-7/12 lg:w-8/12">
              <CardHeader
                title="Beyond the Code"
                subtitle="Exploring my interests outside of programming."
              />
              <div className="flex flex-wrap gap-4 w-full mt-6"
               style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
              >
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="flex items-center space-x-2 bg-gradient-to-r from-emerald-300 to-sky-400 p-2 rounded-xl text-black font-bold">
                  <span>{hobby.emoji}</span>
                  <span>{hobby.title}</span>
                </div>
              ))}
              </div>
            </Card>
            <Card className="h-[320px] mt-8 p-0 md:w-5/12 lg:w-4/12">
              <Image src={MapImage} alt="Map" className="object-cover w-full h-full" />
            </Card>
          </div>
        </div>
      </div>

    </div>
  );
};
