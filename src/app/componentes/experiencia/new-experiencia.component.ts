import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  puesto: string;
  empresa: string;
  descripcion: string;
  periodo: string;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    const expe = new Experiencia(this.puesto, this.empresa, this.descripcion, this.periodo);
    this.experienciaService.save(expe).subscribe(
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
