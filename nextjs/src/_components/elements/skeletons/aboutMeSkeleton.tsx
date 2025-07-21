import { Skeleton } from "@heroui/react";

const AboutMeSkeleton = () => {
    return (
        <section className="flex w-full flex-col items-center gap-5 max-sm:py-10 sm:py-12 md:pt-14">
            <div className="flex w-full gap-10 text-left max-sm:flex-col-reverse sm:flex-col-reverse lg:flex-row">
                <div className="flex w-full flex-col items-center justify-center gap-4 max-sm:text-center sm:text-center lg:text-left">
                    <Skeleton className="h-6 w-4/5 rounded" />
                    <Skeleton className="h-6 w-3/4 rounded" />
                    <Skeleton className="h-6 w-4/5 rounded" />
                    <Skeleton className="h-6 w-3/4 rounded" />
                </div>
                <Skeleton className="mx-auto h-56 w-56 rounded-full lg:w-80" />
            </div>
        </section>
    );
};

export default AboutMeSkeleton;
