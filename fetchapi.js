const API = "http://localhost/webprog-api/"

function loadStudents(){

fetch(API + "read.php")

.then(res => res.json())

.then(data => {

let html = ""

data.forEach(s => {

let nem = s.fiu == -1 ? "Fiú" : "Lány"

html += `
<tr>

<td>${s.id}</td>
<td>${s.nev}</td>
<td>${s.osztaly}</td>
<td>${nem}</td>

<td>

<button onclick="deleteStudent(${s.id})">
Törlés
</button>

</td>

</tr>
`
})

document.getElementById("table").innerHTML = html

})

.catch(err => console.error("Hiba:", err))

}


function addStudent(){

const nev = document.getElementById("nev").value
const osztaly = document.getElementById("osztaly").value
const fiu = document.getElementById("fiu").value

fetch(API + "create.php", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
nev: nev,
osztaly: osztaly,
fiu: fiu
})

})

.then(res => res.json())

.then(() => {

document.getElementById("nev").value = ""
document.getElementById("osztaly").value = ""

loadStudents()

})

.catch(err => console.error("Hiba:", err))

}


function deleteStudent(id){

fetch(API + "delete.php", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
id: id
})

})

.then(res => res.json())

.then(() => {

loadStudents()

})

.catch(err => console.error("Hiba:", err))

}


loadStudents()