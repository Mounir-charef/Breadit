import z from 'zod';

export const subredditSchema = z.object({
    name: z.string().min(3).max(21),
});

export const subredditSubsriptionSchema = z.object({
    subredditId: z.string(),
})

export type Subreddit = z.infer<typeof subredditSchema>;
export type SubredditSubscription = z.infer<typeof subredditSubsriptionSchema>;