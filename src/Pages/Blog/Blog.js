import React, { useEffect, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch(`http://localhost:5000/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])



    return (
        <div className="blog-cover ">
            <div className="flex justify-around items-center md:flex-row flex-col ">
                <div className="md:text-left flex-col md:flex-row flex uppercase md:w-[600px] items-center mt-24">
                    <h1 className="text-4xl font-extralight text-orange-600">The Blog</h1>
                    <p className="text-sm text-gray-600 ml-5">Essays, Answers of the four qustions, and also tips from daddy. This Essay is for assignment answers.</p>
                </div>
                <div className="flex flex-col mx-10 items-center md:mt-24 mt-9">

                    <input
                        className="rounded-sm p-2"
                        type="text"
                        placeholder="Find something"
                    />


                    <div className="flex gap-10 my-5 mx-10 justify-center ">
                        <FaFacebook />

                        <MdMarkEmailRead />

                        <BsTwitter />
                    </div>


                </div>
            </div>

            {/* <img src={blogCover} height="10" className="h-80 w-full bg-none" alt=""/> */}


            <div className="flex justify-center ">
                <div className="text-left md:w-[600px] m-5 md:order-2 order-1">
                    <h1 className="text-3xl text-gray-500 mt-[200px]">{blogs[0]?.title}</h1>
                    <p className="text-lg font-serif my-5">
                       {blogs[0]?.blog}
                    </p>
                    <div className="font-bold text-blue-500 text-right font-serif py-5">
                        <Link to='/postBlog'>Post a blog</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blogs;