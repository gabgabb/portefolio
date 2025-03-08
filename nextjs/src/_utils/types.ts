interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        large: ImageFormat;
        medium: ImageFormat;
        small: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Technology {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: Image;
}

export interface Presentation {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    description1: string;
    description2: string;
    image: Image;
    localizations: any[];
}

interface Company {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: Image;
}

export interface ExperienceType {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    job: string;
    dateBegin: string;
    dateEnd: string;
    isMission: boolean;
    company: Company | null;
    localizations: any[]; // Ajoutez les localisations si nécessaire
}

export interface Project {
    id: number;
    documentId: string;
    name: string;
    isDisplay: boolean;
    url: string | null;
    shortDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    slug: string;
    technologies: Technology[];
    illustrations: Image[];
    localizations: any[];
}
