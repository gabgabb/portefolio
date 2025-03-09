import createMiddleware from "next-intl/middleware";
import { routing } from "../next-intl.config";

export default createMiddleware(routing);

export const config = {
    matcher: ["/", "/(fr|en)/:path*"], // At this line, define into the matcher all the availables language you have defined into routing.ts
};
