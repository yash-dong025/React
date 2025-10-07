import React from "react";
function Hooks(){
    const [counter, setcounter]=React.useState(0)
    const[msg,setmsg]=React.useState("")
    const incrementdata=()=>{
        if(counter>=5){
            setmsg("Sorry value is > 5")
        }else{
            setcounter(counter+1)
            setmsg("")
        }
    }
    const decrementdata=()=>{
        if(counter<=0){
            setmsg("Sorry value is <= 0")
        }else{
            setcounter(counter-1)
            setmsg("")
        }
    }
    return(<>
    <h1>Welcome to Hooks</h1>
    <h1>Counter Value is {counter}</h1><br></br>
    <input type="button" value='+' onClick={incrementdata}/>
   <input type="button" value='-'onClick={decrementdata}/>
   <input type="button" value='X' onClick={()=>setcounter(0)}/><br/>    
   {msg}
    </>)
}
export default Hooks