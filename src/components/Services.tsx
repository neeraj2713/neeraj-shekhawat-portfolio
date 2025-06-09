
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Next.js, and TypeScript with focus on user experience and performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions with RESTful APIs, database optimization, and scalable architecture design.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamlined deployment pipelines, containerization, and automated testing to ensure reliable software delivery.",
      technologies: ["Docker", "Git", "CI/CD", "Automation"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Cloud-native solutions leveraging AWS and other platforms for scalable, reliable, and cost-effective deployments.",
      technologies: ["AWS", "Cloud Services", "Scalability", "Security"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end application development from concept to deployment, ensuring seamless integration across all layers.",
      technologies: ["Full Stack", "API Integration", "Database Design", "Testing"]
    },
    {
      title: "React Native Development",
      description: "Cross-platform mobile applications that deliver native performance with shared codebase efficiency.",
      technologies: ["React Native", "Mobile Development", "Cross-platform", "Native APIs"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
