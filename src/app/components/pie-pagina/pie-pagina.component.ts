import { Component, OnInit } from '@angular/core';

import {  } from '@fortawesome/angular-fontawesome';
import {  } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {
  faEnvelope = faEnvelope;
  faMobileRetro = faMobileRetro;
  faLocationDot = faLocationDot;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faTelegram = faTelegram;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
