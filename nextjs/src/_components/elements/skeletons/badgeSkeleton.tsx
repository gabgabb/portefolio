"use client";

import { Skeleton } from "@heroui/react";

const BadgeSkeleton = () => {
    return (
        <div className="bg-blue-gray relative flex h-max items-center gap-2 rounded-md px-3 py-2 select-none max-sm:p-0">
            {/* Texte (optionnel selon deleteText logique) */}
            <Skeleton className="h-5 w-16 rounded max-sm:size-8" />
        </div>
    );
};

export default BadgeSkeleton;
