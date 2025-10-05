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



  let rendertask= "no task available"
  rendertask = maintask.map((t,i)=>{
    return(
<div>
  <p>{t.todo}</p>
</div>
)

  })

  return (
    <>
      <h1 className="bg-black mb-3 px-6 py-4 font-bold text-5xl text-white">
        todolist
      </h1>
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




      <div className="bg-slate-300  p-10 m-4">
      <h3>{rendertask}</h3>
      </div>
    </>
  );
};

export default App;
