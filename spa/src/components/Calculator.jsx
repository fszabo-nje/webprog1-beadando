import { useState } from "react"
import "./Calculator.css"

function Calculator(){

const [display,setDisplay] = useState("")

function addValue(v){
setDisplay(display + v)
}

function clear(){
setDisplay("")
}

function calculate(){

try{
setDisplay(eval(display).toString())
}
catch{
setDisplay("Error")
}

}

return(

<div className="calculator">

<div className="display">
{display || "0"}
</div>

<div className="buttons">

<button onClick={clear}>C</button>
<button onClick={()=>addValue("/")}>/</button>
<button onClick={()=>addValue("*")}>*</button>
<button onClick={()=>addValue("-")}>-</button>

<button onClick={()=>addValue("7")}>7</button>
<button onClick={()=>addValue("8")}>8</button>
<button onClick={()=>addValue("9")}>9</button>
<button onClick={()=>addValue("+")}>+</button>

<button onClick={()=>addValue("4")}>4</button>
<button onClick={()=>addValue("5")}>5</button>
<button onClick={()=>addValue("6")}>6</button>

<button onClick={()=>addValue("1")}>1</button>
<button onClick={()=>addValue("2")}>2</button>
<button onClick={()=>addValue("3")}>3</button>

<button className="zero" onClick={()=>addValue("0")}>0</button>
<button onClick={()=>addValue(".")}>.</button>
<button className="equals" onClick={calculate}>=</button>

</div>

</div>

)

}

export default Calculator