import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService )  {

  }
  //* inyeccion de dependencias. Inyecto el servicio que tiene la informacion para no tener toda la logica en este archivo

  get characters(): Character[] {
      return [...this.dbzService.characters]; //*los 3 puntos (spread) son para crear una copia del arreglo para que en caso de hacer una modificacion no se modifiquen los datos del arreglo que se encuentra en el servicio. Puede que esto sea una necesidad pero usualmente no, por eso se envia la copia
  }

  onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }
}

//* Es buena practica que los servicios se declaren como privados y no como publicos. Entonces para poder acceder a sus metodos y propiedades utilizamos
