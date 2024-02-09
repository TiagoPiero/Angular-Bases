import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //** Como llamo al componente para poder llamarlo */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'bases';

}
