import React,{useState} from "react";

function Header({usuario}){
let saludo=""
let [vip, setVip]=useState(usuario.vip)

    if(vip===true){
        saludo="Bienvenido " + usuario.nombre
    }else{
        saludo=usuario.nombre
    }

    function crearVip(){
        setVip(true)
    }

    return(
        <>
        <img src={usuario.imagen}></img>
        <h1>{saludo}</h1>
        <button onClick={crearVip}>Hacer VIP</button>
        </>
    )
}

export default Header;