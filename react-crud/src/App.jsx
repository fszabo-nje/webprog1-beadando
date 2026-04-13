import { useState, useEffect } from "react"

function App(){

const [students,setStudents] = useState([])
const [name,setName] = useState("")
const [className,setClassName] = useState("")
const [gender,setGender] = useState(0)
const [editIndex,setEditIndex] = useState(-1)

useEffect(()=>{

fetch("/data/diak.txt")
.then(res=>res.text())
.then(text=>{

const rows = text.trim().split("\n")
let list = []

for(let i=1;i<rows.length;i++){

const v = rows[i].split("\t")

list.push({
id:v[0],
nev:v[1],
osztaly:v[2],
fiu:v[3]
})

}

setStudents(list)

})

},[])


function saveStudent(){

if(editIndex==-1){

const newStudent={
id:students.length+1,
nev:name,
osztaly:className,
fiu:gender
}

setStudents([...students,newStudent])

}else{

let list=[...students]

list[editIndex].nev=name
list[editIndex].osztaly=className
list[editIndex].fiu=gender

setStudents(list)
setEditIndex(-1)

}

setName("")
setClassName("")
setGender(0)

}


function deleteStudent(index){

let list=[...students]

list.splice(index,1)

setStudents(list)

}


function editStudent(index){

const s=students[index]

setName(s.nev)
setClassName(s.osztaly)
setGender(s.fiu)

setEditIndex(index)

}


return(

<div>

<h1>React CRUD alkalmazás</h1>

<h3>Diák hozzáadás / szerkesztés</h3>

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

<button onClick={saveStudent}>
Mentés
</button>


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

{students.map((s,index)=>{

return(

<tr key={index}>

<td>{s.id}</td>
<td>{s.nev}</td>
<td>{s.osztaly}</td>
<td>{s.fiu==-1?"Fiú":"Lány"}</td>

<td>

<button onClick={()=>editStudent(index)}>
Szerkeszt
</button>

<button onClick={()=>deleteStudent(index)}>
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

export default Appcd