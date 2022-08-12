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
                }
                else {
                    toast("Some unknown error occured");
                }
            })
        e.target.reset();
    }

    return (
        <form className='flex flex-col items-center justify-center' onSubmit={handleBlog}>
            <div>
                <input type="text" name="title" placeholder="Title" class="input input-bordered input-primary md:w-[700px] my-10" />
            </div>

            <div className="">
                <label class="label">
                    <span class="label-text">Your Blog</span>
                </label>
                <textarea name="blog" class="textarea md:w-[700px] textarea-bordered" placeholder="Write your blog"></textarea>
            </div>
            
            <input type="submit" value="Submit" className="btn btn-primary my-10"/>
        </form>
    );
};

export default PostBlog;