import { Skeleton } from "@heroui/react";

const CvSkeleton = () => {
    return (
        <div className="relative mt-8 mb-16 flex flex-col items-center rounded-xl">
            <Skeleton className="h-[400px] w-[320px] rounded-lg sm:h-[640px] sm:w-[480px] md:h-[750px] md:w-[600px] lg:h-[830px] lg:w-[734px] xl:h-[950px] xl:w-[734px]" />
        </div>
    );
};

export default CvSkeleton;
