import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Styles/BlogCreate.css';

const BlogCreate = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const handleDownload = (data, filename) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = (e) => {
        const fs = require('fs');
        e.preventDefault();
        const data = {
            num: Date.now(),
            title: blogTitle,
            content: blogContent,
            tdate: new Date().toLocaleString(),
        };
        console.log(data);

        

        // Data to write to the file
        

        // Use fs.writeFile() to write data to a file
        fs.writeFile('output.json', data, (err) => {
            if (err) {
                console.error('Error writing to the file', err);
            } else {
                console.log('File written successfully');
            }
        });

        // Trigger file download
       // handleDownload(data, 'blog-post.json');

        // Add the blog data via the addBlog callback (if needed for further processing)
        //addBlog(data);

        // Reset form fields
        setBlogTitle('');
        setBlogContent('');
    };

    return (
        <div className="blog-posting-container">
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit} className="blog-form">
                <div className="form-group">
                    <label htmlFor="title">Blog Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        className="form-control"
                        placeholder="Enter the blog title"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Blog Content:</label>
                    <ReactQuill
                        value={blogContent}
                        onChange={setBlogContent}
                        className="rich-text-editor"
                        placeholder="Write your blog content here..."
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Post Blog
                </button>
            </form>
        </div>
    );
};

export default BlogCreate;
