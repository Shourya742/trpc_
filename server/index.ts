import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});
const appRouter = router({
  signup: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (opts) => {
      const username = opts.ctx.username;
      let email = opts.input.email;
      let password = opts.input.password;
      let token = "12334";
      return {
        token,
      };
    }),

  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    console.log(opts.ctx.username);
    return {
      id: "1xs",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader());
    return {
      username: "Hello",
    };
  },
});
server.listen(3000);

export type AppRouter = typeof appRouter;
