import { Button } from "@/components/ui/button";
import {
  Github,
  Globe,
  Code,
  ExternalLink,
  Laptop,
  Layout,
  Smartphone,
  Server,
  Database,
  Braces,
  Mail,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  icon: React.ReactNode;
}

interface ProjectsPageProps {
  heading?: string;
  subheading?: string;
  projects?: Project[];
}

export const Projects = ({
  heading = "My Projects",
  subheading = "Portfolio Showcase",
  projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, modern design with smooth animations and mobile-friendly layout.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "https://i.imgur.com/JWjuFxh.jpeg",
      githubLink: "https://github.com/developer/portfolio",
      liveLink: "https://developer-portfolio.com",
      icon: <Layout className="size-4 md:size-6" />,
    },
    {
      title: "E-commerce Dashboard",
      description: "An admin dashboard for e-commerce platforms with analytics, inventory management, and order processing features. Built with React and includes dark/light mode toggle.",
      technologies: ["React", "Redux", "Chart.js", "Material UI"],
      image: "https://i.imgur.com/8kNDXpY.jpeg",
      githubLink: "https://github.com/developer/ecommerce-dashboard",
      icon: <Laptop className="size-4 md:size-6" />,
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather data and forecasts for any location. Features include current conditions, 5-day forecast, and location search.",
      technologies: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
      image: "https://i.imgur.com/mN0tQqY.jpeg",
      liveLink: "https://weather-app-demo.com",
      icon: <Smartphone className="size-4 md:size-6" />,
    },
    {
      title: "Task Management API",
      description: "A RESTful API for task management applications. Includes user authentication, task CRUD operations, and task categorization features.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "https://i.imgur.com/YtH3M6Y.jpeg",
      githubLink: "https://github.com/developer/task-api",
      icon: <Server className="size-4 md:size-6" />,
    },
    {
      title: "Database Migration Tool",
      description: "A utility for migrating data between different database systems. Supports MySQL, PostgreSQL, and MongoDB with data transformation capabilities.",
      technologies: ["Python", "SQLAlchemy", "PyMongo", "Pandas"],
      image: "https://i.imgur.com/3K9fFxd.jpeg",
      githubLink: "https://github.com/developer/db-migrator",
      icon: <Database className="size-4 md:size-6" />,
    },
    {
      title: "Code Snippet Library",
      description: "A web application for storing and sharing code snippets. Features syntax highlighting, tagging, and search functionality.",
      technologies: ["Vue.js", "Firebase", "Highlight.js", "Tailwind CSS"],
      image: "https://i.imgur.com/QNvxIUx.jpeg",
      liveLink: "https://code-snippets-library.com",
      githubLink: "https://github.com/developer/code-snippets",
      icon: <Braces className="size-4 md:size-6" />,
    },
  ],
}: ProjectsPageProps) => {
  return (
    <section className="mt-5 mb-16 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex justify-start gap-3">
          <Link to={"/"}>
            <Button className="shadow-sm transition-shadow hover:shadow flex items-center">
              Back to Home
            </Button>
          </Link>
          <Link to={"/about"}>
            <Button className="shadow-sm transition-shadow hover:shadow flex items-center">
              About Me
            </Button>
          </Link>
        </div>
        <p className="mb-2 sm:mb-4 text-xs sm:text-sm text-muted-foreground md:pl-5">
          {subheading}
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>

        <div className="mt-6 sm:mt-8 bg-accent/10 p-4 sm:p-6 rounded-lg md:pl-5">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Here are some of the projects I've worked on. Each project represents my skills, 
            problem-solving abilities, and passion for creating useful applications. Feel free 
            to explore the live demos or check out the code repositories.
          </p>
        </div>

        <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-14">
          {projects.map((project, idx) => (
            <div 
              className="flex flex-col rounded-lg bg-card p-5 shadow-sm transition-all hover:shadow-md h-full" 
              key={idx}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  {project.icon}
                </span>
                <div className="flex space-x-2">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="size-4" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <Globe className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-medium mb-2 text-lg md:text-xl">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground md:text-base mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto">
                <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="inline-flex items-center rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-16 sm:mt-20 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Muhammad Afiq Danial. All rights reserved.
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
