function ingreso(){
    let gmail = document.getElementById("gmail").value;
    let contra = document.getElementById("contraseña").value;

    if (gmail === "" || contraseña === ""){
        alert("Debe ingresar los datos en el campos");
        return;
    }
    let formatoGmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!formatoGmail.test(gmail)){
        alert("ingrese un correo válido")
        return;
    }
    if(contra.length <8){
        alert("Contraseña muy corta")
        return;
    }
     else if(gmail === "admin123@gmail.com" && contra === "contraseña"){
        window.location.href = "administrador.html";
    } 
     else if(gmail === "cliente123@gmail.com" && contra === "contraseña"){
        window.location.href = "Inicio.html";
    } 
    else if(gmail === "operador123@gmail.com" && contra === "contraseña"){
        window.location.href = "operador.html";
    }
    else if(gmail === "repartidor123@gmail.com" && contra === "contraseña"){
        window.location.href = "repartidor.html";
    }else{
        alert("usuario o contraseña invalido")
    }
    

}
function registro(){
    let gmail = document.getElementById("gmail").value;
    let contra = document.getElementById("contraseña").value;
    let confirmar = document.getElementById("Confirmacontraseña").value;
    let direccion = document.getElementById("direccion").value;

    if (gmail === "" || contraseña === "" || confirmar === "" || direccion === ""){
        alert("Debe ingresar los datos en el campos");
        return;
    }
    let formatoGmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!formatoGmail.test(gmail)){
        alert("ingrese un correo válido")
        return;
    }
    if(contra.length <8 ){
        alert("Contraseña es muy corta")
        return;
    }
    if (confirmar !== contra){
        alert("La contraseña no es igual")

    }
    else{
        alert("Registrado Exitosamente")
        window.location.href = "Inicio.html";
    }
  
    
}