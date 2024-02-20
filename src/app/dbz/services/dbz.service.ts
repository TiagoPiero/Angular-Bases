import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({   //*decorador para especificar que la clase es un servicio
  providedIn: 'root' //es para no tener que ponerlo en los providers en el module.ts. Sirve para especificar que el servicio va a ser un singleton en toda la aplicaciom, es decir, no importa en cuantos lugares utilice el servicio siempre y cuando lo haga mediante la inyeccion de dependencias

})
  export class DbzService {

    public characters: Character[] = [{
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Vegetta',
      power: 7500
    }];

    addCharacter(character: Character): void {

      const newCharacter: Character = {id: uuid(), ...character}
      //* con el operador spread (...) ...character lo que estoy diciendo es toma todas sus propiedades y esparcelas en este nuevo objeto que estoy creando. Seria lo mismo que hacer la asignacion de cada atributo, por ej en este caso, name = character.name. Entonces si hay mas propiedades, no hay que cambiar nada

      this.characters.push(newCharacter);

        /*el push pone el objeto en la ultima posicion del arreglo. el unshift en la primera.*/
    }

  //   onDeleteCharacter(index: number):void {
  //     this.characters.splice(index,1);
  // }

    deleteCharacterById(id: string):void {
      this.characters = this.characters.filter(character => character.id !== id)
    }

  }
