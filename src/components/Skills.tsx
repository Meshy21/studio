import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Smartphone, Cpu, Network, Database, Webhook } from 'lucide-react';

const skills = [
  { name: 'Web Development', icon: <CodeXml className="h-10 w-10 text-accent" />, description: 'React, Next.js, Node.js, TypeScript' },
  { name: 'Mobile Development', icon: <Smartphone className="h-10 w-10 text-accent" />, description: 'Flutter, Dart, Firebase' },
  { name: 'Embedded Systems', icon: <Cpu className="h-10 w-10 text-accent" />, description: 'C++, ESP32, Arduino, IoT' },
  { name: 'Networking', icon: <Network className="h-10 w-10 text-accent" />, description: 'TCP/IP, Sockets, MQTT' },
  { name: 'Databases', icon: <Database className="h-10 w-10 text-accent" />, description: 'SQL, NoSQL, Firebase Realtime DB' },
  { name: 'APIs & Services', icon: <Webhook className="h-10 w-10 text-accent" />, description: 'REST APIs, CI/CD, Genkit' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have a diverse skill set that spans across software and hardware, allowing me to build comprehensive solutions from the ground up.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col text-center">
              <CardHeader className="flex flex-col items-center gap-4 pb-4">
                {skill.icon}
                <CardTitle className="font-headline">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
