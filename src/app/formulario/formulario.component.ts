import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() aoPreencherFormulario = new EventEmitter<any>();

  nome: any;
  numeroDoCartao: any;
  data: any;
  cvc: any;

  visualizar() {
    console.log("nome : ", this.nome)
    const valorEmitir = { nome: this.nome, numeroDoCartao: this.numeroDoCartao, data: this.data, cvc: this.cvc }
    this.aoPreencherFormulario.emit(valorEmitir)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
