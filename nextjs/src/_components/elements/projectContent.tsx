import { Image } from "@heroui/react";
import DOMPurify from "dompurify";
import parse, {
    DOMNode,
    domToReact,
    Element as HtmlElement,
} from "html-react-parser";
import React from "react";

interface ProjectContentProps {
    content: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ content }) => {
    const cleanHtml = DOMPurify.sanitize(content);

    const options = {
        replace: (domNode: DOMNode) => {
            if (domNode.type === "tag") {
                const element = domNode as HtmlElement;
                console.log(element);
                switch (element.name) {
                    case "p": {
                        const textContent = element.children
                            .map((child) =>
                                child.type === "text" ? child.data.trim() : "",
                            )
                            .join("");

                        if (textContent === "" || textContent === "&nbsp;") {
                            return null;
                        }

                        const firstChild = element.children[0] as HtmlElement;
                        const lastChild =
                            element.children[element.children.length - 1];

                        if (
                            firstChild?.name === "strong" &&
                            lastChild?.type === "text" &&
                            lastChild.data.trim() === ":"
                        ) {
                            return (
                                <p className="text-gray-100">
                                    <strong className="block font-extrabold text-gray-50">
                                        {domToReact(
                                            firstChild.children as unknown as DOMNode[],
                                            options,
                                        )}{" "}
                                        :
                                    </strong>
                                </p>
                            );
                        }

                        return (
                            <p className="mb-4 text-gray-100">
                                {domToReact(
                                    element.children as unknown as DOMNode[],
                                    options,
                                )}
                            </p>
                        );
                    }
                    case "strong":
                        return (
                            <strong className="mt-4 inline font-extrabold text-gray-50">
                                {domToReact(
                                    element.children as unknown as DOMNode[],
                                    options,
                                )}
                            </strong>
                        );
                    case "li":
                        return (
                            <li className="ml-6 list-disc text-gray-100">
                                {domToReact(
                                    element.children as unknown as DOMNode[],
                                    options,
                                )}
                            </li>
                        );
                    case "a":
                        return (
                            <a
                                href={element.attribs.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-400 underline hover:text-pink-500"
                            >
                                {domToReact(
                                    element.children as unknown as DOMNode[],
                                    options,
                                )}
                            </a>
                        );
                    case "img":
                        return (
                            <div className="flex flex-col items-center">
                                <Image
                                    src={element.attribs.src}
                                    alt={element.attribs.alt || "Image"}
                                    className="rounded-xl"
                                />
                            </div>
                        );
                    case "figcaption":
                        return (
                            <figcaption className="mt-2 text-center font-semibold text-gray-400 italic">
                                {domToReact(
                                    element.children as unknown as DOMNode[],
                                    options,
                                )}
                            </figcaption>
                        );
                    case "figure":
                        return (
                            <figure className="flex flex-col items-center">
                                {domToReact(
                                    element.children as unknown as DOMNode[],
                                    options,
                                )}
                            </figure>
                        );
                }
            }
        },
    };

    return (
        <div className="mx-auto my-8 flex max-w-[750px] flex-col gap-2 text-justify">
            {parse(cleanHtml, options)}
        </div>
    );
};

export default ProjectContent;
