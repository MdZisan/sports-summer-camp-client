import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const Addclass = () => {
  const {reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    data.price= parseInt(data.price);
    data.availableSeats= parseInt(data.availableSeats);
    data.instructorName=user?.displayName;
    data.instructorEmail=user?.email;
    data.status= 'pending';
    data.feedback= '';

    
    fetch('https://sports-summer-camp-server-three.vercel.app/classes',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        toast.success('Class added successfully')
        reset()
      }
      console.log('classpost' ,data);
    })
    .catch(err=>{
      console.log('classes post error',err);
    })


    console.log(data);
  }
const {user} = useContext(AuthContext)
// console.log(user?.displayName);
  return (
    <div className="w-full px-8 mt-[6rem]" id="addclass" >
      <div className="text-3xl font-bold text-center">Add Your Classes</div>
      <div className="divider h-[2px] bg-white"></div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input required
            type="text"
            placeholder="Image Url"
            className="input input-bordered"
            {...register("image")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input required
            type="text"
            placeholder="Name"
            className="input input-bordered"
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input required
          value={user?.displayName}
            type="text"
            placeholder="Instructor Name"
            className="input input-bordered"
            {...register("instructorName")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input required
          value={user?.email}
            type="email"
            placeholder="Instructor Email"
            className="input input-bordered"
            {...register("instructorEmail")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input required
            type="number"
            placeholder="Available Seats"
            className="input input-bordered"
            {...register("availableSeats")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input  required
            type="number"
            placeholder="price"
            className="input input-bordered"
            {...register("price")}
          />
        </div>
        
        </div>

        <div className="text-center mt-4">
        <input type="submit" value={'Add class'} className="btn btn-accent text-white" />
        </div>
      </form>
    </div>
  );
};

export default Addclass;
