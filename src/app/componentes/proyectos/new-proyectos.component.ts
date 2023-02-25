import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string;
  descripcion: string;
  fecha: string;
  link: string;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombre, this.descripcion, this.fecha, this.link);
    this.proyectosService.save(proy).subscribe(
      data => {
        if (data){
          this.successMessage = true;
          setTimeout(function() {location.href = ""}, 2000);
        } else {
          this.successMessage = false;
        }
      }, err => {
        this.dangerMessage = true;
        setTimeout(function() {location.href = ""}, 2000);
      }     
    )
  }

}
