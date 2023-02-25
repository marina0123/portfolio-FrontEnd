import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  hab : Habilidades = null;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(private habilidadesService: HabilidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesService.detail(id).subscribe(
      data => {
        this.hab = data;
      }, err =>{
        alert("Error al actualizar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesService.update(id, this.hab).subscribe(
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
