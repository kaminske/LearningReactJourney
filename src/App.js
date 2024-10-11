
import {useState , useEffect} from "react"
export default function App() {
  const [advice,setAdvice]=useState('');
  const [count,setCount] = useState (0)

async function getAdvice (){

const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();
setAdvice(data.slip.advice);
setCount ((c)=>c+1);

}

useEffect ( function(){ getAdvice()},[]);

return (
<div>
  <h1>Here's your advice :  </h1> 
  <p>{advice}</p>
  <button onClick={getAdvice}>Test</button>
  <Message count = {count} />
 
</div> 
);
}

function Message (props) {
return ( <p>you have read {props.count} pieces of advice </p>);
}