
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Code Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 text-sm font-mono text-muted-foreground transform rotate-12">
          &lt;html&gt;<br />
          &nbsp;&nbsp;&lt;body&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
        </div>
        <div className="absolute top-40 right-20 text-sm font-mono text-muted-foreground transform -rotate-12">
          function deploy() {`{`}<br />
          &nbsp;&nbsp;return 'success';<br />
          {`}`}
        </div>
        <div className="absolute bottom-20 left-20 text-sm font-mono text-muted-foreground transform rotate-6">
          const backend = () =&gt; {`{`}<br />
          &nbsp;&nbsp;console.log('API ready');<br />
          {`}`};
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="https://i.ibb.co/vGshMSh/profile.jpg"
                alt="Neeraj Shekhawat"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Neeraj Shekhawat
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Results-oriented Full Stack Developer specializing in building robust backend systems, 
            optimizing CI/CD pipelines, and leveraging cloud platforms for deployment and management. 
            Based in Rajasthan, India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for work</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
