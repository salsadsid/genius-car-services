import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center my-3'>Add Service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                {errors.name && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;