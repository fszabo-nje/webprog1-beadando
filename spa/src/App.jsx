import { useState } from "react"
import Calculator from "./components/Calculator"
import Counter from "./components/Counter"

function App(){

const [page,setPage] = useState("calc")

return(

<div>

<h1>SPA React alkalmazás</h1>

<div style={{marginBottom:"20px"}}>

<button onClick={()=>setPage("calc")}>
Calculator
</button>

<button onClick={()=>setPage("counter")}>
Counter
</button>

</div>

{page==="calc" && <Calculator/>}
{page==="counter" && <Counter/>}

</div>

)

}

export default App