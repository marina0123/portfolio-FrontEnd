import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bann: Banner = null;

  constructor(public bannerService: BannerService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarBanner();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarBanner() {
    this.bannerService.detail(1).subscribe(data => {this.bann = data})
  }

}
