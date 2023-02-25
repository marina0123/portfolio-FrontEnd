export class Experiencia {
    id : number;
    puesto : string;
    empresa: string;
    descripcion : string;
    periodo : string;
    
    constructor(puesto: string, empresa: string, descripcion: string, periodo: string){
        this.puesto = puesto;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.periodo = periodo;
    }
}
