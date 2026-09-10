let galones = JSON.parse(
    localStorage.getItem("galones")
);
document.getElementById("imagen").src= galones.imagen;

document.getElementById("nombre").textContent = galones.nombre;

document.getElementById("precio").textContent ="Precio  total $ " + galones.precio;

document.getElementById("descripcion").textContent = galones.descripcion;

document.getElementById("cantidad").textContent ="cantidad: " + galones.cantidad;

