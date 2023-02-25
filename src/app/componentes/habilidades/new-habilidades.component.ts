import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {
  habilidad: string;
  porcentaje: number;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(private habilidadesService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hab = new Habilidades(this.habilidad, this.porcentaje);
    this.habilidadesService.save(hab).subscribe(
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
