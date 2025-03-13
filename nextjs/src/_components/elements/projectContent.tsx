import DOMPurify from "dompurify";
import parse from "html-react-parser";

const ProjectContent = ({ content }: { content: string }) => {
    const cleanHtml = DOMPurify.sanitize(content);

    const transform = (node: any) => {
        if (node.type === "tag") {
            if (node.name === "p") {
                node.attribs.class = "mb-4 text-white";
            }
            if (node.name === "h2") {
                node.attribs.class = "text-2xl font-bold text-red-500 mt-6";
            }
            if (node.name === "ul") {
                node.attribs.class = "list-disc pl-5";
            }
        }
        return node;
    };

    return (
        <div className="mx-auto my-8 max-w-[750px]">
            {parse(cleanHtml, { transform })}
        </div>
    );
};

export default ProjectContent;
