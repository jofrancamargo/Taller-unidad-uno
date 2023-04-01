
function buscarPersonaje() {
    // Obtener el valor del input
    const personaje = document.getElementById("personajeName").value;
    // Obtener el elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    // Llamar a la API
    fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
    .then(response => response.json())
    .then(data => {
        if (data.results.length > 0) { // Verifica que se hayan encontrado resultados
            // Crear el elemento donde se mostrará el nombre
            const nombre = document.createElement("p");
            // Agregar el nombre al elemento
            nombre.innerText = data.results[0].name;
            // Agregar el elemento al resultado
            resultado.appendChild(nombre);

            // Crear el elemento donde se mostrará la imagen
            const imagen = document.createElement("img");
            // Agregar la imagen al elemento
            imagen.src = data.results[0].image;
            // Agregar el elemento al resultado
            resultado.appendChild(imagen);
        } else { // Si no se encontraron resultados
            const error = document.createElement("p");
            error.innerText = "No se encontró el personaje buscado";
            resultado.appendChild(error);
        }
    })
    .catch(error => console.error(error));
}






