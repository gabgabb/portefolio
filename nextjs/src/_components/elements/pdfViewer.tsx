"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

type PdfViewerProps = {
    file: string;
    scale: number;
    pageNumber: number;
    onLoadSuccessAction: (args: { numPages: number }) => void;
};

export default function PdfViewer({
    file,
    scale,
    pageNumber,
    onLoadSuccessAction,
}: PdfViewerProps) {
    return (
        <Document
            file={file}
            onLoadSuccess={onLoadSuccessAction}
            className={`mt-4 overflow-hidden rounded-xl shadow-[0px_0px_40px_rgba(255,255,255,0.2)]`}
        >
            <Page pageNumber={pageNumber} scale={scale} />
        </Document>
    );
}
