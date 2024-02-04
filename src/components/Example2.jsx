

import { useState } from 'react'
import Styles from '../myStyle.module.css'

function Example2({subject}){
  //js code 
  const [concept,setConcept]= useState("React js")
  const [concept2,setConcept2]= useState("HTML")
  const [user,setUser]= useState("")

  const userArray = [
    {username:'Max',age:'23'},
    {username:'Max Miller',age:'25'},
    {username:'Manuel',age:'28'},
    {username:'Manu',age:'30'},
    {username:'Mini',age:'33'},
  ] 

  const handleSubmit =(e)=>{
    e.preventDefault() // Prevents re-render // refresh/reload  
    console.log(`user name is ${user}`);
  }

 

    return(
      <>
            {subject == 'REACT' &&
                <div className='divstyle'>
                <h2>Inside Example2 functional component</h2>
                <h3>subject is :<span className={Styles.reactsubject}> {subject}</span></h3>
            </div>}
            <h3>Example Component State : <span style={{color: 'orange',fontSize:'30px'}}>{concept}</span></h3>
            <h3>Example Component State : <span style={{color: 'red',fontSize:'30px'}}>{concept2}</span></h3>


            <button onClick={()=>setConcept('Angular')} type='button' style={{color:'black',backgroundColor:'skyblue',padding:'20px', margin:'20px',borderRadius:'10px'}}>View The Change</button>
            <button onClick={()=>setConcept2('CSS')} type='button' style={{color:'black',backgroundColor:'violet',padding:'20px', margin:'20px',borderRadius:'10px'}}>View The Change</button>

            <h2>User List</h2>
            <table>
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Username</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {
                  userArray.map((item,index)=>(
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.username}</td>
                      <td>{item.age}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>


         <div>
          <h2>React Form</h2>
              <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username : </label>
                <input value={user} onChange={(e)=>setUser(e.target.value)} id='username' type="text"  placeholder='Username please'  style={{padding:'20px',margin:'20px',width:'400px',borderRadius:'10px' }}/>


                <input  type='submit' value={"submit"} style={{color:'black',backgroundColor:'violet',padding:'20px', margin:'20px',borderRadius:'10px'}}/>
                
                
              </form>
         </div>
      </>
    )
}
export default Example2
  
