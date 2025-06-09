import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating scalable solutions and optimizing development workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">Full Stack Developer with strong expertise in backend development, skilled in building scalable APIs and databases. Experienced in DevOps and cloud technologies to streamline deployment and infrastructure management.</p>
            <p className="text-lg leading-relaxed">
              Based in Rajasthan, India, I combine technical excellence with a deep understanding 
              of modern development practices to create solutions that are not just functional, 
              but maintainable and efficient.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">BE - Computer Science Engineering</h4>
                  <p className="text-muted-foreground">Chandigarh University</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">Backend Developer Intern</h4>
                  <p className="text-muted-foreground">SwapSo</p>
                  <p className="text-sm text-muted-foreground">Jan 2025 - May 2025</p>
                  <p className="text-sm mt-2">
                    Focused on RESTful APIs and JWT authentication systems
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS", "Git", "CI/CD"].map(skill => <div key={skill} className="bg-muted rounded-lg p-3 text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {skill}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;