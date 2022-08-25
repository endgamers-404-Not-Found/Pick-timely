import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {blogId} = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [blogId]);

    return (
        <div className='w-[100%] md:w-[100%] lg:w-[80%] mx-auto mb-20 p-10'>
            <div style={{backgroundColor: '#043e57', height:'100px' }} className='flex justify-center items-center'>
                <h1 className='font-bold text-3xl text-white uppercase'>Blog Details</h1>
            </div>
            <div>
                <img className='w-[100%]' src={blog.image} alt="" />
                <div>
                    <h1 className='text-2xl font-bold mt-3'>{blog.title}</h1>
                    <span>Posted by: admin</span>
                    <p className='mt-3 text-justify'><span className='font-bold'>Desk Report:</span> {blog.blog}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;