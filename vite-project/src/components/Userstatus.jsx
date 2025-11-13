import React from 'react'

const Userstatus = (props) => {

    
if (props.isloggedin && props.isadmin) {
  return  <h1>welcome admin</h1>
}else{
 return  <h1>welcome user</h1>
}

  return (
 <>


 </>
  )
}

export default Userstatus
