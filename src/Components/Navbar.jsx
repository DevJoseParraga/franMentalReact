import React from 'react'
import "../assets/Css/Navbar.Css"


function Navbar() {
    
window.addEventListener("scroll", ()=>{
    let header = document.querySelector(".NavBar__container")
    header.classList.toggle("Scroll--Down", window.scrollY > 0);
})
  return (
    <>
    <header class="NavBar__container">
        <nav class="NavBar">
            <ul class="Navbar__list">
                <li class="NavBar__Item">
                    <a href="/index.html">Home</a>   
                </li>
                <li class="NavBar__Item">
                    <a href="/components/Consulta.html"> Consulto online</a> 
                </li>
                <li class="NavBar__Item">
                    <a href="">Servicio</a>     
                </li>
                <li class="NavBar__Item">
                    <a href="">Sobre Mi</a>     
                </li>
                <li class="NavBar__Item">
                    <a href="">Contacto</a>     
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar