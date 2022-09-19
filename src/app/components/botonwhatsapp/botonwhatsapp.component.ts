import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'botonwhatsapp',
  templateUrl: './botonwhatsapp.component.html',
  styleUrls: ['./botonwhatsapp.component.css']
})
export class BotonwhatsappComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  constructor() { }

  ngOnInit(): void {
  }

}
