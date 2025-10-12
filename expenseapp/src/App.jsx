import { useState } from 'react'

import './App.css'

function App() {

const [input, setinput] = useState('')
const [type, settype] = useState('income')
const [transaction , settransaction] = useState([])
const [editindex , seteditindex] = useState(null)



function handleinput(e) {
setinput(e.target.value)
}

function handletype(e) {
  settype(e.target.value)
}

function handleclick() {

if (editindex !== null) {
  const updated = transaction.map((item , index)=>{
    return(
index===editindex ? {input,type} : item
    )
   
  })
   settransaction(updated)
      seteditindex(null)
} else {
  settransaction([...transaction,{input,type}])
  setinput('')
  settype('income')
}





  
}

let income = transaction.reduce((p,c)=>{
return( c?.type == 'income' ? p + Number(c.input) : p)
},0)

let expense = transaction.reduce((p,c)=>{
return( c?.type == 'expense' ? p + Number(c.input) : p)
},0)


let balance = income-expense


  function handleedit(index) {
    setinput(transaction[index]?.input)
    settype(transaction[index]?.type)
    seteditindex(index)
  }
  return (
    <>
    <div style={{textAlign:"center"}}>
   <h1 >EXPENSE MANAGEMENT APP</h1>
   <hr />
<h2>TOTAL INCOME : {income}</h2>
<h2>TOTAL EXPENSE : {expense}</h2>
<h2>BALANCE:{balance}</h2>
<input type="number" value={input} onChange={handleinput}  />
<br /><br />
<select name="" value={type} onChange={handletype} id="">
  <option value="income">income</option>
  <option value="expense">expense</option>
 
</select>

  <button onClick={handleclick}>submit</button>

<hr />

{
  transaction.map((k,i)=>{
return(
  <div key={i}>
   
      <li>{k.type}: {k.input}</li>
     <button onClick={()=>handleedit(i)}>edit</button>
  
  </div>
)
  })
}
    </div>
   

   

    </>
  )
}

export default App
