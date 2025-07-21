"use client";

import BadgeSkeleton from "@/_components/elements/skeletons/badgeSkeleton";
import { Skeleton } from "@heroui/react";
import { useTranslations } from "next-intl";

const ProjectsSkeleton = () => {
    const t = useTranslations("Cards");

    return (
        <section
            id="projects"
            className="mt-10 flex w-full flex-col gap-2 pb-10"
        >
            <h2 className="text-3xl font-extrabold text-white">
                {t("projects")}
            </h2>
            <div className="flex flex-col gap-6">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl">
                        {/* Illustration */}
                        <Skeleton className="border-stroke h-[180px] w-full rounded-t-2xl border-x-2 border-t-2 sm:h-[250px] lg:h-[320px]" />

                        {/* Contenu (titre, badges, bouton) */}
                        <div className="bg-gray border-stroke flex flex-col gap-4 rounded-b-2xl border-2 px-6 py-4">
                            {/* Titre */}
                            <Skeleton className="h-6 w-1/2 rounded" />

                            {/* Badges */}
                            <div className="flex gap-3">
                                {[...Array(5)].map((_, i) => (
                                    <BadgeSkeleton key={i} />
                                ))}
                            </div>

                            {/* Bouton */}
                            <Skeleton className="mx-auto mt-2 h-12 w-1/2 rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSkeleton;
