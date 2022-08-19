import React, { useEffect, useState } from 'react';
import Spinner from '../../SharedComponents/Spinner';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch(`http://localhost:5000/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    if (!blogs) {
        return <Spinner />
    }



    return (
        <div className=" lg:p-0 p-6">
                <div className="mx-auto flex-col md:flex-row flex uppercase  lg:w-[600px] w-full items-center pt-16">
                    <h1 className="text-5xl   text-primary">Blogs</h1>
                    <p className="  text-gray-600 ml-5">Blogs for improve your knowledge. </p>
                </div>
                
            

            {/* <img src={blogCover} height="10" className="h-80 w-full bg-none" alt=""/> */}


                <div className="text-left lg:w-[900px] mx-auto m-5 ">
                    {
                        blogs?.map(blog => <div>
                            <h1 className="text-3xl font-serif text-gray-500 mt-[70px]">{blog?.title}</h1>
                            <p className="text-lg text-gray-500 font-serif my-5">
                                {blog?.blog}
                            </p>
                        </div>


                        )
                    }
                    {/* <h2 className='text-4xl my-36 text-center text-gray-500'>Coming soon</h2> */}

                </div>

        </div>
    );
};

export default Blogs;