let users = []

function renderUsers(){

    const app = document.getElementById("app")

    let html = `
    <h2>Felhasználók</h2>

    <input id="name" placeholder="Név">
    <input id="age" placeholder="Kor">
    <button onclick="addUser()">Hozzáadás</button>

    <table border="1">
    <tr>
    <th>Név</th>
    <th>Kor</th>
    <th>Művelet</th>
    </tr>
    `

    users.forEach((user,index)=>{
        html += `
        <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>
        <button onclick="deleteUser(${index})">Törlés</button>
        </td>
        </tr>
        `
    })

    html += "</table>"

    app.innerHTML = html
}

function addUser(){

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value

    users.push({
        name:name,
        age:age
    })

    renderUsers()
}

function deleteUser(index){

    users.splice(index,1)

    renderUsers()
}

renderUsers()