/** @format */

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
	collections: [],
	routes: {
		admin: "/sell",
	},
	admin: {
		bundler: webpackBundler(),
		meta: {
			titleSuffix: "- DynHR",
			favicon: "/favicon.ico",
			ogImage: "/thumbnail.jpg",
		},
	},

	editor: slateEditor({}),
	db: mongooseAdapter({
		url: process.env.MONGODB_URL!,
	}),
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	}
});
