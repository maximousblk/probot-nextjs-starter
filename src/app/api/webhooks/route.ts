import { createNodeMiddleware, createProbot } from "probot";
import app from "@/bot";

const handler = createNodeMiddleware(app, {
  probot: createProbot(),
  webhooksPath: "/api/webhooks",
});

export { handler as GET, handler as POST };
