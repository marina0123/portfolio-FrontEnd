import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  titulo: string;
  instituto: string;
  periodo: string;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.titulo, this.instituto, this.periodo);
    this.educacionService.save(educ).subscribe(
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
