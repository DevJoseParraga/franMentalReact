import React from 'react'
import "../assets/Css/SobreMi.css"
import foto from "../assets/Multimedia/images/Imagen de WhatsApp 2023-02-22 a las 21.16.25.jpg"
function SobreMi() {
  return (
   <>
       <section class="SobreMi">
        <div class="SobreMi__imgContainer">
            <img class="SobreMi__img" src={foto} alt=""/>
        </div>
        <div class="SobreMi__DescripContainer">
            <h6 class="SobreMi__titulo">
                Titulo
            </h6>
            <p class="SobreMi__Descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam dolorem ad, consectetur at aspernatur accusamus praesentium perferendis voluptate distinctio facere expedita deserunt temporibus ipsum voluptatum illum voluptatibus delectus excepturi. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam dolorem ad, consectetur at aspernatur accusamus praesentium perferendis voluptate distinctio facere expedita deserunt temporibus ipsum voluptatum illum voluptatibus delectus excepturi. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam dolorem ad, consectetur at aspernatur accusamus praesentium perferendis voluptate distinctio facere expedita deserunt temporibus ipsum voluptatum illum voluptatibus delectus excepturi. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam dolorem ad, consectetur at aspernatur accusamus praesentium perferendis voluptate distinctio facere expedita deserunt temporibus ipsum voluptatum illum voluptatibus delectus excepturi. 
             
            </p>
        </div>
    </section>
   
   </>
  )
}

export default SobreMi