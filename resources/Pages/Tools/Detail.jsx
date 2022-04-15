import { Link } from "@inertiajs/inertia-react";
import React from "react";

import { BsCameraVideoOff } from "react-icons/bs";

const Detail = ({ tool }) => {
    return (
        <section className="flex items-stretch justify-center gap-10">
            <div
                style={{ flex: 2 }}
                className="flex flex-col justify-between w-full px-16 py-10 shadow bg-gray-50 rounded-xl"
            >
                <div>
                    <div className="flex items-center justify-center mb-3 overflow-hidden bg-gray-100 rounded-full w-14 h-14">
                        {tool.icon ? (
                            <img
                                src={tool.icon}
                                alt={tool.name.toLowerCase()}
                                className="object-cover object-center w-full h-full"
                            />
                        ) : (
                            <small className="text-[10px]">
                                <span className="font-bold">tool</span>ytic.io
                            </small>
                        )}
                    </div>
                    <h1 className="text-xl font-bold">{tool.name}</h1>
                    <p>{tool.description}</p>
                </div>

                <div>
                    <h5 className="text-sm">
                        <span className="italic">Visit Website:</span>{" "}
                        <Link
                            href={tool.site_link}
                            className="text-blue-500 hover:underline"
                        >
                            {tool.site_link}
                        </Link>
                    </h5>
                </div>
            </div>
            <div className="w-full space-y-10" style={{ flex: 1.5 }}>
                <div>
                    <h2 className="mb-3 text-lg font-bold">Tags</h2>
                    <ul className="flex flex-wrap gap-5 rounded-xl">
                        {tool.tags.map((tag) => (
                            <li key={tag.id}>
                                <Link
                                    className="px-4 py-1 rounded-md shadow hover:bg-gray-100 bg-gray-50"
                                    href={`/tags/${tag.name}`}
                                >
                                    {tag.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-3 text-lg font-bold">Product Video</h2>

                    <div>
                        {tool.video_id ? (
                            <div className="overflow-hidden rounded-md">
                                <iframe
                                    className="w-full h-full aspect-video"
                                    src={`https://www.youtube.com/embed/O17OWyx08Cg/${tool.video_id}`}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center w-full h-full border-2 border-black rounded-md bg-gray-50 aspect-video">
                                <h4 className="flex flex-col items-center justify-center gap-3">
                                    <BsCameraVideoOff size={30} /> No Video
                                    Available
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
