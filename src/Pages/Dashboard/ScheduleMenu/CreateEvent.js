import React, { useState } from 'react';

const CreateEvent = () => {
    const [checked, setChecked] = useState(false);

    const handleHostCreate = (event) =>{
        event.preventDefault();
        const hoster = event.target.hoster.value;
        const duration = event.target.duration.value;
        const eventType = event.target.eventType.value;
        const checked = event.target.checked;
        const img = event.target.image.value;
        const hosterInfo = {
            hoster,
            duration,
            eventType, 
            checked,
            img
        };
        console.log(hosterInfo);
        fetch('http://localhost:5000/hoster', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(hosterInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Hoster created successfully', data);
            setChecked(true);
        })

    }

    return (
        <div className='grid gap-10 bg-slate-400 grid-cols-1 lg:grid-cols-2 justify-items-center p-20'>
            <div className='border w-96 p-10 mt-10'>
                <div className='flex justify-start gap-10'>
                    <input type="radio" name="data1" class="radio" checked />
                    <label htmlFor="one-to-one">One-to-One Meeting</label>
                </div>
                <div className='flex justify-start gap-10 mt-10'>
                    <input type="radio" name="data2" class="radio" checked />
                    <label htmlFor="group">Group Meeting</label>
                </div>
                <div className='flex justify-start gap-10 mt-10'>
                    <input type="radio" name="data3" class="radio" checked />
                    <label htmlFor="corporate">Corporate Meeting</label>
                </div>
            </div>
            
            <div className='border p-10 w-96 mt-10'>
                <form onSubmit={handleHostCreate}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Host Name</span>
                        </label>
                        <select name='hoster' class="select select-bordered">
                            <option value='sujon'>Sujon</option>
                            <option value='meherab'>Meherab</option>
                            <option value='Hamid'>Hamid</option>
                        </select>
                    </div>

                    <div class="form-control border rounded-md mt-2">
                        <label class="cursor-pointer label">
                            <span class="label-text">Private Meeting</span>
                            <input type="checkbox" name={checked ? 'private' : 'public'} class="checkbox" />
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Event Duration</span>
                        </label>
                        <select name='duration' class="select select-bordered">
                            <option value='15 mins Meeting'>15 mins Meeting</option>
                            <option value='30 mins Meeting'>30 mins Meeting</option>
                            <option value='60 mins Meeting'>60 mins Meeting</option>
                            <option value='90 mins Meeting'>90 mins Meeting</option>
                        </select>
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Event Type</span>
                        </label>
                        <select name='eventType' class="select select-bordered">
                                <option value='One-to-one'>One-to-one</option>
                                <option value='Group Meeting'>Group Meeting</option>
                                <option value='Corporate Meeting'>Corporate Meeting</option>
                                <option value='Virsual Meeting'>Virsual Meeting</option>
                            </select>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label> 
                        <textarea name='description' class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">User image Link</span>
                        </label> 
                        <input type='text' name='image' class="input input-bordered" placeholder="add image link" />
                    </div>
                    
                    <div className='mt-5'>
                        <button  className='btn btn-sm'>continue</button>
                    </div>
                </form>

            </div>
 
        </div>
    );
};

export default CreateEvent;