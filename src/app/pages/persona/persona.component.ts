import { PersonaService } from './../../_service/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.listar();
  }

}
