import React from 'react'
function Sum(){
    const[no1,setno1] = React.useState(0)
    const[no2,setno2] = React.useState(0)
    const[choice,setchoice] = React.useState("")
    const[ans,setans] = React.useState("")

    const dotask =()=>{
        if(choice == "add"){
            var c = parseInt(no1) + parseInt(no2)
            setans("Sum is"+c)
        }else if(choice == "sub"){
            var c = parseInt(no1) - parseInt(no2)
            setans("Sub is"+c)
        }else if(choice == "mul"){
            var c = parseInt(no1) * parseInt(no2)
            setans("Mul is"+c)
        }
        else if(choice == "div"){
            var c = parseInt(no1) / parseInt(no2)
            setans("Div is"+c)
        }
        else
            setans("select choice")
    }

    return(<div>
    No1 :- <input type='text' onChange={(e)=> setno1(e.target.value)}/>
    No2 :- <input type='text' onChange={(e)=> setno2(e.target.value)}/>

    Choice :-
    <input type='radio' onChange={(e)=> setchoice("add")} name="txt1"/>+
    <input type='radio' onChange={(e)=> setchoice("sub")} name="txt1"/>-
    <input type='radio' onChange={(e)=> setchoice("mul")} name="txt1"/>*
    <input type='radio' onChange={(e)=> setchoice("div")} name="txt1"/>%

    <input type="button" onClick={dotask} value="Click Me" />
    {ans}
</div>)

}


export default Sum