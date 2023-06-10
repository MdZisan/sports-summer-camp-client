import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [feedback,setFeedback] = useState('')
  const { user } = useContext(AuthContext);
    const [reload,setReload] = useState(true)

// feedbackText.value= ''
// console.log(feedbackText.value);


  useEffect(() => {
    fetch(`http://localhost:5000/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [reload,feedback]); //TODO: dependency check

  const handleStatus=(id,status)=>{
            fetch(`http://localhost:5000/classes/${id}?status=${status}`,{
                method:"PATCH",headers:{'content-type':'application/json'}
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    toast.success(`course ${status}`)
                    setReload(!reload)
                }
            })
  }
const handleFeedback=(id)=>{
    
    fetch(`http://localhost:5000/classes?id=${id}&feedback=${feedback}`,{
        method:"PUT",
        headers:{'content-type':'application/json'}
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            toast.success('Feedback is sended to the Instructor')
            setFeedback('')
        }
        // console.log(data);
    })
console.log(id);
}
//   console.log(feedback);

  return (
    <div className="mt-[100px] w-[95%]">
      <div className="text-3xl font-bold text-center">My Classes</div>
      <div className="divider  h-[2px] bg-white"></div>
      {/* Table  */}
      <div>
        <div className="overflow-x-auto">
          <table className="table text-xl">
            {/* head */}
            <thead className="text-white text-xl">
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>Instructor Email</th>
                <th>feedback</th>
                <th>action</th>
                {/* //TODO:update button */}
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes.map((clas, i) => (
                  
                    <tr key={clas?._id}>
                      <th>{i + 1}</th>
                      <td>{clas?.name}</td>
                      <td className={`uppercase font-bold ${clas?.status==='pending'&& 'text-warning'}
                      ${clas?.status==='deny'&& 'text-error'}
                      ${clas?.status==='accept'&& 'text-success'}
                      `}>{clas?.status}</td>
                      <td>{clas?.instructorEmail}</td>
                      <td>{clas?.feedback}</td>
                      <td className="flex flex-col gap-y-2  ">
                        <button onClick={()=>handleStatus(clas?._id,'accept')} className="btn btn-xs btn-success text-white" disabled={clas?.status==='accept'||clas?.status==='deny'}>
                          Accept
                        </button>
                        <button onClick={()=>handleStatus(clas?._id,'deny')} className="btn btn-xs btn-error text-white" disabled={clas?.status==='accept'||clas?.status==='deny'}>
                          Deny
                        </button>
                        <button className="btn btn-xs btn-info text-white" onClick={()=>{
                              const modalId = `my_modal_${clas._id}`; // Generate a unique ID for the feedback dialog
                              const myModal = document.getElementById(modalId);
                            
                            myModal.showModal()}}>
                          Feedback
                        </button>
                      </td>
                      <dialog id={`my_modal_${clas._id}`} className="modal">
  <form method="dialog" className="modal-box">
    <p className="text-sm text-error">Click ESC TO CLOSE Modal</p>
    <h3 className="font-bold text-lg">feedback about {clas?.status}: {clas?.name}</h3>
    <p className="py-4">
    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" onChange={(e)=>setFeedback(e.target.value)}  id="feedback"/>
    </p>

    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn" onClick={()=>handleFeedback(clas?._id)}>send</button>
    </div>
  </form>
</dialog>
                    </tr>
          
                  
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Table  */}
    </div>
  );
};

export default ManageClasses;
