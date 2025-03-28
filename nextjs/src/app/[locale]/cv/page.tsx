"use client";

import { Button } from "@heroui/react";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const Cv: React.FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [scale, setScale] = useState<number>(1.2); // Valeur par défaut

    const locale = useLocale();
    const pdfFile =
        locale === "fr" ? "/CV_Gabriel_FR.pdf" : "/CV_Gabriel_EN.pdf";
    const t = useTranslations("Cv");

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setLoading(false);
    }

    function nextPage(): void {
        if (pageNumber < (numPages || 1)) {
            setPageNumber((prev) => prev + 1);
        }
    }

    function prevPage(): void {
        if (pageNumber > 1) {
            setPageNumber((prev) => prev - 1);
        }
    }

    const downloadPdf = () => {
        saveAs(pdfFile, `CV_Gabriel_${locale.toUpperCase()}.pdf`);
    };

    // Ajuste le scale et détecte si l'écran est mobile
    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            setIsMobile(width < 1024);
            // Réduction progressive : plus la fenêtre est petite, plus le scale est réduit
            const newScale = Math.min(1.2, 1.2 * (width / 1200));
            setScale(newScale);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    // Extrait le contenu de la barre de navigation pour pouvoir le réutiliser
    const navigationContent = (
        <div className="flex items-center space-x-4 rounded-lg bg-[#1e293b] p-3 shadow-[0px_4px_20px_rgba(0,0,0,0.6)] transition-opacity duration-300">
            <Button
                onPress={prevPage}
                disabled={pageNumber <= 1}
                className={`rounded-md px-4 py-2 transition-all ${
                    pageNumber <= 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700"
                }`}
            >
                ◀
            </Button>
            <p className="w-max font-bold text-white">
                {pageNumber} {t("of")} {numPages}
            </p>
            <Button
                onPress={nextPage}
                disabled={pageNumber >= (numPages || 1)}
                className={`rounded-md px-4 py-2 transition-all ${
                    pageNumber >= (numPages || 1)
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700"
                }`}
            >
                ▶
            </Button>
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
                        key={scale}
                        className={`mt-4 overflow-hidden rounded-xl shadow-[0px_0px_40px_rgba(255,255,255,0.2)] ${
                            loading ? "hidden" : ""
                        }`}
                        file={pdfFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} scale={scale} />
                    </Document>
                </div>
                {/* Si l'écran n'est pas mobile et que le scale est supérieur à 1,
            on affiche la barre de navigation en mode overlay sur le PDF */}
                {!isMobile && scale > 1 && (
                    <div className="absolute bottom-[50px] left-1/2 z-20 -translate-x-1/2 opacity-0 group-hover:opacity-100">
                        {navigationContent}
                    </div>
                )}
            </div>
            {/* Si l'écran est mobile ou que le scale est inférieur ou égal à 1,
          on affiche la barre de navigation dans le flux normal, au-dessous du PDF */}
            {(isMobile || scale <= 1) && <>{navigationContent}</>}
            {/* Bouton de téléchargement */}
            <Button
                onPress={downloadPdf}
                startContent={<Download size={22} />}
                className="bg-purple hover:bg-purple/80 mt-6 flex !w-46 cursor-pointer items-center gap-2 rounded-lg px-6 py-2 text-lg font-bold text-white shadow-sm shadow-white/40 transition-all"
            >
                <span>{t("download")}</span>
            </Button>
        </div>
    );
};

export default Cv;
