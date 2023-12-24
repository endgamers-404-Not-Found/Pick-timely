import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../SharedComponents/Spinner';
import { Provider, useDispatch, useSelector } from 'react-redux/es/exports';
import { getAllBlogs } from './Services/actions/blogsAction';

const Blogs = () => {
    const navigate = useNavigate();
    // const [blogs, setBlogs] = useState([]);

    const { isLoading, blogs, error } = useSelector((state) => state)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllBlogs())


    }, [])

    if (!blogs) {
        return <Spinner />
    }

    const date = new Date();
    const day = date.toLocaleTimeString();

    const handleBlog = (id) => {
        navigate(`/blog/${id}`)
    }


    return (
        <div className="  ">
            <div className="mx-auto flex-col md:flex-row flex uppercase  lg:w-[600px] w-full items-center pt-16">
                <h1 className=" text-4xl md:text-5xl  text-primary">Blogs</h1>
                <p className="  text-gray-600 lg:ml-5 ml-0">Blogs for improve your knowledge. </p>
            </div>
            {isLoading && <Spinner></Spinner>}


            <div className="w-[100%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 lg:p-20 p-2">
                    {
                        blogs?.map(blog =>
                            <div className='border lg:4/12 w-5/6 mx-auto rounded-md shadow-2xl shadow-black  p-4'>
                                <img className='lg:w-[100%] w-60 h-[16%] lg:h-[32%] rounded-md' src={blog.image} alt={blog?.title} />
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-500 mt-5">{blog?.title}</h1>
                                    <span style={{ fontSize: '14px' }}>posted by: admin, {day} ago</span>
                                    <p className="text-lg text-gray-500 font-serif mt-3 text-justify h-[150px]">
                                        {blog?.blog.slice(0, 150)}...
                                        <button onClick={() => handleBlog(blog._id)} className='btn btn-link lowercase mb-5'>read more</button>
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