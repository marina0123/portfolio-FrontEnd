import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  hab: Habilidades[] = [];

  constructor(private habilidadesService: HabilidadesService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void {
    this.habilidadesService.lista().subscribe(data => {this.hab = data;})
  }

  delete(id: number){
    if(id != undefined){
      this.habilidadesService.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("Error al eliminar habilidad");
        }
      )
    }
  }

}
