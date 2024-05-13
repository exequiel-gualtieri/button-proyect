import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoogieBtnComponent } from "./components/boogie-btn/boogie-btn.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BoogieBtnComponent]
})
export class AppComponent {
  title = 'button-proyect';
}
