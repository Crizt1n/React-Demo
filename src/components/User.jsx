import React, { useState } from 'react'

function User(props) {
    //js code 
    const[color,setColor]= useState({
        First : "RED",
        Second : "BLUE",
        Third : "GREEN"
    })

    /* console.log(props); */
    const divStyle={
        backgroundColor:"grey",
        padding:"10px",
        margin:"40px",
        textAlign:"center"
    }
    return(
        //jsx code 
        <div style={divStyle}>
            <h1>user inside functional component</h1>
            {props.uname ==='Maxwell'?
                <h3>username is : {props.uname}</h3>:
                <p>User Not found</p>}
            <h3>User Age is :{props.age} </h3>

            <h2> Color list </h2>
              <ul>
                    <li style={{fontSize:'30px'}}>{color.First} </li>
                    <li style={{fontSize:'30px'}}>{color.Second} </li>
                    <li style={{fontSize:'30px'}}>{color.Third}</li>
              </ul>
           
            <button onClick={()=>setColor({...color,Second : "YELLOW"})} type='button' style={{color:'black',backgroundColor:'Yellow',padding:'20px', margin:'20px',borderRadius:'10px'}}>View the State Change</button>

        </div>
    )
}
export default User