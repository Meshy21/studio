import { projects, Project } from '@/lib/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6">
            <Button asChild variant="ghost" size="icon">
                <Link href="/#projects">
                    <ArrowLeft />
                    <span className="sr-only">Back to projects</span>
                </Link>
            </Button>
            <div className="ml-4 flex items-center space-x-2">
                <Link href="/" className="font-headline font-bold sm:inline-block">
                Meshary's Portfolio
                </Link>
            </div>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-6">
        <article className="mx-auto max-w-4xl">
          <div className="space-y-4 mb-8">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
          
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="mb-8 rounded-lg object-cover w-full aspect-video"
            data-ai-hint={project.imageHint}
          />
          
          <div className="space-y-8">
            <div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter mb-2">About the Project</h2>
                <p className="text-muted-foreground text-lg">{project.longDescription}</p>
            </div>
            
            <div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter mb-2">Challenges</h2>
                <p className="text-muted-foreground text-lg">{project.challenges}</p>
            </div>

            <div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter mb-2">Learnings</h2>
                <p className="text-muted-foreground text-lg">{project.learnings}</p>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="font-headline text-3xl font-bold tracking-tighter mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((item, index) => (
                  <Image
                    key={index}
                    src={item.url}
                    alt={`${project.title} gallery image ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover aspect-[4/3]"
                    data-ai-hint={item.hint}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-12">
            {project.github && (
              <Button asChild variant="outline">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  View on GitHub
                </Link>
              </Button>
            )}
            {project.live && (
              <Button asChild>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
