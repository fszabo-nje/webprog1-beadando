class NavBar extends HTMLElement {

connectedCallback(){

this.innerHTML = `
<nav class="navbar">

<a href="index.html">Főoldal</a>
<a href="javascript.html">JavaScript CRUD</a>
<a href="react-crud/dist/index.html">React CRUD</a>
<a href="spa/dist/index.html">SPA</a>
<a href="fetchapi.html">Fetch API</a>
<a href="axios-react/dist/index.html">Axios</a>
<a href="oojs.html">OOJS</a>

</nav>
`

}

}

customElements.define("nav-bar", NavBar)