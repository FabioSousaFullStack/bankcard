import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bankcardapp';
  nome:any;
  numeroDoCartao: any;
  data: any;
  cvc: any;

  preencherForulario($event: { nome: any; numeroDoCartao: any; data: any; cvc: any; }){
    this.nome = $event.nome;
    this.numeroDoCartao = $event.numeroDoCartao;
    this.data = $event.data;
    this.cvc= $event.cvc;

  }
}
