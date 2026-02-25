import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Smartphone, Cpu, BrainCircuit, Database, GitBranch, Server } from 'lucide-react';

const skills = [
  { name: 'Programming Languages', icon: <CodeXml className="h-10 w-10 text-accent" />, description: 'JavaScript, TypeScript, PHP, Python, C/C++, C#/.NET, Dart' },
  { name: 'Mobile Development', icon: <Smartphone className="h-10 w-10 text-accent" />, description: 'Flutter, Dart, Android Native (basics)' },
  { name: 'AI & Machine Learning', icon: <BrainCircuit className="h-10 w-10 text-accent" />, description: 'TensorFlow Lite, YOLOv5, YOLOv8' },
  { name: 'Embedded Systems', icon: <Cpu className="h-10 w-10 text-accent" />, description: 'Arduino, Raspberry Pi, ESP32, IoT' },
  { name: 'Databases', icon: <Database className="h-10 w-10 text-accent" />, description: 'Supabase, PostgreSQL, SQL' },
  { name: 'DevOps & Tools', icon: <GitBranch className="h-10 w-10 text-accent" />, description: 'Git/GitHub, AWS (basics), Firebase' },
  { name: 'System Administration', icon: <Server className="h-10 w-10 text-accent" />, description: 'Windows Server & Linux Administration' },
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
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
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
