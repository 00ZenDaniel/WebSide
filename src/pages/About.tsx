import { Button } from "@/components/ui/button";
import {
  User,
  DollarSign,
  MessagesSquare,
  PersonStanding,
  SquareMenu,
  ZoomIn,
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature17Props {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export const About = ({
                        heading = "About Me",
                        subheading = "Personal Profile",
                        features = [
                          {
                            title: "Age",
                            description:
                              "18 years old, born in 2007. I am a self-taught developer.",
                            icon: <User className="size-4 md:size-6"/>,
                          },
                          {
                            title: "My SPM Result",
                            description:
                              "• Sains Komputer: A-\n" +
                              "• Bahasa Inggeris: A-\n" +
                              "• Bahasa Melayu: B+\n" +
                              "• Pendidikan Islam: B\n" +
                              "• Sains: B\n" +
                              "• Sejarah: C+\n" +
                              "• Mathematics: C",
                            icon: <SquareMenu className="size-4 md:size-6"/>,
                          },
                          {
                            title: "Skills",
                            description:
                              "• Frontend: React, TypeScript, HTML5, CSS3, Tailwind CSS\n" +
                              "• Backend: Node.js, Express, RESTful APIs\n" +
                              "• Tools: Git, GitHub, VS Code, Figma\n" +
                              "• Other: Responsive design, UI/UX principles, Web accessibility",
                            icon: <ZoomIn className="size-4 md:size-6"/>,
                          },
                          {
                            title: "Education",
                            description:
                              "• Secondary School: SMK Abdullah Munshi (2020-2025)\n" +
                              "• Self-taught in web development through online courses and tutorials\n" +
                              "• Completed various certifications in React, JavaScript, and TypeScript\n" +
                              "• Currently pursuing further education in Computer Science",
                            icon: <PersonStanding className="size-4 md:size-6"/>,
                          },
                          {
                            title: "Experience",
                            description:
                              "• Freelance Web Developer (2022-Present)\n" +
                              "• Personal Projects: Developed multiple web applications using React and TypeScript\n" +
                              "• Open Source Contributor: Contributed to several open-source projects\n" +
                              "• Hackathon Participant: Participated in local coding competitions",
                            icon: <DollarSign className="size-4 md:size-6"/>,
                          },
                          {
                            title: "Contact",
                            description:
                              "• Email: m.afiqdanial2004@gmail.com\n" +
                              "• GitHub: github.com/developer\n" +
                              "• LinkedIn: linkedin.com/in/developer\n" +
                              "• Portfolio: developer-portfolio.com\n" +
                              "• Available for freelance work ",
                            icon: <MessagesSquare className="size-4 md:size-6"/>,
                          },
                        ],
                      }: Feature17Props) => {
  return (
    <section className="mt-5 mb-16 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex justify-start gap-3">
          <Link to={ "/" }>
            <Button className="shadow-sm transition-shadow hover:shadow flex items-center">
              Back to Home
            </Button>
          </Link>
          <Link to={ "/projects" }>
            <Button className="shadow-sm transition-shadow hover:shadow flex items-center">
              My Projects
            </Button>
          </Link>
        </div>
        <p className="mb-2 sm:mb-4 text-xs sm:text-sm text-muted-foreground md:pl-5">
          { subheading }
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium md:pl-5 lg:text-4xl">{ heading }</h2>

        <div className="mt-6 sm:mt-8 bg-accent/10 p-4 sm:p-6 rounded-lg md:pl-5">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I'm a passionate self-taught web developer with a focus on creating responsive, user-friendly web
            applications. With a strong foundation in modern web technologies and a keen eye for design, I strive to build
            applications that not only function flawlessly but also provide an exceptional user experience.
          </p>
        </div>

        <div className="mx-auto mt-10 grid gap-x-8 gap-y-8 sm:gap-x-12 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:mt-14 lg:gap-x-20">
          { features.map((feature, idx) => (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-lg bg-card p-4 sm:p-5 shadow-sm transition-all hover:shadow-md md:block"
                 key={ idx }>
              <span
                className="mb-2 sm:mb-0 md:mb-6 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground md:size-12">
                { feature.icon }
              </span>
              <div>
                <h3 className="font-medium mb-2 md:mb-3 text-lg md:text-xl">
                  { feature.title }
                </h3>
                <p className="text-sm text-muted-foreground md:text-base whitespace-pre-line">
                  { feature.description }
                </p>
              </div>
            </div>
          )) }
        </div>
      </div>

      <footer className="mt-16 sm:mt-20 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © { new Date().getFullYear() } Muhammad Afiq Danial. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Self-taught web developer passionate about creating exceptional user experiences.
              </p>
            </div>

            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-0">
              <a href="mailto:m.afiqdanial2004@gmail.com"
                 className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                <Mail className="size-4 sm:size-5"/>
              </a>
              <a href="https://github.com/developer" target="_blank" rel="noopener noreferrer"
                 className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                <Github className="size-4 sm:size-5"/>
              </a>
              <a href="https://linkedin.com/in/developer" target="_blank" rel="noopener noreferrer"
                 className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                <Linkedin className="size-4 sm:size-5"/>
              </a>
              <a href="https://developer-portfolio.com" target="_blank" rel="noopener noreferrer"
                 className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                <Globe className="size-4 sm:size-5"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
