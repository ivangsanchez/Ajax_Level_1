
//Paso 1-declarar mi objeto XHR
let xhr= new XMLHttpRequest();

window.onload=()=>
{
    
    document.getElementById("btnClick").addEventListener("click",Mostrar);
}

function Mostrar()
{
    //Paso 2- Asignar acciones al método de cambio de estado
    xhr.onreadystatechange=miFuncionCallback;

    //Paso3-Indicamos el metodo que vamos a utilizar y que recurso estamos solicitando
    xhr.open("GET","resultado.html",true);

    //paso 4-Enviamos la petición al AJAX Engine
    xhr.send();
}

function miFuncionCallback()
{
    console.log("El estado de mi solicitud: "+xhr.readyState);
    if(xhr.readyState==4)
    {
       // alert("Ya se procesó tu solicitud y fue correcta!")
        document.getElementById("divResultado").innerHTML=xhr.response;

    }
}