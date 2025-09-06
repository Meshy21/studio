'use client';

import { useState } from 'react';
import { getAiSuggestions } from '@/app/actions';
import type { SuggestPortfolioImprovementsOutput } from '@/ai/flows/ai-suggest-portfolio-improvements';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Bot, Lightbulb, Code, AlertTriangle } from 'lucide-react';

interface AiReviewPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AiReviewPanel({ open, onOpenChange }: AiReviewPanelProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<SuggestPortfolioImprovementsOutput | null>(null);

  const handleAnalysis = async () => {
    setLoading(true);
    setError(null);
    setSuggestions(null);
    const result = await getAiSuggestions();
    if (result.success) {
      setSuggestions(result.data!);
    } else {
      setError(result.error!);
    }
    setLoading(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <ScrollArea className="h-full pr-6">
          <SheetHeader className="mb-6">
            <SheetTitle className="font-headline flex items-center gap-2 text-xl">
              <Bot /> AI Style Guide Review
            </SheetTitle>
            <SheetDescription>
              Use our AI agent to review this portfolio's design and get suggestions for improvement based on modern best practices.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6 border-y">
            <Button onClick={handleAnalysis} disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {loading ? 'Analyzing...' : 'Analyze Portfolio'}
            </Button>
          </div>
          <div className="pt-6">
            {loading && (
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <div className="pt-4 space-y-2">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Analysis Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {suggestions && (
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="font-headline text-lg font-semibold flex items-center gap-2 mb-2">
                    <Lightbulb className="text-accent" />
                    Suggested Improvements
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {suggestions.improvements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold flex items-center gap-2 mb-2">
                    <Bot className="text-accent" />
                    Reasoning
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">{suggestions.reasoning}</p>
                </div>
                 <div>
                  <h3 className="font-headline text-lg font-semibold flex items-center gap-2 mb-2">
                      <Code className="text-accent" />
                      Implementation Guide
                  </h3>
                  <p className="text-muted-foreground">
                      To implement these changes, you can start by editing the following files in your code editor:
                  </p>
                  <div className="mt-2 space-y-2">
                      <code className="text-sm bg-muted rounded p-2 block w-full">src/app/page.tsx</code>
                      <code className="text-sm bg-muted rounded p-2 block w-full">src/components/Hero.tsx</code>
                      <code className="text-sm bg-muted rounded p-2 block w-full">src/app/globals.css</code>
                  </div>
                 </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
