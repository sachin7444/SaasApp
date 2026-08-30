import {clerkMiddleware}  from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: [
        //Skip next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\.(?html?|css|js(?!on)|jpe?g|webp|png|gif|svf|ttf|woff2?|ico|csv|docx|xlsx?|zip|webmanifest|avif|mp4|webm|wav|mp3|m4a|aac|oga)$).*)",
        //Always run for API routes
        "/(api|trpc)(.*)",
    ],
};