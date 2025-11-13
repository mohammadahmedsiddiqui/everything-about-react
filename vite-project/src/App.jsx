import { useState , react} from 'react'
import Userstatus from './components/userstatus'

// const Validpassword = ()=><h1>valid password</h1>
// const Invalidpassword = ()=><h1>invalid password</h1>





// function Password({validity}) {
//    return validity ? <Validpassword/> :< Invalidpassword/>
// }

function App() {
  return (
<>
  {/* conditional rendering */}
{/* <Password validity={false}/> */}
<Userstatus isloggedin = {true} isadmin={!true}/>
</>
  )
}

export default App
