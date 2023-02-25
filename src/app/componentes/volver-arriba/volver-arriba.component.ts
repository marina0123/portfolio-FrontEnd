import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volver-arriba',
  templateUrl: './volver-arriba.component.html',
  styleUrls: ['./volver-arriba.component.css']
})
export class VolverArribaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let button = document.getElementById("icono");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
  }

}
