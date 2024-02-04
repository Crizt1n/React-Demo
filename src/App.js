
import './App.css';
import User from './components/User';
import Styles from './myStyle.module.css'
import Example from './components/Example';
import Example2 from './components/Example2';
import Random from './components/Random';
import Form from './components/Form';

function App() {
  // JS code are typed here
  const subject ='REACT'
  const username = 'Maxwell'

  const show =()=>{
    alert('button click')
  }

  const add=(user)=>{
    alert(`${user},added`)
  }

  const getname =(e)=>{
    console.log(e.target.value);
  }


  return (
    //Jsx code are typed here
  <>
      <Form/>
      <hr />
      <h1 style={{textAlign:'center',color:'blue'}}>Heading</h1>
      <div>
       <h1 style={{textAlign:'center',color:'green'}}>Welcome to React</h1>
       <h3>Subject is : <span className={Styles.reactsubject}>{subject}</span></h3>
       <button onClick={show} type='button' style={{color:'white',backgroundColor:'black',padding:'20px', margin:'20px',borderRadius:'10px'}}>Click</button>
       <button onClick={()=>add('jenifer')} type='button' style={{color:'white',backgroundColor:'black',padding:'20px', margin:'20px',borderRadius:'10px'}}>add</button>

      <input onChange={(e)=>getname(e)} type="text" placeholder='Type the username' style={{padding:'20px',margin:'20px',width:'400px',borderRadius:'10px' }}/>

       <ul>
        {/* self closing tag */}
        <li><Example/> </li>
        <li><Example2 subject={subject}/></li>
        <li><Random/></li>
        <li><User uname={username} age="27"/></li>
        
       
       </ul>
      </div>
  </>
  );
}

export default App;
