'use server';

import { z } from 'zod';

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
