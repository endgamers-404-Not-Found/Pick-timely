import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../SharedComponents/Spinner';

const Blogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch('https://pick-timely.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    if (!blogs) {
        return <Spinner />
    }

    const date = new Date();
    const day = date.toLocaleTimeString();

    const handleBlog = (id) =>{
        navigate(`/blog/${id}`)
    }


    return (
        <div className=" lg:p-0 p-6">
                <div className="mx-auto flex-col md:flex-row flex uppercase  lg:w-[600px] w-full items-center pt-16">
                    <h1 className="text-5xl   text-primary">Blogs</h1>
                    <p className="  text-gray-600 ml-5">Blogs for improve your knowledge. </p>
                </div>

                <div className="w-[1300px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-20">
                        {
                            blogs?.map(blog => <div className='border rounded-md shadow-xl p-2'>
                                <img className='w-[100%] h-[35%] rounded-md' src={blog.image} alt={blog?.title} />
                                <div>
                                <h1 className="text-2xl font-bold text-gray-500 mt-5">{blog?.title}</h1>
                                <span style={{fontSize:'14px'}}>posted by: admin, {day} ago</span>
                                <p className="text-lg text-gray-500 font-serif mt-3 text-justify h-[150px]">
                                    {blog?.blog.slice(0,210)}...
                                <button onClick={()=>handleBlog(blog._id)} className='btn btn-link lowercase mb-5'>read more</button>
                                </p>
                                </div>
                            </div>


                            )
                        }
                        

                    </div>
                </div>

        </div>
    );
};

export default Blogs;