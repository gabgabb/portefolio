export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    attributes: {
        name: string;
        shortDescription: string;
        technologies: {
            data: {
                id: string;
                attributes: {
                    name: string;
                    logo: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                };
            }[];
        };
        illustrations: {
            data: {
                attributes: {
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }[];
        };
        createdAt: string;
    };
}