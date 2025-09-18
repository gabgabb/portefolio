"use client";

import { Button } from "@heroui/react";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import CvSkeleton from "@/_components/elements/skeletons/cvSkeleton";
import { useLocale, useTranslations } from "next-intl";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;
}

const Cv: React.FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [scale, setScale] = useState<number>(1.2);
    const [pdfFile, setPdfFile] = useState<string>();

    const locale = useLocale();
    const t = useTranslations("Cv");

    useEffect(() => {
        const filePath =
            locale === "fr" ? "/CV_Gabriel_FR.pdf" : "/CV_Gabriel_EN.pdf";

        fetch(filePath)
            .then((res) => res.blob())
            .then((blob) => {
                setPdfFile(URL.createObjectURL(blob));
            });
    }, [locale]);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    function nextPage() {
        if (pageNumber < (numPages || 1)) {
            setPageNumber((prev) => prev + 1);
        }
    }

    function prevPage() {
        if (pageNumber > 1) {
            setPageNumber((prev) => prev - 1);
        }
    }

    const downloadPdf = () => {
        const fileName = `CV_Gabriel_${locale.toUpperCase()}.pdf`;
        saveAs(
            locale === "fr" ? "/CV_Gabriel_FR.pdf" : "/CV_Gabriel_EN.pdf",
            fileName,
        );
    };

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            setIsMobile(width < 1024);
            const newScale = Math.min(1.2, 1.2 * (width / 1200));
            setScale(newScale);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    const navigationContent = (
        <div className="flex items-center space-x-4 rounded-lg bg-[#1e293b] p-3 shadow-[0px_4px_20px_rgba(0,0,0,0.6)] transition-opacity duration-300 select-none">
            <div
                onClick={prevPage}
                className={`rounded-md px-4 py-2 transition-all hover:cursor-pointer ${
                    pageNumber <= 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700"
                }`}
            >
                ◀
            </div>
            <p className="w-max font-bold text-white">
                {pageNumber} {t("of")} {numPages}
            </p>
            <div
                onClick={nextPage}
                className={`rounded-md px-4 py-2 transition-all hover:cursor-pointer ${
                    pageNumber >= (numPages || 1)
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700"
                }`}
            >
                ▶
            </div>
        </div>
    );

    return (
        <div className="relative mt-8 flex flex-col items-center pb-16">
            <div className="group relative h-fit">
                <div
                    style={{ height: `${Math.min(950, 830 * scale)}px` }}
                    data-testid="cv"
                >
                    <Document
                        file={pdfFile}
                        className="overflow-hidden rounded-xl shadow-[0px_0px_40px_rgba(255,255,255,0.2)]"
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<CvSkeleton />}
                    >
                        <Page pageNumber={pageNumber} scale={scale} />
                    </Document>
                </div>

                {!isMobile && scale > 1 && (
                    <div className="absolute bottom-[50px] left-1/2 z-20 -translate-x-1/2 opacity-0 group-hover:opacity-100">
                        {navigationContent}
                    </div>
                )}
            </div>

            {(isMobile || scale <= 1) && <>{navigationContent}</>}

            <Button
                onPress={downloadPdf}
                startContent={<Download size={22} />}
                className="bg-purple hover:bg-purple/80 mt-6 flex w-46! cursor-pointer items-center gap-2 rounded-lg px-6 py-2 text-lg font-bold text-white shadow-sm shadow-white/40 transition-all"
            >
                <span>{t("download")}</span>
            </Button>
        </div>
    );
};

export default Cv;
