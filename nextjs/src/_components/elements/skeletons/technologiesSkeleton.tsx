import { Skeleton } from "@heroui/react";

const TechnologiesSkeleton = () => {
    return (
        <div className="flex flex-col gap-2 lg:w-[55%]">
            <h2 className="text-3xl font-extrabold">Technologies</h2>
            <div className="bg-gray border-stroke rounded-xl border p-4 max-sm:max-h-[180px] max-sm:min-h-[250px] max-sm:overflow-y-auto md:min-h-[250px]">
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 15 }).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            className="h-10 w-[100px] rounded-md"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnologiesSkeleton;
