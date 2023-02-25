export class Educacion {
    id : number;
    titulo : string;
    instituto : string;
    periodo: string;

    constructor(titulo: string, instituto: string, periodo: string){
        this.titulo = titulo;
        this.instituto = instituto;
        this.periodo = periodo;
    }
}
