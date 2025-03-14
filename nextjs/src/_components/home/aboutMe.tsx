"use client";

import { Presentation } from "@/_utils/types";
import { Image } from "@heroui/react";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const AboutMe = () => {
    const [presentation, setPresentation] = useState<Presentation | null>(null);

    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const locale = useLocale();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/presentation?pLevel&locale=${locale}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    },
                );

                const json = await res.json();
                if (json.data) {
                    setPresentation(json.data);
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données :",
                    error,
                );
            }
        };
        fetchData();
    }, [locale, token]);

    if (!presentation) return <p>Chargement...</p>;

    const imageUrl = presentation.image
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${presentation.image.url}`
        : "/placeholder.jpg";

    return (
        <section className="flex flex-col items-center gap-5 max-sm:py-10 sm:py-12 md:pt-14">
            <div className="flex items-center justify-center gap-10 text-left max-sm:flex-col-reverse sm:flex-col-reverse lg:flex-row">
                <div className="flex w-full flex-col items-center justify-center gap-6 max-sm:text-center sm:text-center lg:text-left">
                    <p className="text-base sm:text-lg md:text-xl">
                        {presentation.description1}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl">
                        {presentation.description2}
                    </p>
                </div>
                {/* Image */}
                <Image
                    src={imageUrl}
                    alt="Image de présentation"
                    className="rounded-full max-sm:h-56 max-sm:w-56 sm:h-56 sm:w-56 md:h-56 md:w-56 lg:w-80"
                />
            </div>
        </section>
    );
};

export default AboutMe;
