let galones=[
    {
        id:1,
        nombre:"galon de 5kg",
        precio: 10000,
        descripcion:"galon de gas licuado de 5kg",
        cantidad:"1",
        imagen:"Imagenes/gas de 5 kg.jpg"
    },
    {
        
        id:2,
        nombre:"galon de 11kg",
        precio: 10000,
        descripcion:"galon de gas licuado de 11kg",
        cantidad:"1",
        imagen:"Imagenes/gas de 11kg.jpg"
    },
    {
        id:3,
        nombre:"galon de 15kg",
        precio: 10000,
        descripcion:"galon de gas licuado de 15kg",
        cantidad:"1",
        imagen:"Imagenes/gas de 15kg.jpg"
    }
];
let lista = document.getElementById("listaGalones")
if(lista){
for(let i = 0; i < galones.length; i++){
    lista.innerHTML +=`
    <div>
        

            <div class="card" style="width: 18rem;">
            <img src="${galones[i].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${galones[i].nombre}</h5>
            <p class="card-text">Precio: $${galones[i].precio}</p>
            <button type="button" class="btn btn-primary btn-sm" onclick="verDetalle(${galones[i].id})">comprar</button>
            </div>
    </div>
   `;



}}

function verDetalle(id){
    let galonElegido;

    for (let i = 0; i < galones.length; i++){
        if(galones[i].id === id){
            galonElegido = galones[i];
        }
    }
    localStorage.setItem(
        "galones",
        JSON.stringify(galonElegido)
    );

    window.location.href = "detalle.html"
}

