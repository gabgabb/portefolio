import React from "react";
import Badge from "@/_components/elements/badge";

export const Technologies: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 w-[55%]">
            <h2 className="font-extrabold text-3xl">Technologies</h2>
            <div className="h-[220px] rounded-xl bg-gray border border-stroke p-4">
                <div className="h-max flex flex-wrap gap-2">
                    {[...Array(10)].map((_, index) => (
                        <Badge
                            key={index}
                            image={"/react.png"}
                            title={"ReactJS"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
