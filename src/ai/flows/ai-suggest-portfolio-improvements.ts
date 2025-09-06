'use server';

/**
 * @fileOverview An AI agent that reviews a portfolio and suggests design improvements.
 *
 * - suggestPortfolioImprovements - A function that suggests improvements to a portfolio design.
 * - SuggestPortfolioImprovementsInput - The input type for the suggestPortfolioImprovements function.
 * - SuggestPortfolioImprovementsOutput - The return type for the suggestPortfolioImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioImprovementsInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('A detailed description of the portfolio, including its layout, design elements, and target audience.'),
  portfolioUrl: z
    .string()
    .describe('The URL of the portfolio to be reviewed.'),
});
export type SuggestPortfolioImprovementsInput = z.infer<
  typeof SuggestPortfolioImprovementsInputSchema
>;

const SuggestPortfolioImprovementsOutputSchema = z.object({
  improvements: z
    .array(z.string())
    .describe('A list of suggested improvements for the portfolio design.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the suggested improvements.'),
});
export type SuggestPortfolioImprovementsOutput = z.infer<
  typeof SuggestPortfolioImprovementsOutputSchema
>;

export async function suggestPortfolioImprovements(
  input: SuggestPortfolioImprovementsInput
): Promise<SuggestPortfolioImprovementsOutput> {
  return suggestPortfolioImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPortfolioImprovementsPrompt',
  input: {schema: SuggestPortfolioImprovementsInputSchema},
  output: {schema: SuggestPortfolioImprovementsOutputSchema},
  prompt: `You are an expert web design consultant specializing in portfolio websites.

You will review the provided portfolio description and URL, then provide a list of specific, actionable improvements that would make it more visually appealing and effective for hiring managers, based on current design trends and best practices. Provide detailed reasoning for each suggestion.

Portfolio Description: {{{portfolioDescription}}}
Portfolio URL: {{{portfolioUrl}}}

Ensure the suggestions are tailored to modern web design principles, focusing on aspects like user experience, visual hierarchy, responsiveness, and overall aesthetic appeal.
`,
});

const suggestPortfolioImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioImprovementsFlow',
    inputSchema: SuggestPortfolioImprovementsInputSchema,
    outputSchema: SuggestPortfolioImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
