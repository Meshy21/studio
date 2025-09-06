'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { message: '', errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-xl space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hello? Drop me a line.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form ref={formRef} action={dispatch}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required aria-describedby="name-error" />
                    <p id="name-error" aria-live="polite" className="text-sm text-destructive">
                      {state.errors?.name}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required aria-describedby="email-error" />
                     <p id="email-error" aria-live="polite" className="text-sm text-destructive">
                      {state.errors?.email}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[140px]" aria-describedby="message-error" />
                     <p id="message-error" aria-live="polite" className="text-sm text-destructive">
                      {state.errors?.message}
                    </p>
                  </div>
                  <SubmitButton />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
