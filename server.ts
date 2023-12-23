
import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from '@trpc/server/adapters/express'

const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({
    req, res

});

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
	const payload = await getPayloadClient({
		initOptions: {
			express: app,
			onInit: async (cms) => {
				cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
			},
		},
	});

    app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router: payload.router, createContext}))


    app.use((req ,res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        payload.logger.info('Next.js started')

        app.listen(PORT, () => {
            payload.logger.info(`Server started on port ${PORT}`)
        })
    }
    ).catch((e) => {
        payload.logger.error(e)
        process.exit(1)
    })
};

start();

// Path: routes/index.ts
