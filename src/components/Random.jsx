
import React from "react";

class Random extends React.Component{

    constructor(){ //initialise the property
        super()
        this.state={cname:"POLO GT"} //state to store the property
    }

    change=(data)=>{
        this.setState({cname:data})
    }

    componentDidMount(){
        console.log('inside componentDidMount');
    }

    //js code 

    render(){
        return(
            //jsx code 
            <div>
                <h3>Inside Random class component</h3>
                <h3>username is : <span style={{color:'red'}}>{this.state.cname}</span></h3>

                <button onClick={()=>this.change('Auto')} type="button" style={{backgroundColor:"blue",color:'white', padding:'10px',margin:'10px',borderRadius:'10px'}}>Click</button>
            </div>
        )
    }
}

export default Random;