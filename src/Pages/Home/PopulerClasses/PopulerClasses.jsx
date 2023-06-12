import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Fade, Slide } from "react-awesome-reveal";

const PopulerClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [reload, setReload] = useState(true);
  const token = localStorage.getItem('access-token');
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users?email=${user?.email}`,{

      
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res?.data?.forEach((res) => {
          setRole(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:5000/popularClasses?status=accept`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/selectedClass")
      .then((res) => {
        setSelectedClasses(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, reload]);

  const handleSelectedClasses = (classes) => {
    classes.studentEmail = user?.email;
    // console.log(classes);
    axios
      .post("http://localhost:5000/selectedClass", classes)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          toast.success(`${classes.name} selected`);
        }
        if (res.data === "already selected") {
          toast.error(`${classes.name} already selected`);
        }
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <div> 
         <div className='divider'></div>
         <Slide delay={1e2} cascade damping={1e-1}>
         <h2 className="text-4xl font-bold text-center">
       Popular Classes
      </h2>
      </Slide>   
      
      <div className="divider"></div>
      <div className="p-10 grid grid-cols-1 md:grid-cols-4 gap-y-4">
        {classes?.map((classs) => (
          <div key={classs?._id}>
            <div className={`card w-72 ${classs?.availableSeats<=0? 'bg-red-300':'bg-base-200'} shadow-xl`}>
              <figure className="px-10 pt-10">
                <img
                  src={classs?.image}
                  alt="Shoes"
                  className="rounded-xl h-[200px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{classs?.name}</h2>
                <p>
                  {" "}
                  <span className="font-bold">Instructor</span> <br />{" "}
                  {classs?.instructorName}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Available Seats</span> <br />{" "}
                  {classs?.availableSeats}
                </p>
                <p>
                <span className="font-bold">Student Enrolled</span> <br />{" "}
                  {classs?.studentEnrolled} 
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Price</span> <br />${" "}
                  {classs?.price}
                </p>
                {user?.email ?'': <p className="text-red-500">please login to select the class</p>}
                <div className="card-actions">
                  <button
                    className="btn btn-accent text-white"
                    disabled={
                  classs?.availableSeats===0||    role?.role !== "student" ||
                      selectedClasses.some(
                        (item) =>
                          item.studentEmail === user?.email &&
                          item.name === classs?.name
                      )
                    }
                    onClick={() => handleSelectedClasses(classs)}
                  >
                    Select class
                  </button>
                

                  {/* <button className="btn btn-accent text-white"     title={classs._id}
                  data-id={classs._id} disabled={role?.role !== 'student' || selectedClasses.includes(classs._id)} onClick={() => handleButtonClick(classs._id)} >select</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerClasses;









