import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const PostBlog = () => {
    const navigate = useNavigate()

    const handleBlog = e => {
        e.preventDefault();
        const blog = {
            title: e.target.title.value,
            blog: e.target.blog.value,
            image: e.target.image.value
        }
        fetch('https://pick-timely-server.onrender.com/blog', {
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
                   Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully added your blog',
                    showConfirmButton: false,
                    timer: 1500
                })
                   navigate('/blog')
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Some unknown error occurred',
                      })
                }
            })
        e.target.reset();
    }

    return (
        <form className='flex flex-col items-center justify-center' onSubmit={handleBlog}>
            <div>
                <input type="text" name="title" placeholder="Title" className="input input-bordered input-primary  bg-gray-500 text-white md:w-[700px] w-[300px] my-10" />
            </div>
            <div>
                <input type="text" name="image" placeholder="img link" className="input input-bordered input-primary  bg-gray-500 text-white md:w-[700px] w-[300px] my-10" />
            </div>

            <div className="">
                <label className="label">
                    <span className="">Your Blog</span>
                </label>
                <textarea name="blog" className="textarea md:w-[700px] w-[300px]  bg-gray-500 text-white textarea-bordered" placeholder="Write your blog"></textarea>
            </div>
            
            <input type="submit" value="Post" className="btn btn-primary w-48 my-10"/>
        </form>
    );
};

export default PostBlog;