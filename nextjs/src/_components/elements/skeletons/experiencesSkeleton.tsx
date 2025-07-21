import { Skeleton } from "@heroui/react";

const ExperiencesSkeleton = () => {
    return (
        <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-3xl font-extrabold">Experiences</h2>
            <div className="bg-gray border-stroke flex flex-col gap-3 rounded-xl border p-4 md:min-h-[250px]">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="flex h-20 items-center justify-between gap-4 border-b border-white/20 pb-4 last:border-none last:pb-0"
                    >
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="flex flex-col gap-1">
                                <Skeleton className="h-4 w-32 rounded" />
                                <Skeleton className="h-3 w-24 rounded" />
                            </div>
                        </div>
                        <Skeleton className="h-4 w-24 rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesSkeleton;
