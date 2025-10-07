function EventDemo() {
    const demo = ()=>{
        alert("Welcome")
    }
    const printData=(Event)=>{
        // console.log("Type is "+Event.type)
        // console.log("Name is "+Event.target.name)
        // console.log("Name is "+Event.target.value)
        console.log(Event.target.value)
    }
    return(<>
    <input type="button" onClick={demo} value="Clickme"/>
    <input type="button" onClick={()=>alert("inline")} value="inline"/><br></br>
    Text1<input type="text" name="btn1" onChange={printData}/><br></br>
    Text2<input type="text" name="btn2" onChange={printData}/>
    </>)
}
export default EventDemo