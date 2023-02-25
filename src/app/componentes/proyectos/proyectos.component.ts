import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }
 
  isLogged = false;
 
  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosService.lista().subscribe(data => {this.proy = data;})
  }

  delete(id: number){
    if(id != undefined){
      this.proyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("Error al eliminar proyecto");
        }
      )
    }
  }
  
}
