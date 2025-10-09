import React from "react";
import { useState } from "react";

const App = () => {
  const [todo, settodo] = useState("");
const [maintask, setmaintask] = useState([])


  const submithandler = () => {
    setmaintask([...maintask ,{todo}])
    settodo("");
    console.log(maintask)
  };

const deletehandler =(i)=>{
let removedtask = [...maintask]
removedtask.splice(i,1)
setmaintask(removedtask)
}

  let rendertask= "no task available"
  rendertask = maintask.map((t,i)=>{
    return(
<div key={i} className="mb-10 flex justify-center gap-10">
  <p className="flex items-center">{t.todo}</p>
  <button className="bg-red-600 px-5 py-3 font-bold text-white" onClick={()=>{deletehandler(i)}}>delete</button>
</div>
)

  })

  return (
    <>
      <h1 className="bg-black mb-3 px-6 py-4 font-bold text-5xl text-white">
        todolist
      </h1>

      <div className="flex justify-center">
<input
        className=" border-black border-2 px-6 py-4 "
        type="text"
        value={todo}
        onChange={(e) => {
          settodo(e.target.value);
        }}
      />
      <button
        onClick={submithandler}
        className="bg-black text-white-4 px-6 ml-5 rounded-2xl py-4 font-black text-white"
      >
        add task
      </button>
      </div>
      




      <div className="bg-slate-300  p-10 m-4">
      <h3>{rendertask}</h3>
      </div>
    </>
  );
};

export default App;
