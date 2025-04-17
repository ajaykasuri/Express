import React, { useEffect, useState } from 'react';
import '../Styles/BlogPage.css';

const BlogPage = ({ blogs }) => {

    const [blogss, setBlogs] = useState([]);

    const fetchData = async () => {
        const url = "https://g51e0138f9782a4-db49sbm.adb.ap-hyderabad-1.oraclecloudapps.com/ords/rnative/blog/addblog";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log("fetch data", json.items);
            setBlogs(json.items)
        } catch (error) {
            console.error(error.message);
        }

    }

    useEffect(() => {
        fetchData();
    }
        , [])

    return (
        <div className="blog-page-container">
            <h1>Blogs</h1>
            {blogss.length > 0 ? (
                blogss.map((blog) => (
                    <div key={blog.num} className="blog-card">
                        <h2>{blog.titile}</h2>

                        <div
                            className="blog-content"

                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                        <small>Posted on: {blog.tdate}</small>
                    </div>
                ))
            ) : (
                <p>No blogs posted yet.</p>
            )}
        </div>
    );
};

export default BlogPage;
