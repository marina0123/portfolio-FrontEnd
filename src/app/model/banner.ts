export class Banner {
    id: number;
    nombre: string;
    apellido: string;
    titulo: string;
    img: string;

    constructor(nombre: string, apellido: string, titulo: string, img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;    
        this.img = img;
    }
}
