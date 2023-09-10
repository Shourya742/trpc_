import { publicProcedure, router } from "./trpc";
import { z } from "zod";
const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});
const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    const title = opts.input.title;
    const description = opts.input.description;

    // will do db styff;
    return {
      id: "1",
    };
  }),
});

export type AppRouter = typeof appRouter;
