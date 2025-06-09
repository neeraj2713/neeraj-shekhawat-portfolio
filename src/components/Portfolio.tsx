
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Comrade",
      description: "Scalable SaaS platform for AI content generation including text, code, images, videos, and music. Features Stripe payment integration and optimized database operations.",
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Stripe", "OpenAI"],
      github: "#",
      demo: "#",
      impact: "Scalable SaaS solution with integrated payments"
    },
    {
      title: "MEME-Stream",
      description: "Meme generation platform with 100+ templates, Google OAuth authentication, and ImageKit CDN for optimized image delivery.",
      technologies: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Google OAuth", "ImageKit"],
      github: "#",
      demo: "#",
      impact: "100+ meme templates with optimized delivery"
    },
    {
      title: "Medi-Meet",
      description: "Full-stack doctor appointment application featuring video calls, authentication, and responsive UI for seamless healthcare interactions.",
      technologies: ["React", "Next.js", "Prisma", "Tailwind CSS", "Vonage", "Clerk"],
      github: "#",
      demo: "#",
      impact: "Complete healthcare appointment solution"
    },
    {
      title: "Music Academy",
      description: "Built a responsive web application with search functionality, improving course discovery by 30%. Leveraged modern frameworks to deliver a scalable, visually appealing UI with modular code.",
      technologies: ["Next.js", "Acertinity UI", "Tailwind CSS"],
      github: "#",
      demo: "#",
      impact: "30% improvement in course discovery"
    },
    {
      title: "Medium-2.0",
      description: "Developed a blogging website with user authentication, profile management, and blog creation. Engineered a scalable system supporting 1000+ blog posts with optimized performance using Cloudflare.",
      technologies: ["React", "TypeScript", "Cloudflare", "Hono"],
      github: "#",
      demo: "#",
      impact: "Supports 1000+ blog posts with CDN optimization"
    },
    {
      title: "True Feedback",
      description: "Anonymous messaging platform with scalable UI using Next.js, achieving 90% Lighthouse performance score. Features secure OTP-based authentication with 99% success rate.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "Zod"],
      github: "#",
      demo: "#",
      impact: "90% Lighthouse score with 99% auth success rate"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary mb-3">
                    Impact: {project.impact}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2">
                      <ArrowUp className="h-4 w-4 rotate-45" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
