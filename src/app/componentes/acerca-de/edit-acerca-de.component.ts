import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  pers : Persona = null;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(public personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.pers = data;
      }, err =>{
        alert("Error al actualizar datos personales");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pers.img = this.personaService.url
    this.personaService.update(id, this.pers).subscribe(
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
  
  uploadImage($event:any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "foto_" + id;
    this.personaService.uploadImage($event, name)
  }

}
