import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import './registrar.js'
import './ingresar.js'
import './salir.js'
import './loginCheck.js'
import './postList.js'
import { loginCheck } from "./loginCheck.js";
import { setupPosts } from "./postList.js";

onAuthStateChanged(auth, async(user)=>{
    if(user){
        loginCheck(user);
        try{
           // const mensaje = "Iniciaste sesion";
           // setupPosts(mensaje);
            console.log(mensaje);
        }catch(error){
            console.log(error)
        }
    }else{
        // const mensaje = "";
        // setupPosts(mensaje);
        loginCheck(user);
    }
})

