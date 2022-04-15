import { Link } from "@inertiajs/inertia-react";
import React from "react";

const CardTool = ({ title, description, icon, slug, tags }) => {
    return (
        <Link
            href={`/tools/${slug}`}
            className="flex flex-col items-start justify-between w-full p-5 transition duration-300 rounded-md shadow cursor-pointer group hover:bg-blue-50 bg-gray-50"
        >
            <div>
                <div className="flex items-center justify-center mb-5 overflow-hidden transition duration-300 bg-gray-100 rounded-full group-hover:bg-blue-100 w-14 h-14">
                    {icon ? (
                        <img
                            src={icon}
                            alt={title.toLowerCase()}
                            className="object-cover object-center w-full h-full"
                        />
                    ) : (
                        <small className="text-[10px]">
                            <span className="font-bold">tool</span>ytic.io
                        </small>
                    )}
                </div>
                <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-sm">{description}</p>
                </div>
            </div>

            {tags && (
                <div className="flex flex-wrap items-center justify-start gap-5 mt-5">
                    <p className="px-2 py-1 text-xs transition duration-300 bg-gray-100 rounded group-hover:bg-blue-100">
                        {tags.map((tag, idx) =>
                            idx === tags.length - 1 ? tag.name : tag.name + ", "
                        )}
                    </p>
                </div>
            )}
        </Link>
    );
};

export default CardTool;
