import { Component, EventEmitter, Output,} from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent{

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();  /* Creacion de una instancia de emisor de evento. onNewCharacter va a ser la emision de un objeto de tipo Character. Los datos ingresados en el formulario necesito escucharlos desde el mainpage y guardarlos en el arreglo de characters para poder mostrarlos en el listado. Para eso usamos el decorador outputs */

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    console.log(this.character)

    // debugger;

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0};
  }
  }

