"use client";

import React, { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { Presentation } from "@/_utils/types";

const AboutMe = () => {
    const [presentation, setPresentation] = useState<Presentation | null>(null);

    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/presentation?pLevel`,
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
    }, [token]);

    if (!presentation) return <p>Chargement...</p>;

    const imageUrl = presentation.image
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${presentation.image.url}`
        : "/placeholder.jpg";

    return (
        <section className="flex flex-col items-center gap-5 md:py-20 sm:py-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 text-left">
                <div className="flex flex-col items-center justify-center gap-6 w-full">
                    <p className="text-base sm:text-lg md:text-xl text-center md:text-left">
                        {presentation.description1}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-center md:text-left">
                        {presentation.description2}
                    </p>
                </div>
                {/* Image */}
                <Image
                    src={imageUrl}
                    alt="Image de présentation"
                    className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-[300px] md:h-[217px]"
                />
            </div>
        </section>
    );
};

export default AboutMe;
