class Comentario {
        constructor() {
        this.texto = "";
        }
    
        capturar() {
        this.texto = prompt("Por favor, ingrese su comentario:");
        }
    
        obtenerTexto() {
        return this.texto;
        }
    }
    
    // Ejemplo de uso
    const miComentario = new Comentario();
    miComentario.capturar();
    console.log("El comentario del usuario es: " + miComentario.obtenerTexto());
    

