import { appRouter } from "./index";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
	auth: authRouter,
});

export type appRouter = typeof appRouter;
