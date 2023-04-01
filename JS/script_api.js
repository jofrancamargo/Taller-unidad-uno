        // con el fetch llamamos el api 
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            // con este crear tabla y entre parentecis data la enviamos a la funcion en la linea 12
            crearTabla(data);
        })
        // si la tabla me genera un error en alguna parte utilizo el sigueinte codigo
        .catch(error => console.log(error));
        // esta function la llamamos con la informacion registrada en la linea 6
        function crearTabla(data) {
                        // creamos una constante llamada anime resultados en ingles Array
                        const animeArray = data.results;
                        // ahora creamos una tabla donde va la informacion que traemos
                        const table = document.createElement("table");
                        // ahora creamos la cabecera
                        const tableHeader = document.createElement("tr");
                        // ahora creamos las columnas de la cabecera
                        // si deseo enumerar los datos lo puedo hacer con la constante id 
                        const idHeader = document.createElement("th");
                        const nameHeader = document.createElement("th");
                        // const urlHeader = document.createElement("th");
                        // ahora creamos el texto de como se van a nombrar las columnas
                        idHeader.innerText = "ID";
                        nameHeader.innerText = "Nombre";
                        // urlHeader.innerText = "URL";
                        // ahora agregamos las columnas a la cabecera
                        tableHeader.appendChild(idHeader);
                        tableHeader.appendChild(nameHeader);
                        // tableHeader.appendChild(urlHeader);
                        // ahora agregamos la cabecera a la tabla 
                        table.appendChild(tableHeader);
                        // si ya contamos con la estructura de HTML podemos hacer el codigo relacionado a continuacion
            
                        // Aqui realizamos un for para empezar a recorrer el arreglo 
                        // por lo que lo definimos con el let i para que inicie desde 
                        // la posicion cero y que sea menor a la constante definida 
                        // en la linea 12 animeArray y el length para que realice el conteo
                        for (let i = 0; i < animeArray.length; i++) {
                            // creamos la fila para insertar a los datos en la etiqueta creada arriba
                            const animeRow = document.createElement("tr");
                            // creamos la columna para insertar a los datos en la etiqueta creada arriba
                            const idData = document.createElement("td");
                            const nameData = document.createElement("td");
                            // const urlData = document.createElement("td");
                            // ahora agregamos los datos a la columna de la linea
                            // el idData  es para indicar que me le asigne la enumeracion desdes 1, 2, 3 
                            idData.innerText = i + 1;
                            nameData.innerText = animeArray[i] .name;
                            // urlData.innerHTML = `<a href="${animeArray[i] .url}" target="_blank">Ver</a>`;
                            // ahora agreguemos las columnas a la fila
                            animeRow.appendChild(idData);
                            animeRow.appendChild(nameData);
                            // animeRow.appendChild(urlData);
                            // ahora agregamos la fila a la tabla 
                            table.appendChild(animeRow);
                        }
            
                        // ahora agregamos la tabla al body
                        document.body.appendChild(table);
                    }
