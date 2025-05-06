import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

export const Home = () => {
  return (
    <div style={ {width: "100%"} }>
      <section className="overflow-hidden py-32">
        <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
          <img
            alt="background"
            src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
            className="h-screen opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
          />
        </div>
        <div className="relative z-10 ">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
                <img
                  src="https://i.imgur.com/LRgOJqC.jpeg"
                  alt="logo"
                  className="rounded-full  h-50 w-50 object-cover"
                />
              </div>
              <div>
                <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                  Muhammad Afiq Danial{ " " }
                </h1>
                <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                  I'm passionate about how technology shapes the world and brings ideas to life.
                </p>
              </div>
              <div className="mt-6 flex justify-center gap-3">
                <Link to={"/about"}>
                <Button className="shadow-sm transition-shadow hover:shadow">
                  About Myself
                </Button>
                </Link>
                <Link to={"/projects"}>
                <Button className="shadow-sm transition-shadow hover:shadow">
                  My Projects
                </Button>
                </Link>
                <Link to={"https://github.com/00ZenDaniel"}
                target="_blank">
                <Button variant="outline" className="group">
                  My Github{ " " }
                  <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5"/>
                </Button>
                </Link>
              </div>
              <div className="mt-20 flex flex-col items-center gap-5">
                <p className="font-medium text-muted-foreground lg:text-left">
                  Technologies I have experimented with:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="https://ui.shadcn.com/"
                    target="_blank"
                    className={ cn(
                      buttonVariants({variant: "outline"}),
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    ) }
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcn-ui-icon.svg"
                      alt="shadcn/ui logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </Link>
                  <Link
                    to={ "https://www.typescriptlang.org/" }
                    target={ "_blank" }
                    className={ cn(
                      buttonVariants({variant: "outline"}),
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    ) }
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/typescript-icon.svg"
                      alt="TypeScript logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </Link>

                  <Link
                    to={ "https://react.dev/" }
                    target={ "_blank" }
                    className={ cn(
                      buttonVariants({variant: "outline"}),
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    ) }
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/react-icon.svg"
                      alt="React logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </Link>
                  <Link
                    to={ "https://tailwindcss.com/" }
                    target={ "_blank" }
                    className={ cn(
                      buttonVariants({variant: "outline"}),
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    ) }
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/tailwind-icon.svg"
                      alt="Tailwind CSS logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </Link>
                  <Link
                    to={ "https://go.dev/" }
                    target={ "_blank" }
                    className={ cn(
                      buttonVariants({variant: "outline"}),
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    ) }
                  >
                    <img
                      src="https://i.imgur.com/lZraIZT.png"
                      alt="Go Lang"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </Link>
                  <Link
                    to={ "https://vercel.com/" }
                    target={ "_blank" }
                    className={ cn(
                      buttonVariants({variant: "outline"}),
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    ) }
                  >
                    <img
                      src="https://i.imgur.com/v2IMTCg.png"
                      alt="Tailwind CSS logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
