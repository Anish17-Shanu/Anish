import { Button } from "button";
import { ArrowDown } from "lucide-react";
import TypeWriter from "Typewriter";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 min-h-[1.2em]">
              <TypeWriter 
                text="Digital Creations That Inspire"
                speed={80}
                delay={500}
                className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Web Developer • AI Engineer • Data Science Learner
            </p>
            <Button
              size="lg"
              className="group hero-gradient text-white border-0 hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My World
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E16AQFiQMlmyhlrbA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737440087939?e=1756339200&v=beta&t=Bn-8pMOQxWwYvUeuHky77IrbV3ChKH9g4GxXe818BaA"
                  alt="Digital workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;