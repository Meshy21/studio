'use server';

import { z } from 'zod';
import { suggestPortfolioImprovements, SuggestPortfolioImprovementsInput } from '@/ai/flows/ai-suggest-portfolio-improvements';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  // In a real application, you would integrate an email service here.
  // For this example, we'll simulate a successful submission.
  console.log('New contact form submission:');
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
    errors: {},
  };
}


export async function getAiSuggestions() {
  try {
    const portfolioDescription = `
      A modern, single-page portfolio for a Computer Engineering graduate.
      - Layout: A vertical scrolling single page with sections for Hero, Projects, Skills, and Contact.
      - Header: Sticky header with navigation.
      - Hero Section: Large introductory area with a professional photo, name, title, and a brief bio.
      - Projects Section: A 3-column grid of cards, each with an image, title, description, tags, and links.
      - Skills Section: A grid of cards highlighting technical skills with icons.
      - Contact Section: A simple form to send a message.
      - Color Scheme: Uses Midnight Blue (#2C3E50) as the primary text color, a Light Gray (#F4F4F4) background, and Teal (#1ABC9C) as an accent.
      - Typography: 'Space Grotesk' for headlines and 'Inter' for body text.
    `;

    const input: SuggestPortfolioImprovementsInput = {
      portfolioDescription,
      portfolioUrl: 'https://meshary-magnum-opus.example.com', // Using a placeholder URL
    };

    const suggestions = await suggestPortfolioImprovements(input);
    return { success: true, data: suggestions };
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return { success: false, error: 'Failed to get AI suggestions. The AI service may be temporarily unavailable. Please try again later.' };
  }
}
