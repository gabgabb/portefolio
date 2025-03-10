"use client";

import React, { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { Presentation } from "@/_utils/types";
import { useLocale } from "next-intl";

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
        <section className="flex flex-col items-center gap-5 md:pt-14 sm:py-12 max-sm:py-10">
            <div className="flex lg:flex-row max-sm:flex-col-reverse sm:flex-col-reverse items-center justify-center gap-10 text-left">
                <div className="flex flex-col items-center justify-center gap-6 w-full max-sm:text-center sm:text-center lg:text-left">
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
                    className="rounded-full lg:w-80 sm:w-56 sm:h-56 md:w-56 md:h-56 max-sm:w-56 max-sm:h-56"
                />
            </div>
        </section>
    );
};

export default AboutMe;
