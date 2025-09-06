import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'LearnMate (Mobile-Based Android App)',
    description:
      'Learnmate is an Android-based mobile application designed to streamline remote learning and tutoring. It enables tutors and tutees to connect, communicate, and collaborate through an intuitive interface that supports session booking, in-app messaging, and video conferencing — all from a mobile device.',
    image: 'https://i.ibb.co/pB0sL53q/9da9f7d7-4f51-44e4-b003-c95f647bd3c1-1.jpg',
    imageHint: 'mobile learning',
    tags: ['Dart', 'Flutter', 'Flutterflow', 'Agora'],
    github: null,
    live: null,
  },
  {
    title: 'Wood Knot Detection App',
    description: 'Built an on-device real-time detection app for identifying wood knots using YOLOv8 to TFLite conversion and model optimization. Implemented an image-preprocessing pipeline and bounding-box rendering with confidence scores.',
    image: 'https://i.ibb.co/tw9ntCnW/fd56b489-d02d-4fa3-b3d7-24963ae7812d-1.png',
    imageHint: 'wood detection',
    tags: ['Flutter', 'Dart', 'TensorFlow Lite', 'YOLOv8'],
    github: null,
    live: null,
  },
  {
    title: 'Electrical Monitoring System',
    description: 'Designed and assembled a low-cost energy/illumination monitoring system. Wrote Arduino firmware to store sensor readings to SD for later analysis. Built a C# app to ingest and visualize time-series data.',
    image: 'https://i.ibb.co/QFCZfdC1/2c2a6709-4da4-4894-89ca-0e6044f0735d.jpg',
    imageHint: 'electrical monitoring',
    tags: ['Arduino', 'C/C++', 'C#', '.NET', 'CSV'],
    github: null,
    live: null,
  },
  {
    title: 'Capstone: Braille Haptic Reader',
    description: "Developed an OCR-to-Braille translation pipeline on Raspberry Pi. Trained a YOLOv5-based AI model for accurate text detection, achieving 97.82% OCR accuracy and enabling real-time translation for visually impaired users.",
    image: 'https://i.ibb.co/3mYZWPgY/image-2025-09-06-230239249.png',
    imageHint: 'braille reader device',
    tags: ['Python', 'Raspberry Pi', 'YOLOv5', 'OCR', 'AI'],
    github: null,
    live: null,
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