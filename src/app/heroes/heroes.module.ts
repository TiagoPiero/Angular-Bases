import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule //* IMPORTACION NECESARIA PARA PODER UTILIZAR EL MODULO PORQUE I11|NCLUYE LAS DIRECTIVAS NGIF NGFOR
  ]
})
export class HeroesModule {}


//* El modulo se podia crear usando el snipet -a que crea todo el modulo automaticamente
