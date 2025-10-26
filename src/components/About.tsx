import { Code2, Database, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java & Spring Boot', level: 90 },
    { name: 'React & JavaScript', level: 90 },
    { name: 'Database Design', level: 80 },
    { name: 'System Architecture', level: 75 },
  ];

  const achievements = [
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: 'Full-Stack Development',
      description: 'Proficient in Java, Spring Boot, React, and modern web technologies',
    },
    {
      icon: <Database className="text-accent" size={24} />,
      title: 'Database Expertise',
      description: 'Experience with MySQL, MongoDB, and database optimization',
    },
    {
      icon: <Globe className="text-accent" size={24} />,
      title: 'API Integration',
      description: 'Built applications with Google Gemini API and RESTful services',
    },
    {
      icon: <Lightbulb className="text-accent" size={24} />,
      title: 'Problem Solving',
      description: 'NPTEL certified in Programming, Data Structures & Algorithms',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Electronics Engineer turned Full-Stack Developer with a passion for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Bridging Hardware Knowledge with Software Innovation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a recent Electronics and Communication Engineering graduate with a 7.5 CGPA, 
              I've channeled my analytical mindset and problem-solving skills into full-stack development. 
              My journey from understanding circuit designs to architecting web applications has given me 
              a unique perspective on building robust, scalable systems.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Currently honing my skills as a Java Development Intern at TAP Academy, I specialize in 
              Java, Spring Boot, React, and modern database technologies. I'm passionate about creating 
              applications that not only work flawlessly but also provide exceptional user experiences.
            </p>

            {/* Skills Progress */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="animate-slide-up">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="portfolio-card rounded-xl p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;