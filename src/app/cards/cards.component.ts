import { Component, Input, OnInit } from '@angular/core';
import {FormularioComponent} from '../formulario/formulario.component'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() preencherFormulario: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
