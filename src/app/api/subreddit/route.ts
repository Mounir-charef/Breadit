import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { subredditSchema } from "@/lib/validators/subreddit";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const session = await getAuthSession();
        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }
        const body = await req.json();
        const { name } = subredditSchema.parse(body);

        // Check if subreddit exists
        const subreddit = await db.subreddit.findFirst({
            where: {
                name
            }
        });

        if (subreddit) {
            return new Response('Subreddit already exists', { status: 409 })
        }

        // Create subreddit and associate with user
        const newSubreddit = await db.subreddit.create({
            data: {
                name,
                creatorId: session.user.id
            }
        });

        // create subreddit membership
        await db.subscription.create({
            data: {
                userId: session.user.id,
                subredditId: newSubreddit.id
            }
        });

        return new Response(name, { status: 200 })

        
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(error.message, { status: 422 })
        } else {
            return new Response('Could not create subreddit', { status: 500 })
        }
        
    }
}