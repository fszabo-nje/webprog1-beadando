import { useState, useEffect } from "react"
import axios from "axios"

const API = "http://localhost/webprog-api/"

function AxiosCrud(){

const [students,setStudents] = useState([])

const [name,setName] = useState("")
const [className,setClassName] = useState("")
const [gender,setGender] = useState(-1)


useEffect(()=>{

loadStudents()

},[])


function loadStudents(){

axios.get(API+"read.php")

.then(res=>{

setStudents(res.data)

})

}


function addStudent(){

axios.post(API+"create.php",{

nev:name,
osztaly:className,
fiu:gender

})

.then(()=>{

setName("")
setClassName("")
setGender(-1)

loadStudents()

})

}


function deleteStudent(id){

axios.post(API+"delete.php",{

id:id

})
.then(()=>{

loadStudents()

})

}


return(

<div>

<h1>Axios React CRUD</h1>

<div>

<input
placeholder="Név"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Osztály"
value={className}
onChange={(e)=>setClassName(e.target.value)}
/>

<select
value={gender}
onChange={(e)=>setGender(e.target.value)}
>

<option value="-1">Fiú</option>
<option value="0">Lány</option>

</select>

<button onClick={addStudent}>
Hozzáadás
</button>

</div>

<br/>

<table border="1">

<thead>

<tr>

<th>ID</th>
<th>Név</th>
<th>Osztály</th>
<th>Nem</th>
<th>Művelet</th>

</tr>

</thead>

<tbody>

{students.map(s=>{

return(

<tr key={s.id}>

<td>{s.id}</td>
<td>{s.nev}</td>
<td>{s.osztaly}</td>
<td>{s.fiu==-1?"Fiú":"Lány"}</td>

<td>

<button
onClick={()=>deleteStudent(s.id)}
>

Törlés

</button>

</td>

</tr>

)

})}

</tbody>

</table>

</div>

)

}

export default AxiosCrud