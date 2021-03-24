import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>Hola mundo</h1>

    <h3>La base es: {{base}}</h3>

    <button (click)=" numero = numero + base"> + </button>

    <span> {{ numero  }} </span>

    <button (click)=" numero = numero - base"> - </button>
  
    `
})

export class contadorComponent {

    title = 'contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number) {
      this.numero +=1;
    }

}