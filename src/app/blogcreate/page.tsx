"use client";

import { useState } from "react";

interface ImageFile {
    name: string;
    file: File;
}

export default function BlogCreation() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [images, setImages] = useState<ImageFile[]>([]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map((file) => ({
                name: file.name,
                file: file,
            }));
            setImages((prevImages) => [...prevImages, ...filesArray]);
        }
    };

    const handleCreate = () => {
        console.log({ title, content, images });
        alert("Blog created successfully!");
    };

    const handleCancel = () => {
        setTitle("");
        setContent("");
        setImages([]);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <button onClick={handleCreate}>Create</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="blog-title" style={{ display: "block", fontWeight: "bold" }}>
                    Title
                </label>
                <input
                    id="blog-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="blog-content" style={{ display: "block", fontWeight: "bold" }}>
                    Content
                </label>
                <textarea
                    id="blog-content"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="blog-images" style={{ display: "block", fontWeight: "bold" }}>
                    Insert Images
                </label>
                <input
                    id="blog-images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: "block", marginBottom: "10px" }}
                />
            </div>
        </div>
    );
}

