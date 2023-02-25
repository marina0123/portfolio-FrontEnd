import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  bann : Banner = null;
  successMessage: boolean;
  dangerMessage: boolean;
  
  constructor(public bannerService: BannerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bannerService.detail(id).subscribe(
      data => {
        this.bann = data;
      }, err =>{
        alert("Error al actualizar el banner");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bann.img = this.bannerService.url
    this.bannerService.update(id, this.bann).subscribe(
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
    const name = "banner_" + id;
    this.bannerService.uploadImage($event, name)
  }

}
