import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
<h3> Counter: {{ counter }}</h3>

<button (click)="increaseBy( -1 )"> -1 </button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy( 1 )"> +1 </button>

  `
}) //* Decorador para convertir la clase en componente. Las llaves se abren para definir la configuracion del objeto. Selector, template, y style


export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}

//* PARA HACER MAS RAPIDA LA CRACION DEL COMPONENTE, PODEMOS UTILIZAR EL SNIPPET, COLOCANDO "a-"


