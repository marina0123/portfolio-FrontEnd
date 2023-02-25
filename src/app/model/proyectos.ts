export class Proyectos {
    id : number;
    nombre : string;
    descripcion : string;
    fecha: string;
    link: string;

    constructor(nombre: string, descripcion: string, fecha: string, link: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.link = link;
    }
}
