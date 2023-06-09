import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";

const Addclass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
const {user} = useContext(AuthContext)
console.log(user?.displayName);
  return (
    <div className="w-full px-8" id="addclass" >
      <div className="text-3xl font-bold text-center">Add Your Classes</div>
      <div className="divider h-[2px] bg-white"></div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input
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
          <input
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
          <input
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
          <input
          value={user?.email}
            type="email"
            placeholder="Instructor Email"
            className="input input-bordered"
            {...register("instructorEmail")}
          />
        </div>
        <div className="form-control  col-span-2">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            placeholder="availableSeats"
            className="input input-bordered"
            {...register("instructorName")}
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
