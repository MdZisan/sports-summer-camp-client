import React from "react";
import { useForm } from "react-hook-form";

const Addclass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            {...register("example")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            {...register("example")}
          />
        </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Addclass;
