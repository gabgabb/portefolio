"use client";

import CvSkeleton from "@/_components/elements/skeletons/cvSkeleton";
import dynamic from "next/dynamic";

const Cv = dynamic(() => import("@/_components/pages/cv"), {
    ssr: false,
    loading: () => <CvSkeleton />,
});

export default function CvPage() {
    return <Cv />;
}
