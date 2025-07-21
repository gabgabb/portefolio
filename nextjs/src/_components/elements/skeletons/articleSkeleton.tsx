"use client";

import { Skeleton } from "@heroui/react";

const ArticleSkeleton = () => {
    return (
        <div className="font-bogart mx-auto w-full px-4 py-12">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
                <Skeleton className="h-5 w-20 rounded-md" />
                <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="1em"
                >
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
                <Skeleton className="h-5 w-24 rounded-md" />
                <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="1em"
                >
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
                <Skeleton className="h-5 w-32 rounded-md" />
            </div>
            <div className="mb-6 flex flex-col items-center space-y-4">
                <Skeleton className="h-10 w-3/4 rounded-md" /> {/* Titre */}
            </div>
            <Skeleton className="mx-auto mb-10 h-80 w-full max-w-3xl rounded-xl" />{" "}
            {/* Illustration */}
            <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-full rounded-md" />
                <Skeleton className="h-6 w-5/6 rounded-md" />
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-6 w-4/5 rounded-md" />
                <Skeleton className="h-6 w-full rounded-md" />
                <Skeleton className="h-6 w-2/3 rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mt-8">
                <Skeleton className="h-6 w-full rounded-md" />
                <Skeleton className="h-6 w-5/6 rounded-md" />
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-6 w-4/5 rounded-md" />
                <Skeleton className="h-6 w-full rounded-md" />
                <Skeleton className="h-6 w-2/3 rounded-md" />
            </div>
        </div>
    );
};

export default ArticleSkeleton;
