let students = []
let editIndex = -1

// fájl betöltése
fetch("data/diak.txt")
.then(res => res.text())
.then(text => {

    const rows = text.trim().split("\n")

    for(let i=1;i<rows.length;i++){

        const values = rows[i].split("\t")

        let student = {
            id: values[0],
            nev: values[1],
            osztaly: values[2],
            fiu: values[3]
        }

        students.push(student)
    }

    renderStudents()
})


// megjelenítés
function renderStudents(){

const app = document.getElementById("app")

let html = `
<h2>Diákok</h2>

<h3>Új diák</h3>

<input id="nev" placeholder="Név">
<input id="osztaly" placeholder="Osztály">
<select id="fiu">
<option value="-1">Fiú</option>
<option value="0">Lány</option>
</select>

<button onclick="addStudent()">Mentés</button>

<br><br>

<table border="1">
<tr>
<th>ID</th>
<th>Név</th>
<th>Osztály</th>
<th>Nem</th>
<th>Művelet</th>
</tr>
`

students.forEach((student,index)=>{

let nem = student.fiu == -1 ? "Fiú" : "Lány"

html += `
<tr>
<td>${student.id}</td>
<td>${student.nev}</td>
<td>${student.osztaly}</td>
<td>${nem}</td>

<td>
<button onclick="editStudent(${index})">Szerkeszt</button>
<button onclick="deleteStudent(${index})">Törlés</button>
</td>

</tr>
`

})

html += "</table>"

app.innerHTML = html
}


// új diák
function addStudent(){

const nev = document.getElementById("nev").value
const osztaly = document.getElementById("osztaly").value
const fiu = document.getElementById("fiu").value

if(editIndex == -1){

students.push({
id: students.length + 1,
nev: nev,
osztaly: osztaly,
fiu: fiu
})

}else{

students[editIndex].nev = nev
students[editIndex].osztaly = osztaly
students[editIndex].fiu = fiu

editIndex = -1

}

renderStudents()
}


// törlés
function deleteStudent(index){

students.splice(index,1)

renderStudents()

}


// szerkesztés
function editStudent(index){

const student = students[index]

document.getElementById("nev").value = student.nev
document.getElementById("osztaly").value = student.osztaly
document.getElementById("fiu").value = student.fiu

editIndex = index

}