import React, { useEffect, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import Spinner from '../../SharedComponents/Spinner';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch(`https://pick-timely.herokuapp.com/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    if (!blogs) {
        return <Spinner />
    }



    return (
        <div className="bg-[url('/src/assets/developers.jpg')] lg:p-0 p-6">
                <div className="mx-auto flex-col md:flex-row flex uppercase  lg:w-[600px] w-full items-center pt-24">
                    <h1 className="text-5xl   text-primary">Blogs</h1>
                    <p className="  text-gray-600 ml-5">Blogs for improve your knowledge. </p>
                </div>
                
            

            {/* <img src={blogCover} height="10" className="h-80 w-full bg-none" alt=""/> */}


            <div className="flex justify-center ">
                <div className="text-left lg:w-[900px] m-5 ">
                    {
                        blogs?.map(blog => <div>
                            <h1 className="text-3xl text-gray-500 mt-[100px]">{blog?.title}</h1>
                            <p className="text-lg font-serif my-5">
                                {blog?.blog}
                            </p>
                        </div>


                        )
                    }


                </div>

            </div>
        </div>
    );
};

export default Blogs;