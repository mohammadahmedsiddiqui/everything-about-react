import React from 'react'

const Todoinput = ({onchange , onclick ,value}) => {
  return (
   <>
   
   <div className='flex justify-center mt-6 gap-3 '> 
    <input placeholder='enter your todo' onChange={onchange} value={value} className= 'text-black-900 border-b-blue-950 px-5 py-5' type="text" />
<button onClick={onclick}  className='px-10 py-0.5 font-bold bg-blue-950 text-white '> add todo</button>
   </div>
   
   
   
   </>
  )
}

export default Todoinput
