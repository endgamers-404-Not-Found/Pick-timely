import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostBlog = () => {
    const navigate = useNavigate()

    const handleBlog = e => {
        e.preventDefault();
        const blog = {
            title: e.target.title.value,
            blog: e.target.blog.value
        }
        fetch('https://pick-timely.herokuapp.com/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {

                    toast("Succesfully added your blog");
                    navigate('/blog')

                    toast.success("Successfully added your blog");
                    navigate('/blog')

                }
                else {
                    toast("Some unknown error occurred");
                }
            })
        e.target.reset();
    }

    return (
        <div>
            <form className='flex flex-col items-center justify-center' onSubmit={handleBlog}>
                <div>

                    <input type="text" name="title" placeholder="Title" className="input input-bordered input-primary  bg-gray-500 text-white md:w-[700px] my-10" />
                    <input type="text" name="title" placeholder="Title" className="input input-bordered input-primary  bg-gray-500 text-white md:w-[700px] my-10" />

                </div>

                <div className="">
                    <label className="label">
                        <span className="">Your Blog</span>
                    </label>

                    <textarea name="blog" className="textarea md:w-[700px]  bg-gray-500 text-white textarea-bordered" placeholder="Write your blog"></textarea>
                </div >

                <input type="submit" value="Submit" className="btn btn-primary w-48 my-10" />
            </form >

            <textarea name="blog" className="textarea md:w-[700px]  bg-gray-500 text-white textarea-bordered" placeholder="Write your blog"></textarea>

            <input type="submit" value="Post" className="btn btn-primary w-48 my-10" />
        </div>
       
    );
};

export default PostBlog;