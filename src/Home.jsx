import Header from "./Header"
import './Hellow.css';
import lg from './whatsapp logo.png'
function Home(){
  var a = 10
  var b = 20
  var mycolor={color:'white',backgroundColor:'red'}
  return (<div>
    <h1>Welcome Home</h1>
    A Value is {a} <br></br>
    B Value us {b}
    <p style={{color:'green',backgroundcolor:'pink'}}>First P</p>
    <p style={mycolor}>Second P</p>
    <p style={{color:'green',backgroundcolor:'pink'}}>First P</p>
    <img src={lg} height={50}/>
  </div>)
}
export default Home