import React from 'react'
import logo from "../assets/Multimedia/images/Asset1.svg"
import "../assets/Css/Logo.css"

function logo() {
  return (
    <>
    <section class="Logo__Container">
    < img class="Logo" src={logo} alt="logo"/>
    </section>
    </>
  )
}

export default logo