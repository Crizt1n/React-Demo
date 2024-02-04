import React, { useState } from 'react'

function Form() {
    //js code 
    const [userdata,setUserdata] = useState({
        uname:"",
        mail:"",
        gender:"",
        course:""
    })
    const getUserData =(e)=>{
        //object destructuring 
        // {key} = object
        const{name,value} = e.target //returns the input tag - name and value are the attribute of input tag
        console.log(name,value);
        setUserdata({...userdata,[name]:value})
       
    }
    console.log(userdata);

    const handleSubmit =(e)=>{
        e.preventDefault() 
        alert
        (`
        STUDENT NAME IS : ${userdata.uname}
        EMAIL ID IS : ${userdata.mail}
        GENDER : ${userdata.gender}
        COURSE SELECTED : ${userdata.course}`
        )
    }


  return (
    <div style={{textAlign: "center"}}>
        <h1>Student Registration form</h1>

   <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="sname"> 
        <span style={{fontSize: '25px'}}>Name :     </span> </label>
                    <input onChange={(e)=>getUserData(e)} name='uname' type="text" id='sname' placeholder='ENTER YOUR NAME ' style={{padding:'20px',margin:'20px',width:'400px',borderRadius:'10px' }} />
               
        </div>
    
        <div style={{marginTop:'10px'}}>
    
        <label htmlFor="email"> 
        <span style={{fontSize: '25px'}}>Emial :     </span> </label>
        <input onChange={(e)=>getUserData(e)} name='mail' type="text" id='email' placeholder='ENTER YOUR EMAIL ' style={{padding:'20px',margin:'20px',width:'400px',borderRadius:'10px' }} />
    
    </div>
    
        <div style={{marginTop:'10px'}}>
            <span style={{fontSize: '25px'}}>Gender :     </span>
       
                    <input onChange={(e)=>getUserData(e)} name='gender' type="radio" value={"Male"} />
                    <label htmlFor="sname" style={{fontSize:'20px'}}>Male</label>
                    <input onChange={(e)=>getUserData(e)} name='gender' type="radio" value={"Female"} />
                    <label htmlFor="sname" style={{fontSize:'20px'}}>Female</label>
                    <input onChange={(e)=>getUserData(e)} name='gender' type="radio" value={"Others"} />
                    <label htmlFor="sname" style={{fontSize:'20px'}}>Others</label>
        </div>
    
        <div style={{marginTop:'10px'}}>
        <span style={{fontSize: '25px'}}>Course :     </span>
            <label style={{fontSize:'20px'}} htmlFor="course"></label>
            <select name="course" id="course" style={{padding:'20px',margin:'20px',width:'400px',borderRadius:'10px' }} onChange={(e)=>getUserData(e)}>
                <option disabled hidden selected>Choose From list</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Humanities">Humanities</option>
                <option value="Commerce">Commerce</option>
            </select>
        </div>
    
    
    
        <div>
        <button onClick={handleSubmit}  type='button' style={{color:'white',backgroundColor:'black',padding:'20px', margin:'20px',borderRadius:'10px'}}>Add</button>
        </div>
   </form>

    
    </div>
    
  )
}

export default Form