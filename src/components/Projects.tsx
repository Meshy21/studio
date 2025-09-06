import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Home Hub',
    description: 'An embedded system using ESP32 to control various home appliances via a mobile app. Features real-time sensor data monitoring and secure communication protocols.',
    image: 'https://picsum.photos/600/400',
    imageHint: 'smart home dashboard',
    tags: ['Embedded C++', 'ESP32', 'Flutter', 'Firebase', 'MQTT'],
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Campus Navigator Mobile App',
    description: 'A cross-platform mobile application that helps students navigate the university campus, find classrooms, and view event schedules. Built with a focus on performance and user experience.',
    image: 'https://picsum.photos/600/400',
    imageHint: 'mobile app map',
    tags: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    github: 'https://github.com',
    live: 'https://play.google.com',
  },
  {
    title: 'Portfolio Website',
    description: 'This very website, designed to showcase my skills and projects. Built with Next.js and Tailwind CSS for a modern, responsive, and performant experience. Includes an AI-powered design review feature.',
    image: 'https://picsum.photos/600/400',
    imageHint: 'web design code',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Genkit'],
    github: 'https://github.com',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are a few projects I've worked on. They showcase my ability to tackle problems across different domains, from hardware to mobile and web.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="mb-4 rounded-lg object-cover aspect-[3/2]"
                  data-ai-hint={project.imageHint}
                />
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex justify-end gap-2 mt-auto">
                  {project.github && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository for project">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild variant="default" size="icon">
                      <Link href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo of project">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
