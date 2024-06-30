import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function ProjectCard({ project }) {
    const { name, description, technologies, illustrations, createdAt } = project.attributes;
    const imageUrl = illustrations.data[0]?.attributes.formats.medium.url;

    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <small className="text-default-500">{new Date(createdAt).toLocaleDateString()}</small>
                <h4 className="font-bold text-large">{name}</h4>
                <p className="text-default-500">{description[0]?.children[0]?.text}</p>
                <div className="flex flex-wrap">
                    {technologies.data.map((tech) => (
                        <span key={tech.id} className="mr-2 mt-2 text-sm bg-gray-200 px-2 py-1 rounded">
              {tech.attributes.name}
            </span>
                    ))}
                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={name}
                    className="object-cover rounded-xl"
                    src={imageUrl}
                    width={270}
                />
            </CardBody>
        </Card>
    );
}
